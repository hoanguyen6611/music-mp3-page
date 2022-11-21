import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ablum',
  templateUrl: './ablum.component.html',
  styleUrls: ['./ablum.component.scss']
})
export class AblumComponent implements OnInit {
  @Input() album: any;
  constructor() { }

  ngOnInit(): void {
  }

}
