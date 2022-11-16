import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HomePageStore } from './home-page.store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomePageStore],
})
export class HomePageComponent {
  readonly vmSong$ = this.homePageStore.vm$;
  constructor(
    private readonly homePageStore: HomePageStore,
  ) {}
}
