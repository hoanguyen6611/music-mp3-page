import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss'],
})
export class AlbumFormComponent implements OnInit {
  readonly isVisibleFormAlbum$ = this.store.isVisibleFormAlbum$;
  readonly IsFormLoadingAlbum$ = this.store.isFormLoadingAlbum$;
  image: string = '';
  pathImage: string = '';
  filePathImage: string = '';
  constructor(
    private readonly store: AdminPageStore,
    private readonly uploadFileService: AngularFireStorage,
  ) {}
  readonly formGroup: FormGroup = new FormGroup({
    // id: new FormControl(null),
    name: new FormControl('', Validators.required),
    image: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit(): void {}
  onClosed() {
    this.store.setFormAlbum(false);
  }
  onFileChangeImage(event: any) {
    this.pathImage = event.target.files[0];
    this.filePathImage = event.target.files[0].name;
  }

  upLoadImage() {
    if (this.pathImage && this.filePathImage) {
      const fileRef = this.uploadFileService.ref(this.filePathImage);
      this.uploadFileService
        .upload(this.filePathImage, this.pathImage)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.image = url;
            });
          }),
        )
        .subscribe();
    }
  }
  onSubmit() {
    const value = this.formGroup.getRawValue();
    value.image = this.image;
    console.log(value);
    // this.store.createCategory(value);
  }
}
