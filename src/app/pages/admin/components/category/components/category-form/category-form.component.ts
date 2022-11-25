import { Component, OnInit } from '@angular/core';
import { AdminPageStore } from 'src/app/pages/admin/admin.store';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  readonly isVisibleFormCategory$ = this.store.isVisibleFormCategory$;
  readonly IsFormLoadingCategory$ = this.store.isFormLoadingCategory$;
  image: string = '';
  pathImage: string = '';
  filePathImage: string = '';
  readonly formGroup: FormGroup = new FormGroup({
    // id: new FormControl(null),
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  constructor(
    private readonly store: AdminPageStore,
    private readonly uploadFileService: AngularFireStorage,
  ) {}

  ngOnInit(): void {}
  onClosed() {
    this.store.setFormCategory(false);
    this.formGroup.reset();
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
    // if (this.formGroup.invalid) {
    //   Object.values(this.formGroup.controls).forEach(i => {
    //     i.markAsDirty();
    //     i.updateValueAndValidity();
    //   });
    //   return;
    // }
    this.store.createCategory(value);
  }
}
