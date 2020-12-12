import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  // ==================================================
  // Login
  // ==================================================
  login(payload: any) {
    return this.http.post(`${environment.path}/account/login`, payload);
  }

  // ==================================================
  // Register
  // ==================================================
  register(payload: any) {
    return this.http.post(`${environment.path}/account/register`, payload);
  }

  // ==================================================
  // Check Email
  // ==================================================
  checkEmail(email: string) {
    let payload = { email };
    return this.http
      .post(`${environment.path}/account/check_email`, payload)
      .pipe(
        map((res) => {
          console.log(res);
          return res;
        })
      );
  }

  // ==================================================
  // Check username
  // ==================================================
  checkUsername(username: string) {
    let payload = { username };
    return this.http
      .post(`${environment.path}/account/check_username`, payload)
      .pipe(map((res) => res));
  }

  // ==================================================
  // Activate account
  // ==================================================
  activateAccount(activation_code: string) {
    let payload = { activation_code };
    return this.http.post(
      `${environment.path}/account/activate_account`,
      payload
    );
  }
}
