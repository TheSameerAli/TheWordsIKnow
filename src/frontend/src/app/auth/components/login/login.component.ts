import { AuthenticationService } from './../../../services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthenticationService) {
    console.log(authService);
  }

  ngOnInit() {
  }

}