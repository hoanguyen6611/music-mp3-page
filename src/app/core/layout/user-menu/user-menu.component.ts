import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  status = localStorage.getItem('token');
  name = localStorage.getItem('name');
  constructor(
    private readonly authService: AuthService,
    private readonly route: Router,
  ) {}

  ngOnInit(): void {}

  logout() {
    // this.authService.logout().subscribe(result => {
    //   localStorage.clear();
    //   window.sessionStorage.clear();
    //   this.route.navigate(['']);
    // });
  }
  login() {
    this.route.navigate(['/login'])
  }
  // getProfile() {
  //   this.authService.getProfile().subscribe(res => {
  //     console.log(res);
  //   })
  // }
}
