import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor(
        private http: HttpClient,
    ) {}

    readonly BASEURL = 'http://10.10.77.102:8000/'

    getData<T>(url: string) {
        return this.http.get<T>(this.BASEURL + url)
            // .pipe(catchError(this.errorHandler))
    }

    // errorHandler() {
    //     return throwError(() => new Error('Something bad happened; please try again later' ))
    // }
}


