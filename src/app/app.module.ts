import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { interceptorProviders } from './core/interceptors';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { IAuthService } from './core/authentication/auth.service.interface';
import { AuthService } from './core/authentication';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SafePipe } from './shared/pipe/safe.pipe';

const nzConfig: NzConfig = {
  message: {
    nzMaxStack: 3, // The maximum number of messages that can be displayed at the same time
    nzDuration: 5000, //Duration (milliseconds)
  },
  tabs: {
    nzTabBarGutter: -10,
  },
};
registerLocaleData(en);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzSpinModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    OAuthModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'vi-VN',
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    ...interceptorProviders,
    { provide: IAuthService, useClass: AuthService },
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_CONFIG, useValue: nzConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
