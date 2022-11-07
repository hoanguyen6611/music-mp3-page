import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { IAuthService } from './auth.service.interface';
import { ProfileModel, Tenant } from './models';
import { filter } from 'rxjs/operators';
import { UserLogin } from '../data';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends IAuthService {
  apiUrl = 'http://localhost:8383/v1/account/client-login';
  authUrl = 'http://localhost:4200/login';
  constructor(
    private readonly oauthService: OAuthService,
    private readonly router: Router,
    private readonly httpClient: HttpClient
    ) {
      super();
      this.oauthService.events.subscribe(() => {
        this.isAuthenticatedSubject$.next(
          this.oauthService.hasValidAccessToken(),
        )
      });
      this.oauthService.events.pipe(
        filter(e => ['session_terminated', 'session_error'].includes(e.type)),
      ).subscribe(() => this.navigateToLoginPage());
    }

    public async initialLoginSequence(): Promise<void> {
      try {
        await this.oauthService.loadDiscoveryDocumentAndTryLogin();
        this.oauthService.setupAutomaticSilentRefresh();
        if(this.oauthService.state &&
          this.oauthService.state !== 'undefined' &&
          this.oauthService.state !=='null') {
            let stateUrl = this.oauthService.state;
            if(stateUrl.startsWith('/') === false) {
              stateUrl = decodeURIComponent(stateUrl);
            }
            this.router.navigateByUrl(stateUrl);
        }
      } finally {
        this.isDoneLoadingSubject$.next(true);
      }
    }

    public login(targetUrl?: string): void {
      this.oauthService.initLoginFlow(targetUrl || this.router.url);
    }

    public async logout() {
      await this.oauthService.revokeTokenAndLogout();
    }

    public refreshToken() {
      this.oauthService.silentRefresh();
    }

    public hasVaidToken() {
      return this.oauthService.hasValidAccessToken();
    }

    public getProfile() {
      return this.httpClient.get<ProfileModel>(
        `${this.apiUrl}/v1/account/profile`,
      );
    }

    getTenants(): Observable<Tenant[]> {
      throw new Error('Method not implemented.');
    }

    navigateToLoginPage(): void {
    }

    changePassword(password:{ currentPassword: string;
      newPassword: string;
      newPasswordConfirm: string; }): Observable<any> {
      const changePasswordUrl = `/api`;
      throw new Error('Method not implemented.');
    }
    loginUser(user: UserLogin){
      return this.httpClient.post(this.apiUrl, user);
    }
}
