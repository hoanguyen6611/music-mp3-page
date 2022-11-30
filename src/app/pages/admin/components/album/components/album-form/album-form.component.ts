import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Subject, takeUntil } from 'rxjs';
import { AlbumPageStore } from '../../album.store';
@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss'],
})
export class AlbumFormComponent implements OnInit {
  readonly destroy$ = new Subject<void>();
  readonly isVisibleFormAlbum$ = this.store.isVisibleFormAlbum$;
  readonly isFormLoadingAlbum$ = this.store.isFormLoadingAlbum$;
  readonly isEdit$ = this.store.isEditAlbum$;

  image: string = '';
  pathImage: string = '';
  filePathImage: string = '';

  constructor(
    private readonly store: AlbumPageStore,
    private readonly uploadFileService: AngularFireStorage,
  ) {
    this.store.currentAlbum$.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.formGroup.reset();
      this.formGroup.patchValue(value);
    });
  }
  readonly formGroup: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    image: new FormControl(''),
    description: new FormControl(''),
    state: new FormControl(true)
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
    if (this.formGroup.invalid) {
      Object.values(this.formGroup.controls).forEach(i => {
        i.markAsDirty();
        i.updateValueAndValidity();
      });
      return;
    }
    if(!value.id) {
      delete value.id;
      this.store.createAlbum(value);
    }
  }
}
