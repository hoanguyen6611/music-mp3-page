import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../authentication';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private service: AuthService, private route: Router) {}
  canActivate() {
    if(this.service.isLoggedIn()) {
      this.route.navigate(['/main/home']);
      return false;
    } else {
      return true;
    }
  }

}
