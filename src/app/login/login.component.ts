import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router: Router) {}

  ngOnInit() {
  }

  loginbtn() {
   if (this.email !== '' && this.password !== '') {
    localStorage.setItem('email', this.email);
    this.router.navigateByUrl('/');
   } else {
   alert('please input email and password');
   }
  }

}
