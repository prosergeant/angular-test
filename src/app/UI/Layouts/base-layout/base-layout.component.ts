import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent {

    constructor(private router: Router) {}

    drowSidebar(): boolean {
        return this.router.url !== '/'
    }
}
