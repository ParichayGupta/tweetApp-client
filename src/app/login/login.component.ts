import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  errorMessage = '';
  constructor(private _service: RegistrationService, private _route: Router) { }

  ngOnInit(): void {
  }

  userLogin() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response Received"),
        this._route.navigate(['/home'])
      },
      error => {
        console.log("Exception Occurred"),
        this.errorMessage = "Bad Credentials: Email or Password is invalid !!"
      }
    )
  }

}
