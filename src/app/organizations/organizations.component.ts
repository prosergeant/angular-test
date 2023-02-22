import {Component} from '@angular/core';
import {ConfigService} from "../config.service";
import {Organizations} from "../organizations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {
    constructor(private configService: ConfigService, private router: Router) {}

    organizations: Organizations[] = []

    ngOnInit(): void {
        this.configService.getData<Organizations[]>('organizations/')
            .subscribe(data => {
                this.organizations = data
            })
    }

    goToOrg(id: number) {
        this.router.navigate([`org/${id}`])
    }
}
