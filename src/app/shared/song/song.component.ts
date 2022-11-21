import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() roundedImage? = false;
  @Input() title: string = '';
  @Input() author!: string | null;
  @Input() routerUrl!: string;
  @Input() song: any;
  constructor() { }

  ngOnInit(): void {
  }

}
