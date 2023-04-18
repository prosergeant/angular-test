import { Component } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {
    constructor(private fb: FormBuilder) {
    }

    form: FormGroup = this.fb.group({
        pupa: [null, [Validators.required]]
    })

    onSubmit(f: NgForm) {
        console.log(f.value);  // { first: '', last: '' }
        console.log(f.valid);  // false
    }
}
