import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  ngOnInit(): void {}

  login($event: Event) {
    $event.preventDefault();
    console.log(this.loginForm.value);
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
