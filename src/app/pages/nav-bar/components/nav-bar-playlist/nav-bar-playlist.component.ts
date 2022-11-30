import { Component, Input, OnInit } from '@angular/core';
import { NavBarStore } from '../../nav-bar.store';

@Component({
  selector: 'app-nav-bar-playlist',
  templateUrl: './nav-bar-playlist.component.html',
  styleUrls: ['./nav-bar-playlist.component.scss']
})
export class NavBarPlaylistComponent implements OnInit {
  @Input() song:any;
  readonly vm$ = this.store.vm$;
  constructor(private readonly store: NavBarStore) { }

  ngOnInit(): void {
  }

}
