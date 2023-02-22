import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auth} from "./auth";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Router} from "@angular/router";

export const ACCESS_TOKEN = 'access_token'
export const REFRESH_TOKEN = 'refresh_token'

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private tokenSubject$ = new BehaviorSubject<Auth | null>(null)

    token = localStorage.getItem(ACCESS_TOKEN) || ''
    refresh = localStorage.getItem(REFRESH_TOKEN) || ''

    constructor(private http: HttpClient, private router: Router) {
        if(this.token && this.refresh)
            this.tokenSubject$.next({access: this.token, refresh: this.refresh})
    }

    auth(email: string, password: string) {
        return this.http.post<Auth>('http://10.10.77.102:8001/api/token/', {email, password})
            .pipe(
                map(data => {
                    this.tokenSubject$.next(data)
                    localStorage.setItem(ACCESS_TOKEN, data.access)
                    localStorage.setItem(REFRESH_TOKEN, data.refresh)
                    return data
                })
            )
    }

    getToken(): string | null {
        return this.tokenSubject$.value?.access || null
    }

    refreshToken(): Observable<Auth> {
        return this.http.post<Auth>('http://10.10.77.102:8001/api/token/refresh/', {refresh: this.tokenSubject$.value?.refresh})
            .pipe(
                map(data => {
                    this.tokenSubject$.next(data)
                    localStorage.setItem(ACCESS_TOKEN, data.access)
                    localStorage.setItem(REFRESH_TOKEN, data.refresh)
                    return data
                })
            )
    }

    logout() {
        localStorage.clear()
        this.router.navigate(['/auth'])
    }
}
