import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-playlist',
  templateUrl: './nav-bar-playlist.component.html',
  styleUrls: ['./nav-bar-playlist.component.scss']
})
export class NavBarPlaylistComponent implements OnInit {
  @Input() song:any;
  constructor() { }

  ngOnInit(): void {
  }

}
