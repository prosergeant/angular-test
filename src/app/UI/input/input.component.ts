import {Component, DoCheck, EventEmitter, Input, KeyValueDiffer, KeyValueDiffers, Output} from '@angular/core';

@Component({
    selector: 'UiInput',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    //implements DoCheck

    // // watcher--
    // differ: KeyValueDiffer<string, any>
    // constructor(private differs: KeyValueDiffers) {
    //     this.differ = this.differs.find({}).create()
    // }
    //
    // ngDoCheck() {
    //     const change = this.differ.diff(this)
    //     if(change)
    //         change.forEachChangedItem(item => {
    //             console.log(item)
    //             if(item.key === 'modelValue')
    //                 if(!this.modelValueUdp) {
    //                     this.modelValueUdp = true
    //                     setTimeout(() => {
    //                         this.modelValueChanger.emit(item.currentValue)
    //                         this.modelValueUdp = false
    //                     }, 0)
    //                 }
    //         })
    // }
    // // --watcher

    validation = false

    @Input() type: string = 'default'
    @Input() isRequired!: boolean | string
    @Input() isDisabled!: boolean
    @Input() modelValue!: number | string | object[] | object
    @Output() modelValueChanger = new EventEmitter<any>()

    modelValueEmit(event: Event) {
        const target = event.target as HTMLInputElement
        this.modelValueChanger.emit(target.value)
    }

    // modelValueUdp = false


    @Input() label?: string
    @Input() labelKey?: string
    @Input() icon?: string
    @Input() text?: string
    @Input() placeholder?: string = ''
    @Input() mask?: string
    @Input() optionsKey?: string
    @Input() name: string = ''

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
