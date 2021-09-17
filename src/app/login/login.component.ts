import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
import {FormBuilder,FormGroup,FormControl, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import {AngularFontAwesomeModule} from '@fortawesome/fontawesome-free'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: ManageService, public route: ActivatedRoute) { }

  ngOnInit(): void {}
  onLoginUser(form: NgForm){
    const email=form.value.emailaddress;
    const password=form.value.password;
    const headers=form.value.headers;
    const data={
      "username": email,
      "password": password,
      "headers":'Content-Type : application/json'
  }
    this.loginService.saveLogin(data);
  }
}
