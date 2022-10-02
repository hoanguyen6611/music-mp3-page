import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicPageComponent {
}
