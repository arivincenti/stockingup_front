import { AbstractControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/internal/operators/map';
import { AccountService } from 'src/app/pages/account/services/account.service';
import { debounceTime } from 'rxjs/operators';

export class UserNameValidation {
  static isNotAvaible(_accountService: AccountService) {
    return (control: AbstractControl) => {
      const value = control.value;
      return _accountService.checkUsername(value).pipe(
        debounceTime(5000),
        map((res: any) => {
          console.log(res['results']);
          return res['results'].length ? { isNotAvaible: true } : null;
        })
      );
    };
  }
}
