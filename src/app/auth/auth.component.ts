import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, AuthResponse } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert-component/alert.component';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { PlaceHolderDirective } from '../shared/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = false;
  isLoading =  false;
  error = null;
  authForm: FormGroup;
  closeSub: Subscription;
  @ViewChild(PlaceHolderDirective) placeHolder: PlaceHolderDirective;
  constructor(private authService: AuthService,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) { }

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
        this.isLoading = false;
        this.error = 'An error has occured. Reason: ' + errorResponse.error.error.message;
        this.showError(this.error);
        this.authForm.reset();
      }
    );
  }

  showError(message: string) {
    const cf = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostAlert = this.placeHolder.viewContainerRef;
    hostAlert.clear();
    const component = hostAlert.createComponent(cf);
    component.instance.message = message;
    this.closeSub = component.instance.closeEvent.subscribe(() => {
      hostAlert.clear();
      this.closeSub.unsubscribe();
    });
   }
  handleError() {
     this.error = null;
  }

  ngOnDestroy() {
    this.closeSub.unsubscribe();
  }
}
