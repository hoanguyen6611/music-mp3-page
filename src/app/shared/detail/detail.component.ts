import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() type: 'Album' | 'Playlist' | 'Artist' | 'Category' | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() quantity: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
