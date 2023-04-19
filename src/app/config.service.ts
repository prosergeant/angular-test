import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {Modules} from "./organizations";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.currPath$.next(this.router.url.split('/')?.at(-1) || '')
        this.currModule$.next(this.router.url.split('/')?.[3] || '')

        const modules = JSON.parse(localStorage.getItem('modules') || '{}') as Modules[]
        if(Object.keys(modules).length)
            this.modules$.next(modules)
    }

    readonly MAIN = 'http://10.10.77.102'
    readonly BASEURL = `${this.MAIN}:8000/`
    readonly AUTH = `${this.MAIN}:8001/`

    getData<T>(url: string, def = 'BASEURL') {
        return this.http.get<T>(this[def as keyof ConfigService] + url)
            // .pipe(catchError(this.errorHandler))
    }


    routes: Route = {}
    private currPath$ = new BehaviorSubject<string>('')
    private currModule$ = new BehaviorSubject<string>('')
    private modules$ = new BehaviorSubject<Modules[] | null>(null)

    getCurrPath() {
        return this.currPath$.value
    }
    getCurrModule() {
        return this.currModule$.value
    }
    getModules() {
        return this.modules$.value
    }

    deepFind = <T>(pred: Function, type = 'fields') => ([x, ...xs]: any[] = []): T => x && (pred (x) ? x : this.deepFind (pred, type) (x[type]) || this.deepFind (pred, type) (xs))
    findd = <T = object>(key: string, val: string, type = 'fields') => (obj: T) => this.deepFind<T>((o: T) => o[key as keyof T] == val, type) ([obj])

    // errorHandler() {
    //     return throwError(() => new Error('Something bad happened; please try again later' ))
    // }
}


