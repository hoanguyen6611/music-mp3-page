import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/core/services/categorys/categorys.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() category: Category = {
    id: '',
    name: '',
    image: '',
    description: '',
    songs: []
  };
  constructor() { }

  ngOnInit(): void {
  }

}
