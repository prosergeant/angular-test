import {Component} from '@angular/core';
import {ConfigService} from "../config.service";
import {Router} from "@angular/router";
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

    data: Organizations = {} as Organizations
    oldData: Organizations = {} as Organizations
    orgId = parseInt(this.router.url.match(/\d+/)?.toString() || '0')

    weekdays = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ]

    readonly PASSPORT_URL = this.configService.BASEURL

    editorId = ''

    getLogo() {
        return this.data?.logo ? this.PASSPORT_URL.slice(0, -1) + this.data.logo : '/assets/img/logo-kalkan.png'
    }

    cancel() {
        this.editorId = ''
        this.data = JSON.parse(JSON.stringify(this.oldData) || '{}')
    }

    save() {
        this.editorId = ''
        this.configService.putData<Organizations>(`organizations/object/${this.orgId}`, this.data)
            .subscribe()
    }

    ngOnInit(): void {
        this.configService.getData<Organizations>(`organizations/object/${this.orgId}`)
            .subscribe((org_data) => {
                this.data = org_data
                this.oldData = JSON.parse(JSON.stringify(org_data) || '{}')
            })
    }
}
