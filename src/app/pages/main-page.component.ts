import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GroupMenu, MenuItem } from '.';
import { AuthTestService } from '../core/authentication/auth-test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})

export class MainPageComponent implements OnInit {


  constructor( private readonly authTestService : AuthTestService, private readonly route: Router ) { }

  isCollapsed = false;

  status = localStorage.getItem('token');

  ngOnInit(): void {
  }

  groupMenus: MenuItem[] = [
    {
      display: 'MENU.HOME',
      icon: 'home',
      path: '/main/home'
    },
    {
      display: 'MENU.SEARCH',
      icon: 'search',
      path: '/main/search'
    },
  ]

  logout() {
    this.authTestService.logout().subscribe(result =>
      {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        this.route.navigate([''])
      }
    )
  }
}
