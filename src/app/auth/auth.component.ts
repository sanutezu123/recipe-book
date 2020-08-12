import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

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
  constructor(private authService: AuthService) { }

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
    if (!this.authForm.valid) {
      return;
    }
    this.isLoading = true;
    if (this.isLoginMode) {
      //do login
    } else {
      this.authService.signup(this.authForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.isLoading = false;
        },
        (errorResponse) => {
          console.log(errorResponse.error.error.message);
          this.isLoading = false;
          this.error = 'An error has occured. Reason: ' + errorResponse.error.error.message;
        }
      );
    }
    this.authForm.reset();
  }

}
