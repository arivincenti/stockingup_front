import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  // Login
  // ==================================================
  register(payload: any) {
    return this.http.post(`${environment.path}/account/register`, payload);
  }

  // ==================================================
  // Check Email
  // ==================================================
  checkEmail(email: string) {
    return this.http.post(`${environment.path}/account/checkEmail`, email);
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
