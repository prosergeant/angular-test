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
import { UiButtonComponent } from './UI/ui-button/ui-button.component';
import { TestPageComponent } from './test-page/test-page.component';
import { BaseLayoutComponent } from './UI/Layouts/base-layout/base-layout.component';
import { BaseSidebarComponent } from './UI/Base/base-sidebar/base-sidebar.component';
import { MiniSideBarLayoutComponent } from './UI/Layouts/mini-side-bar-layout/mini-side-bar-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        OrganizationsComponent,
        AuthComponent,
        OrganizationDetailComponent,
        InputComponent,
        UiButtonComponent,
        TestPageComponent,
        BaseLayoutComponent,
        BaseSidebarComponent,
        MiniSideBarLayoutComponent,
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
