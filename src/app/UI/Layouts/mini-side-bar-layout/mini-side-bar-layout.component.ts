import { Component } from '@angular/core';
import { NavigationEnd, Route } from '@angular/router';
import { Router } from '@angular/router';
import {ConfigService} from "../../../config.service";

@Component({
    selector: 'app-mini-side-bar-layout',
    templateUrl: './mini-side-bar-layout.component.html',
    styleUrls: ['./mini-side-bar-layout.component.scss']
})
export class MiniSideBarLayoutComponent {

    constructor(private router: Router, private configService: ConfigService) {
        router.events.subscribe(data => {
            if((data as NavigationEnd)?.url) {
                const changedPath = (data as NavigationEnd).url.split('/')?.at(-1)
                if(changedPath !== this.currPath) {
                    this.currPath = changedPath || ''
                    if((data as NavigationEnd)?.url === this.previousUrl) {
                        this.currPath = this.configService.findd<Route>('path', this.previousUrl?.split('/')?.at(-1) || '', 'children')(this.router.config?.[0])?.children?.[0]?.redirectTo || ''
                    }
                }
            }
        })
    }


    routes: Route = {}
    currPath = this.configService.getCurrPath()
    currModule = this.configService.getCurrModule()
    previousUrl = '/' + this.router.url.split('/').slice(1, this.router.url.split('/').length-1).join('/')

    ngOnInit() {
        this.routes = this.configService.findd<Route>('path', this.router.url.split('/')?.at(-2) || '', 'children')(this.router.config?.[0])
    }
}
