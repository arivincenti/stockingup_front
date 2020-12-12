import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/pages/account/services/account.service';
import { UserNameValidation } from 'src/app/util/validations/username.validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registroExitoso: boolean = false;
  registroFaild: boolean = false;
  registerForm: FormGroup;

  constructor(
    private _accountService: AccountService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required],
        [UserNameValidation.isNotAvaible(this._accountService)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  // ==================================================
  // REGISTER
  // ==================================================
  register(value: any) {
    let credentials = value;
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

  // ==================================================
  // GETTERS
  // ==================================================
  //USERNAME
  get usernameField() {
    return this.registerForm.get('username');
  }

  get usernameFieldIsInvalid() {
    return this.usernameField.errors && this.usernameField.dirty;
  }

  get usernameFieldIsValid() {
    return !this.usernameField.errors && this.usernameField.dirty;
  }

  get usernameIsRequired() {
    return this.usernameField.hasError('required') && this.usernameField.dirty;
  }

  get usernamePatternIsInvalid() {
    return (
      this.usernameField.hasError('isNotAvaible') && this.usernameField.dirty
    );
  }

  //EMAIL
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

  // CONFIRM PASSWORD
  get confirmPasswordField() {
    return this.registerForm.get('confirmPassword');
  }

  get confirmPasswordFieldIsInvalid() {
    return this.confirmPasswordField.errors && this.confirmPasswordField.dirty;
  }

  get confirmPasswordFieldIsValid() {
    return !this.confirmPasswordField.errors && this.confirmPasswordField.dirty;
  }

  get confirmPasswordIsRequired() {
    return (
      this.confirmPasswordField.hasError('required') &&
      this.confirmPasswordField.dirty
    );
  }

  get confirmPasswordIsTheSame() {
    return (
      this.confirmPasswordField.hasError('notMatch') &&
      this.confirmPasswordField.dirty
    );
  }
}
