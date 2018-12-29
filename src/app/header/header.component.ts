import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private showSignInForm:boolean = false;

  public username : String;
  public password : String;
  

  constructor() { }

  ngOnInit() {
  }


  //toggle the display of the logging buttons and the sign in form
toggle() {
  this.showSignInForm = !this.showSignInForm;
}

}
