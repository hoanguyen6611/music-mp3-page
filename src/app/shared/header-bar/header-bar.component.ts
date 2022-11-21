import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(private readonly location: Location) { }

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }

  forward() {
    this.location.forward();
  }

}
