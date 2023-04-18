import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrganizationsComponent} from "./organizations/organizations.component";
import {AuthComponent} from "./auth/auth.component";
import {OrganizationDetailComponent} from "./organization-detail/organization-detail.component";
import {TestPageComponent} from "./test-page/test-page.component";
import { BaseLayoutComponent } from './UI/Layouts/base-layout/base-layout.component';
import { MiniSideBarLayoutComponent } from './UI/Layouts/mini-side-bar-layout/mini-side-bar-layout.component';

const routes: Routes = [
    // base layout
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            {path: '', component: OrganizationsComponent},

            {
                path: 'org/:id', 
                // component: OrganizationDetailComponent,
                component: MiniSideBarLayoutComponent,
                children: [
                    {
                        path: 'passport',
                        children: [
                            {path: 'general_information', component: OrganizationDetailComponent},
                            {path: 'characteristics', component: OrganizationDetailComponent},
                        ]
                    }
                ]
            },

            {path: 'test', component: TestPageComponent},
        ]
    },

    // main layout
    // {
    //     path: 'org/:id',
    //     component: MainLayoutComponent,
    //     children: [
    //     ]
    // },

    // without layout
    {path: 'auth', component: AuthComponent},

    //other redirects to home
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
