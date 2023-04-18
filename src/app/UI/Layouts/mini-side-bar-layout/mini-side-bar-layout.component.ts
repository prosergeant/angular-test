import { Component } from '@angular/core';
import { NavigationEnd, Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-mini-side-bar-layout',
    templateUrl: './mini-side-bar-layout.component.html',
    styleUrls: ['./mini-side-bar-layout.component.scss']
})
export class MiniSideBarLayoutComponent {

    constructor(private router: Router) {
        router.events.subscribe(data => {
            if((data as NavigationEnd)?.url) {
                const changedPath = (data as NavigationEnd).url.split('/')?.at(-1)
                if(changedPath !== this.currPath)
                    this.currPath = changedPath
            }
        })
    }

    deepFind = <T>(pred: Function, type = 'fields') => ([x, ...xs]: any[] = []): T => x && (pred (x) ? x : this.deepFind (pred, type) (x[type]) || this.deepFind (pred, type) (xs))
    findd = <T = object>(key: string, val: string, type = 'fields') => (obj: T) => this.deepFind<T>((o: T) => o[key as keyof T] == val, type) ([obj])

    routes: Route = {}
    currPath = this.router.url.split('/')?.at(-1)
    currModule = this.router.url.split('/')?.[3]

    ngOnInit() {
        this.routes = this.findd<Route>('path', this.currModule || '', 'children')(this.router.config?.[0])
    }
}
