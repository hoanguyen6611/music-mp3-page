import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/core/services/categorys/categorys.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  @Input() song: Song = {
    id: '',
    name: '',
    author: '',
    link: '',
    image: '',
    description: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
