import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../authentication';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private service: AuthService, private route: Router) {}
  canActivate() {
    if(this.service.isAdmin()) {
      return true;
    } else {
      this.route.navigate(['/main/home']);
      return false;
    }
  }

}
