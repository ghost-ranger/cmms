import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
import {FormGroup,FormControl, NgForm} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  onRegisterUser(form: NgForm){
    const firstname=form.value.firstname;
    const lastname=form.value.lastname;
    const username=form.value.username;
    const pincode=form.value.pincode;    
    const email=form.value.email;
    const userstatus=form.value.userstatus;    
    const userrole=form.value.userrole;
    const accountid=form.value.accountid;
    const password=form.value.password;
    console.log(firstname,lastname,username,pincode,email,userstatus,userrole,accountid,password);
  }
}
