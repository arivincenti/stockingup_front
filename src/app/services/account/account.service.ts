import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  // ==================================================
  // Login
  // ==================================================
  login(payload: any) {
    return this.http.post(`${environment.path}/auth/login`, payload);
  }

  // ==================================================
  // Check Email
  // ==================================================
  checkEmail(email: string) {
    return this.http.post(`${environment.path}/auth/checkEmail`, email);
  }
}
