import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, startWith, switchAll, switchMap, tap } from 'rxjs';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { Song, SongsService } from 'src/app/core/services/songs';
import { resetCurrentSong, resetListSong, setCurrentSong, setPlaying, setSongs } from '../now-playing/store';
import { SearchStore } from './search.store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  readonly formControl = new FormControl('');
  song: any;
  constructor(
    private readonly searchStore: SearchStore,
    private readonly songsService: SongsService,
    private readonly store: Store
  ) {
    // this.formControl.valueChanges
    //   .pipe(
    //     tap((value) => {console.log(value)}),
    //     startWith(""),
    //     switchMap(query => this.songsService.searchSong(query).pipe(
    //       tap(() => {
    //         console.log(query);
    //       })
    //       )),
    //   )
    //   .subscribe(song => {
    //     console.log(song);
    //     this.song = song;
    //   });
  }
  searchQuery() {
    // console.log(this.formControl.getRawValue());
    this.songsService
      .searchSong(this.formControl.getRawValue())
      .subscribe(song => {
        console.log(song);
        this.song = song;
      });
  }
  playMusic(item: Song) {
    this.store.dispatch(setPlaying({ value: true }));
    this.store.dispatch(resetListSong());
    this.store.dispatch(resetCurrentSong());
    this.store.dispatch(setCurrentSong({ value: item }));
  }
  playAlbum(item: Song[]) {
    this.store.dispatch(setSongs({ value: item }));
    this.store.dispatch(setPlaying({ value: true }));
    this.store.dispatch(resetCurrentSong());
    this.store.dispatch(setCurrentSong({ value: item[0] }));
  }
}
