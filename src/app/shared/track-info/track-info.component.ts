import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {
  @Input() song:any;
  constructor() { }

  ngOnInit(): void {
  }

}
