import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {
  @Input() song:any;
  @Input() showFavorite = false;
  @Input() show = true;
  @Output() favorite = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
