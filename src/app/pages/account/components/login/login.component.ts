import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from 'src/app/core/store/app-store.reducer';
import { errorMessage } from 'src/app/pages/account/store/selectors/account.selectors';
import * as AccountActions from '../../store/actions/account.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error$: Observable<string>;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.error$ = this.store.select(errorMessage);
  }

  login() {
    let credentials = this.loginForm.value;
    if (this.loginForm.valid) {
      this.store.dispatch(AccountActions.login({ credentials }));
    }
    this.loginForm.reset();
  }

  //Getters del formulario
  get emailField() {
    return this.loginForm.get('email');
  }

  get emailFieldIsInvalid() {
    return this.emailField.errors && this.emailField.dirty;
  }

  get emailFieldIsValid() {
    return !this.emailField.errors && this.emailField.dirty;
  }

  get emailIsRequired() {
    return this.emailField.hasError('required') && this.emailField.dirty;
  }

  get emailPatternIsInvalid() {
    return this.emailField.hasError('email') && this.emailField.dirty;
  }

  // PASSWORD
  get passwordField() {
    return this.loginForm.get('password');
  }

  get passwordFieldIsInvalid() {
    return this.passwordField.errors && this.passwordField.dirty;
  }

  get passwordFieldIsValid() {
    return !this.passwordField.errors && this.passwordField.dirty;
  }

  get passwordIsRequired() {
    return this.passwordField.hasError('required') && this.passwordField.dirty;
  }

  get passwordLengthIsInvalid() {
    return this.passwordField.hasError('minlength') && this.passwordField.dirty;
  }
}
