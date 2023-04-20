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
                        path: '',
                        redirectTo: 'passport/general_information/organization_data',
                        pathMatch: 'full',
                    },
                    {
                        path: 'passport',
                        children: [
                            {
                                path: '',
                                redirectTo: 'general_information/organization_data',
                                pathMatch: 'full',
                            },
                            {
                                path: 'general_information',
                                children: [
                                    {
                                        path: '',
                                        redirectTo: 'organization_data',
                                        pathMatch: 'full',
                                    },
                                    {path: 'organization_data', component: OrganizationDetailComponent},
                                    {path: 'object_characteristic', component: OrganizationDetailComponent},
                                ]
                            },

                            // {
                            //     path: 'documents',
                            //     children: [
                            //         {path: 'title_documents'},
                            //         {path: 'communication_network'},
                            //         {path: 'plan_n_schemas'},
                            //         {path: 'other_docs'},
                            //     ]
                            // },
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
