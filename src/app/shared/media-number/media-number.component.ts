import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-media-number',
  templateUrl: './media-number.component.html',
  styleUrls: ['./media-number.component.scss'],
})
export class MediaNumberComponent implements OnInit {
  @Input() index!: number;
  @Input() isPlaying!: boolean | null;
  constructor() {}

  ngOnInit(): void {}
  @Output() togglePlay = new EventEmitter<boolean>();
}
