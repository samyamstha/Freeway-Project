import { Component, OnInit } from '@angular/core';

import { Users } from '../users'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private submitted : boolean = false;
  private usersObj : Users;
  public firstName : String;
  public lastName : String;
  public email : String;
  public password : String;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;

    this.usersObj = new Users(this.firstName, this.lastName, this.email, this.password);
  }

  validatePassword() {
    if(this.password.length <= 8){
      return false;
    }else{
      return true;
    }
  }

}
