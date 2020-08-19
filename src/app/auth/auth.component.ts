import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, AuthResponse } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = false;
  isLoading =  false;
  error = null;
  authForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  onSwitchToLogin() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    let authObservable: Observable<AuthResponse>;
    if (!this.authForm.valid) {
      return;
    }
    this.isLoading = true;
    if (this.isLoginMode) {
      authObservable = this.authService.login(this.authForm.value.email, this.authForm.value.password);
    } else {
      authObservable = this.authService.signup(this.authForm.value.email, this.authForm.value.password);
    }

    authObservable.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.authForm.reset();
        this.router.navigate(['/recipes']);
      },
      (errorResponse) => {
        console.log(errorResponse.error.error.message);
        this.isLoading = false;
        this.error = 'An error has occured. Reason: ' + errorResponse.error.error.message;
        this.authForm.reset();
      }
    );
  }
}
