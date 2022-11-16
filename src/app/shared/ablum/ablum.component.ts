import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ablum',
  templateUrl: './ablum.component.html',
  styleUrls: ['./ablum.component.scss']
})
export class AblumComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() roundedImage? = false;
  @Input() title: string = '';
  @Input() description!: string | null;
  @Input() routerUrl!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
