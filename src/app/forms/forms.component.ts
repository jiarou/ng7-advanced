import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  data: any = {};
  items: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm ) {
    if ( form.invalid) {
      alert('please enter all');
    } else {
      console.log('送出表單');
    }
  }


}
