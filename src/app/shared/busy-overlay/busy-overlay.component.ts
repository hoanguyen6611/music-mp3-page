import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-busy-overlay',
  templateUrl: './busy-overlay.component.html',
  styleUrls: ['./busy-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusyOverlayComponent {
  @Input() isBusy = false;
}
