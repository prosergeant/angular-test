import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor(
        private http: HttpClient,
    ) {}

    readonly MAIN = 'http://10.10.77.102'
    readonly BASEURL = `${this.MAIN}:8000/`
    readonly AUTH = `${this.MAIN}:8001/`

    getData<T>(url: string, def = 'BASEURL') {
        return this.http.get<T>(this[def as keyof ConfigService] + url)
            // .pipe(catchError(this.errorHandler))
    }

    // errorHandler() {
    //     return throwError(() => new Error('Something bad happened; please try again later' ))
    // }
}


