import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator, FormControl, FormArray } from '@angular/forms';
import { nameValidator } from './nameValidator';



@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form  = this.fb.group({
       name: ['Ruby', [ Validators.required, Validators.minLength(3)] ],
      //  email: ['rcai.tw@ffn.com', [ Validators.required] ]
      //   group1: this.fb.group({
      //   email: ['rcai.tw@ffn.com', [ Validators.required] ],
      // })
      contacts: this.fb.array([
      this.fb.group({
        name: ['Ruby', [ Validators.required, Validators.minLength(3), nameValidator ]],
        email: ['rcai.tw@ffn.com', [ Validators.required] ]
      }),
      this.fb.group({
        name: ['Test', [ Validators.required, Validators.minLength(3), nameValidator] ],
        email: ['rcai.tw@ffn.com', [ Validators.required] ]
      })
    ])
    });
  //   this.form.reset({
  //     contacts: [
  //     { name : 'yaya', email: '1233@gmail.com'  },
  //     {  name : '123', email: 'yaya@gmail.com'  }
  //     ]
  //  });
  }

  toggleDisable(name: FormControl ) {
    if (name.disabled) {
      name.enable();
    } else {
      name.disable();
    }
  }

  AddNewContact() {
    const arr = this.form.get('contacts') as FormArray;
    arr.push(
      this.fb.group({
        name: ['Test', [ Validators.required, Validators.minLength(3)] ],
        email: ['rcai.tw@ffn.com', [ Validators.required] ]
      })

    );


  }

}
