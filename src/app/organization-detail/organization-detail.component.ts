import {Component} from '@angular/core';
import {ConfigService} from "../config.service";
import {ActivatedRoute} from "@angular/router";
import {Organizations} from "../organizations";

@Component({
    selector: 'app-organization-detail',
    templateUrl: './organization-detail.component.html',
    styleUrls: ['./organization-detail.component.scss']
})
export class OrganizationDetailComponent {

    constructor(private route: ActivatedRoute, private configService: ConfigService) {}

    org: Organizations = {} as Organizations
    org_str = ''

    ngOnInit(): void {
        this.route.params.subscribe(data => {
            this.configService.getData<Organizations>(`organizations/object/${data['id']}`)
                .subscribe((org_data) => {
                    this.org = org_data
                    this.org_str = JSON.stringify(org_data)
                    this.org_str = this.org_str.replaceAll(',', ',\n')
                })
        })
    }


}
