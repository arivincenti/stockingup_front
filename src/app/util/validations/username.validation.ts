import { AbstractControl } from '@angular/forms';

export class UserNameValidation {
  static isAvaible(control: AbstractControl) {
    const value = control.value;

    // return {isAvaible: true} //Si el campo tiene
    return null;
  }
}
