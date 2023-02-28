import {Component, Input, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'UiButton',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {

    @ViewChild('template', {static: true}) template: any

    constructor(private viewContainerRef: ViewContainerRef) {
        if(this.type === undefined) {
            this.type = 'button'
        }
    }

    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template)
        this.viewContainerRef.element.nativeElement.remove()
    }


    @Input() icon?: string | boolean
    @Input() disabled?: boolean
    @Input() type?: string
    @Input() color?: string
    @Input() size?: string
    @Input() loading?: boolean
}
