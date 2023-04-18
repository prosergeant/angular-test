import {Component} from '@angular/core';
import {ConfigService} from "../config.service";
import {Organizations, Modules} from "../organizations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {
    constructor(private configService: ConfigService, private router: Router) {}

    organizations: Organizations[] = []
    modules: Modules[] = []

    ngOnInit(): void {
        this.configService.getData<Organizations[]>('organizations/')
            .subscribe(data => {
                this.organizations = data
            })

        this.configService.getData<Modules[]>('accounts/modules/', 'AUTH')
            .subscribe(data => {
                localStorage.setItem('modules', JSON.stringify(data))
            })
    }

    goToOrg(id: number) {
        this.router.navigate([`org/${id}/passport/general_information`])
    }
}
