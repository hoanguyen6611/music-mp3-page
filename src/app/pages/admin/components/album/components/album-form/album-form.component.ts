import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent implements OnInit {
  readonly isFormAlbum$ = this.store.isFormAlbum$;
  constructor(private readonly store: AdminPageStore) {}

  ngOnInit(): void {}
  onClosed() {
    this.store.setFormAlbum(false);
  }

}
