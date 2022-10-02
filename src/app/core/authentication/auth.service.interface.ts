import { Injectable } from "@angular/core";
import { combineLatest, map, Observable, ReplaySubject } from "rxjs";
import { Tenant } from "./models";
import { ProfileModel } from "./models/profile.model";

@Injectable()
export abstract class IAuthService {
  constructor() {}
  protected isDoneLoadingSubject$ = new ReplaySubject<boolean>();
  protected isAuthenticatedSubject$ = new ReplaySubject<boolean>();

  public readonly isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();
  public readonly isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  public readonly canActivateProtectedRoutes$: Observable<boolean> =
    combineLatest([this.isAuthenticated$, this.isDoneLoading$]).pipe(
      map(values => values.every(b => b)),
    );

    abstract initialLoginSequence(): Promise<void>;
    abstract login(targetUrl?:string):void;
    abstract logout(): Promise<void>;
    abstract refreshToken(): void;
    abstract hasVaidToken():boolean;

    abstract getProfile(): Observable<ProfileModel>;

    abstract getTenants(): Observable<Tenant[]>;

    abstract navigateToLoginPage(): void;

    abstract changePassword({currentPassword, newPassword}:{
      currentPassword: string;
      newPassword: string;
      newPasswordConfirm: string;
    }):Observable<any>;


}
