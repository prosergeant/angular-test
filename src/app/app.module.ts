import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {OrganizationsComponent} from './organizations/organizations.component';
import {AppRoutingModule} from "./app-routing.module";
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from "@angular/forms";
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import {InterceptorProvider} from "./auth/http-interceptors/retry-when.interceptor";
import { InputComponent } from './UI/input/input.component';

@NgModule({
    declarations: [
        AppComponent,
        OrganizationsComponent,
        AuthComponent,
        OrganizationDetailComponent,
        InputComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        InterceptorProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
