import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {ConfigService} from "../config.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    constructor(
        private authService: AuthService,
        private configService: ConfigService,
        private router: Router,
    ) {
    }

    email = ''
    password = ''
    isError = false
    loading = false

    login() {
        // this.loading = true
        this.authService.auth(this.email, this.password)
            .subscribe(data => {
                if (data.access)
                    this.router.navigate(['/'])
            })
    }
}
