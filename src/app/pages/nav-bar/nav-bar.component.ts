import { Component, OnInit } from '@angular/core';
import { NavItem } from '..';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navItems: NavItem[] = [
    {
      label: 'MENU.HOME',
      icon: 'home',
      path: '/main/home'
    },
    {
      label: 'MENU.CATEGORY',
      icon: 'home',
      path: '/main/category'
    },
    {
      label: 'MENU.SEARCH',
      icon: 'search',
      path: '/main/search'
    },
    {
      label: 'MENU.MY_PLAYLISTS',
      icon: 'alert',
      path: '/main/my-playlists'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
