import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { setPlaying } from 'src/app/pages/now-playing/store';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  status = localStorage.getItem('token');
  name = localStorage.getItem('name');
  role = localStorage.getItem('role');
  constructor(
    private readonly authService: AuthService,
    private readonly route: Router,
    private readonly translateService: TranslateService,
    private readonly store: Store
  ) {}

  ngOnInit(): void {}

  logout() {
    localStorage.clear();
    window.sessionStorage.clear();
    location.reload();
    this.route.navigate(['/main/home']);
    this.translateService.instant('MESSAGE.LOGOUT_SUCCESS');
    this.authService.logout().subscribe(result => {
      console.log(result);
    });
  }
  login() {
    this.route.navigate(['/login']);
  }
}
