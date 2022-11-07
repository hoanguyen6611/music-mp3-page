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
  HttpBackend,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { IAuthService } from './core/authentication/auth.service.interface';
import { AuthService } from './core/authentication';
registerLocaleData(en);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
// registerLocaleData(getLocaleData(getCurrentLang()));

// export const createTranslateLoader = (httpBackend: HttpBackend) =>
//   new TranslateHttpLoader(
//     new HttpClient(httpBackend),
//     `${window.location.origin}/assets/i18n/`,
//     '.json',
//   );

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzSpinModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule,
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
  ],
  providers: [
    ...interceptorProviders,
    { provide: IAuthService, useClass: AuthService },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
