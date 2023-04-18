import {Component} from '@angular/core';
import {ConfigService} from "../config.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Organizations} from "../organizations";

@Component({
    selector: 'app-organization-detail',
    templateUrl: './organization-detail.component.html',
    styleUrls: ['./organization-detail.component.scss']
})
export class OrganizationDetailComponent {

    constructor(
        private configService: ConfigService, 
        private router: Router
        ) {}

    org: Organizations = {} as Organizations
    orgId = parseInt(this.router.url.match(/\d+/)?.toString() || '0')
    org_str = '{pupa: lupa}'

    ngOnInit(): void {
        this.configService.getData<Organizations>(`organizations/object/${this.orgId}`)
            .subscribe((org_data) => {
                this.org = org_data
                this.org_str = JSON.stringify(org_data)
                this.org_str = this.org_str.replaceAll(',', ',\n')
            })
    }


}
