import { googleLoginSettings } from './../settings/googlelogin.settings';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { AuthService } from '../shared/auth/auth-service.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailRegex = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  private loggedIn: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      password: [null, Validators.required],
    });
  }

  signInWithGoogle(): void {
    // this.authSocialService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    // this.authSocialService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    // this.authService.signOut();
  }

  ngOnInit(): void {
    // this.authService.authState.subscribe(user => {
    //   this.user = user;
    //   this.loggedIn = user != null;
    // });
  }

  login() {
    // if (!this.loginForm.valid) {
    //   return;
    // }
    // this.loginForm.reset();

    // console.log("You submitted login form");

    this.authService.login();
  }

  onSubmit() {}
}
