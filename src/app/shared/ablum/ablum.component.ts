import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/core/services/album';

@Component({
  selector: 'app-ablum',
  templateUrl: './ablum.component.html',
  styleUrls: ['./ablum.component.scss'],
})
export class AblumComponent implements OnInit {
  @Input() album: Album = {
    id: '',
    name: '',
    state: true,
    description: '',
    image: '',
    listSong: [],
  };
  constructor() {}

  ngOnInit(): void {}
}
