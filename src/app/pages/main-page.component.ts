import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})

export class MainPageComponent implements OnInit {


  constructor( private readonly authService : AuthService, private readonly route: Router ) { }

  isCollapsed = false;

  status = localStorage.getItem('token');

  ngOnInit(): void {
  }
}
