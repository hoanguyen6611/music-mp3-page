import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GroupMenu } from '.';
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

  groupMenus: GroupMenu[] = [
    {
      menus: [
        {
          display: 'MENU.PERSONAL',
          icon: 'home',
          path: '/main/home',
        },
      ],
    },
    {
      menus: [
        {
          display: 'MENU.DISCOVER',
          icon: 'dashboard',
          path: '/main/dashboard',
        },
      ],
    },
    {
      menus: [
        {
          display: 'MENU.FOLLOW',
          icon: 'bulb',
          path: '/main/music-page',
        },
      ],
    },
    // {
    //   name: 'MENU.OPERATION',
    //   menus: [
    //     {
    //       display: 'MENU.ORDER',
    //       iconFont: 'icon-documents-file-plus-minus',
    //       path: '/main/operation/order',
    //       requiredPolicy: ['web.transportation.order.view'],
    //     },
    //     {
    //       display: 'MENU.COORDINATOR',
    //       icon: 'sme:calendar-schedule-1',
    //       requiredPolicy: [
    //         'web.transportation.operation.auto.view',
    //         'web.transportation.operation.manual.view',
    //       ],
    //       children: [
    //         {
    //           display: 'MENU.AUTOMATIC',
    //           path: '/main/operation/coordinator/truck/automatic',
    //           requiredPolicy: ['web.transportation.operation.auto.view'],
    //         },
    //         {
    //           display: 'MENU.MANUALLY',
    //           path: '/main/operation/coordinator/truck/manual/view',
    //           requiredPolicy: ['web.transportation.operation.manual.view'],
    //         },
    //         {
    //           display: 'MENU.SHIPMENT_LIST',
    //           path: '/main/operation/coordinator/truck/shipment-list',
    //           // requiredPolicy: ['web.transportation.operation.manual.view'],
    //         },
    //       ],
    //     },
    //     {
    //       display: 'MENU.MONITOR',
    //       icon: 'sme:arrow-direction-location-signal',
    //       path: '/main/monitor/truck',
    //       requiredPolicy: ['web.transportation.monitor.view'],
    //     },
    //     {
    //       display: 'MENU.RECEIPT',
    //       iconFont: 'icon-list-check-mark',
    //       path: '/main/operation/receipt',
    //       requiredPolicy: ['web.transportation.pod.view'],
    //     },
    //     {
    //       display: 'MENU.KPI_MANAGEMENT',
    //       icon: 'sme:chart',
    //       path: '/main/operation/kpi-management',
    //       requiredPolicy: ['web.transportation.kpi.view'],
    //     },
    //     {
    //       display: 'MENU.OPERATION_DATA_LOCK',
    //       icon: 'sme:server-databases-lock',
    //       path: '/main/payment/operation-data-lock',
    //       requiredPolicy: ['web.transportation.datalock.view'],
    //     },
    //   ],
    // }
  ];
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
