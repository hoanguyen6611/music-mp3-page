import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-media-cover',
  template: '',
  styleUrls: ['./media-cover.component.scss']
})
export class MediaCoverComponent implements OnInit {
  @Input() set imageUrl(url: string | undefined) {
    this.backgroundUrl = url && `url(${url})`;
  }
  @Input() set roundedImage(isRounded: boolean | undefined) {
    this.borderRadius = isRounded ? '50%' : 'initial';
  }
  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('style.background-image') backgroundUrl!: string | undefined;
  @HostBinding('style.border-radius') borderRadius!: string | undefined;

}
