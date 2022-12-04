import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith, switchAll, switchMap, tap } from 'rxjs';
import { CategorysService } from 'src/app/core/services/categorys/categorys.service';
import { SongsService } from 'src/app/core/services/songs';
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
  ) {}
  searchQuery() {
    this.formControl.valueChanges
      .pipe(
        tap(() => {}),
        startWith(""),
        switchMap(query => this.songsService.searchSong(query).pipe(
          tap(() => {
            console.log(query);
          })
          )),
      )
      .subscribe(song => {
        console.log(song);
        this.song = song;
      });
    // this.songsService
    //   .searchSong(this.formControl.getRawValue())
    //   .subscribe(song => {
    //     console.log(song);
    //     this.song = song;
    //   });
  }
}
