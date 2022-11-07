import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthTestService } from '../authentication/auth-test.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthTestService, private route: Router) {

  }
  canActivate() {
    if(this.service.isLoggedIn()) {
      return true;
    }
    else {
      this.route.navigate(['/login'])
      return false;
    }
  }

}
