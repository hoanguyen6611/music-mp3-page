import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from '../../admin.store';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  constructor(private readonly store: AdminPageStore) {}

  ngOnInit(): void {}
}
