import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registroExitoso: boolean = false;
  registroFaild: boolean = false;

  constructor(
    private _accountService: AccountService,
    private formBuilder: FormBuilder
  ) {}

  registerForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {}

  register($event: Event) {
    $event.preventDefault();
    let credentials = this.registerForm.value;
    if (this.registerForm.valid) {
      this._accountService.register(credentials).subscribe(
        (res) => {
          this.registroExitoso = true;
        },
        (error) => {
          this.registroFaild = true;
        }
      );
    }
    this.registerForm.reset(this.registerForm);
  }

  //Getters del formulario
  get emailField() {
    return this.registerForm.get('email');
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
    return this.registerForm.get('password');
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

  get passwordIsTheSame() {
    return this.passwordField.hasError('minlength') && this.passwordField.dirty;
  }
}
