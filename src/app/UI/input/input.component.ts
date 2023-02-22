import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'UiInput',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {

    validation = false

    @Input() type!: string
    @Input() isRequired!: boolean | string
    @Input() isDisabled!: boolean
    @Input() modelValue!: number | string | object[] | object
    @Output() modelValueChanger = new EventEmitter<string>()

    onModelValueChanger() {
        this.modelValueChanger.emit(this.modelValue as string)
    }



    @Input() label?: string
    @Input() labelKey?: string
    @Input() icon?: string
    @Input() text?: string
    @Input() placeholder?: string = ''
    @Input() mask?: string
    @Input() optionsKey?: string

    @Input() isTel?: boolean
    @Input() isError?: boolean
    @Input() isMulti?: boolean
    @Input() isFind?: boolean
    @Input() isMy?: boolean
    @Input() isYear?: boolean
    @Input() isNull?: boolean
    @Input() isMyUp?: boolean
    @Input() isNotI18n?: boolean
    @Input() securityMode?: boolean
    @Input() isCreateNew?: boolean
    @Input() isMultiDisabled?: boolean
    @Input() url?: boolean
    @Input() web?: boolean
    @Input() isKeys?: boolean

    @Input() options?: object[]

    @Input() minLength?: number

}
