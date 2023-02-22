import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../../auth.service';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class RetryWhenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    refreshTokenInProgress = false;

    refreshToken(): Observable<any> {
        if (this.refreshTokenInProgress) {
            // если мы уже получаем рефрешь, то делаем новый обсервебле и сразу закрываем его
            // без этого уйдет в бесконечную рекурсию
            return new Observable(observer => {
                observer.next();
                observer.complete();
            })
        } else {
            this.refreshTokenInProgress = true;

            return this.authService.refreshToken().pipe(
                map(() => {
                    this.refreshTokenInProgress = false;
                }),
                catchError(() => {
                    this.refreshTokenInProgress = false;
                    this.authService.logout()
                    return throwError(() => new Error(`fail on refresh token`));
                }));
        }
    }

    addAuthHeaders(request: HttpRequest<any>) {
        const access_token = this.authService.getToken()
        if(access_token)
            return request.clone({
                setHeaders: {
                    Authorization: `Bearer ${access_token}`
                }
            })
        return request
    }

    handleError(error: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        if (error.status === 400) {
        }

        else if (error.status === 401) {
            if(request.url.includes('api/token/refresh/'))
                return throwError(() => new Error(`refresh expired`));
            if(request.url.includes('api/token/'))
                return throwError(() => new Error(`wrong email or password`));

            return this.refreshToken().pipe(
                switchMap(() => {
                    request = this.addAuthHeaders(request);
                    return next.handle(request);
                }),
                catchError(e => {
                    if(e?.status === 401 || e?.status === 400) {
                        this.authService.logout();
                        return throwError(() => new Error(`refresh expired, ${e}`));
                    }
                    return this.handleError(e, request, next);
                }));
        }

        else if (error.status === 403) {
            this.authService.logout()
        }

        else if (error.status === 500) {
        }

        else if (error.status === 503) {
        }

        return throwError(() => new Error(`${error}`));
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        req = this.addAuthHeaders(req)

        return next.handle(req).pipe(catchError(err => {
            return this.handleError(err, req, next)
        }))
    }
}

export const InterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: RetryWhenInterceptor,
    multi: true
}
