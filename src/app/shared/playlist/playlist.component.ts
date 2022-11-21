import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() roundedImage? = false;
  @Input() title: string = '';
  @Input() description!: string | null;
  @Input() routerUrl!: string;
  @Input() playlist: any;
  constructor() { }

  ngOnInit(): void {
  }

}
