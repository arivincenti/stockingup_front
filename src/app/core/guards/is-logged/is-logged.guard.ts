import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tokenSelector } from 'src/app/modules/account/store/selectors/account.selectors';
import { AppState } from 'src/app/core/store/app-store.reducer';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedGuard implements CanActivate {
  accountSubscription: Subscription = new Subscription();
  constructor(private store: Store<AppState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token = '';
    this.accountSubscription = this.store
      .select(tokenSelector)
      .subscribe((data) => {
        token = data;
      });

    this.accountSubscription.unsubscribe();
    return token ? true : false;
  }
}
