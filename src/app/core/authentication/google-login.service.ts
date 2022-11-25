import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

export const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com/o/oauth2/v2/auth',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId:
    '544002972726-n0e77ub3vpaiqgh9bul9t8ims1o2kiqn.apps.googleusercontent.com',
  scope: 'openid profile email offline_access api',
  responseType: 'code',
  showDebugInformation: true,
};

@Injectable({
  providedIn: 'root',
})
export class GoogleLoginService {
  constructor(private readonly authService: OAuthService) {
    this.authService.configure(oAuthConfig);
    this.authService.loadDiscoveryDocument().then(() => {
      this.authService.tryLoginImplicitFlow().then(() => {
        if (!this.authService.hasValidAccessToken()) {
          this.authService.initCodeFlow();
        } else {
          this.authService.loadUserProfile().then(user => {
            console.log(JSON.stringify(user));
          });
        }
      });
    });
  }
}
