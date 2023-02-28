import {Component, Input} from '@angular/core';

@Component({
    selector: 'UiButton',
    templateUrl: './ui-button.component.html',
    styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {

    constructor() {
        if(this.type === undefined) {
            this.type = 'button'
        }
    }

    @Input() icon?: string | boolean
    @Input() disabled?: boolean
    @Input() type?: string
    @Input() color?: string
    @Input() size?: string
    @Input() loading?: boolean
}
