import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrganizationsComponent} from "./organizations/organizations.component";
import {AuthComponent} from "./auth/auth.component";
import {OrganizationDetailComponent} from "./organization-detail/organization-detail.component";

const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: OrganizationsComponent },
            { path: 'org/:id', component: OrganizationDetailComponent }
        ]
    },
    {path: 'auth', component: AuthComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
