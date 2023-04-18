import { Component, Input } from '@angular/core';
import { Modules } from 'src/app/organizations';

@Component({
    selector: 'app-base-sidebar',
    templateUrl: './base-sidebar.component.html',
    styleUrls: ['./base-sidebar.component.scss']
})
export class BaseSidebarComponent {

    ngOnInit() {
        this.modules = JSON.parse(localStorage.getItem('modules') || '{}') as Modules[]
    }

    modules: Modules[] = []

}
