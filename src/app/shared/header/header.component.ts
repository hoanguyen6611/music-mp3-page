import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreadcrumbItemModel } from './breadcrumb-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() breadcrumbs: BreadcrumbItemModel[] = [];
  @Input() hasBackIcon = false;
  @Input() backIconClassName = 'arrow-left';
  @Input() headerTitle = '';
  @Input() backPath = '..';

  @Output() back = new EventEmitter<void>();

  onBack(): void {
    this.back.emit();
  }

}
