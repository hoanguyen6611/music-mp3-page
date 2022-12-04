import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Subject, takeUntil, Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryPageStore } from '../../category.store';
import { dirtyCheck } from 'src/app/core/utils/dirty-form.util';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  readonly destroy$ = new Subject<void>();
  readonly isVisibleFormCategory$ = this.store.isVisibleFormCategory$;
  readonly IsFormLoadingCategory$ = this.store.isFormLoadingCategory$;
  readonly isEdit$ = this.store.isEditCategory$;

  image: string = '';
  pathImage: string = '';
  filePathImage: string = '';

  readonly formGroup: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    image: new FormControl(''),
    description: new FormControl('', Validators.required),
  });
  constructor(
    private readonly store: CategoryPageStore,
    private readonly uploadFileService: AngularFireStorage,
  ) {
    this.store.currentCategory$
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        console.log(value);
        this.formGroup.reset();
        this.formGroup.patchValue(value);
        console.log(this.formGroup.value);
      });
  }

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
    if (this.formGroup.invalid) {
      Object.values(this.formGroup.controls).forEach(i => {
        i.markAsDirty();
        i.updateValueAndValidity();
      });
      return;
    }
    if (!value.id) {
      delete value.id;
      this.store.createCategory(value);
    } else {
      console.log(value);
      this.store.updateCategory(value);
    }
  }
}
