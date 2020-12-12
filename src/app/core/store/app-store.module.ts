import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { REDUCERS_TOKEN, reducerProvider } from './app-store.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './effects/index.effects';
import { AccountService } from 'src/app/pages/account/services/account.service';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['account', 'stockingup'],
    rehydrate: true,
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCERS_TOKEN, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    EffectsModule.forRoot(effects),
  ],
  providers: [reducerProvider, AccountService],
})
export class AppStoreModule {}
