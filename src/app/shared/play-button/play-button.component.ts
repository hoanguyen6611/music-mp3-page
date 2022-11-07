import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit {
  @Input() isPlaying: boolean | null | undefined;
  @Input() large = false;
  @Input() flatIcon = false;
  @Input() primary = false;
  @HostBinding('class.is-show-volume') @Input() isShowVolumeIcon = false;
  @Output() togglePlay = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  get svgSize() {
    return this.large ? 'lg' : 'md';
  }

  get buttonClass() {
    if(this.flatIcon) {
      return ['flex'];
    }
    const baseClass = 'flex play-icon control-button';
    const sizeClass = this.large ? 'large' : '';
    return [baseClass, sizeClass, this.primary ? 'text-white bg-primary' : 'text-black bg-white'];
  }

}
