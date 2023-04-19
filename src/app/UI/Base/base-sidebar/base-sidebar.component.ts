import { Component } from '@angular/core';
import { Modules } from 'src/app/organizations';
import {ConfigService} from "../../../config.service";
import {Route, Router} from "@angular/router";

@Component({
    selector: 'app-base-sidebar',
    templateUrl: './base-sidebar.component.html',
    styleUrls: ['./base-sidebar.component.scss']
})
export class BaseSidebarComponent {

    constructor(private configService: ConfigService, private router: Router) {
        this.modules = this.configService.getModules() || []
        this.currOrg = router.url.split('/')?.[2] || ''
    }

    modules: Modules[] = []
    currOrg = ''

    getRoutes(module: string) {
        return (this.configService.findd('path', module, 'children')(this.router.config?.[0]) as Route)?.children?.slice(1) as Route[]
    }
}
