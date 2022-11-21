import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongDetailStore } from './song-detail.store';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss'],
})
export class SongDetailComponent implements OnInit {
  readonly id = String(this.route.snapshot.paramMap?.get('id'));
  readonly songDetail$ = this.store.loadSongDetail(this.id);
  readonly song$ = this.store.value$;
  constructor(
    private readonly store: SongDetailStore,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}
}
