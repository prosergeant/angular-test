import { Pipe, PipeTransform } from '@angular/core';
import RU from '../ru.json'

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {

    transform(key?: string): string {
        console.log('qweqwe')
        for(const [k,v] of Object.entries(RU))
            if(k === key)
                return v
        return key || ''
    }
}
