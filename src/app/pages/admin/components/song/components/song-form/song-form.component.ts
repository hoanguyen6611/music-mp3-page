import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Subject, takeUntil, tap } from 'rxjs';
import { formatDate } from '@angular/common';
import { SongPageStore } from '../../song.store';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
})
export class SongFormComponent implements OnInit {
  readonly destroy$ = new Subject<void>();
  readonly isVisibleFormSong$ = this.store.isVisibleFormSong$;
  readonly IsFormLoadingSong$ = this.store.isFormLoadingSong$;
  readonly categorys$ = this.store.select(s => s.ListCategory);
  readonly isEdit$ = this.store.isEditSong$;
  pathImage: string = '';
  filePathImage: string = '';
  pathAudio: string = '';
  filePathAudio: string = '';
  image: string = '';
  link_Audio: string = '';
  readonly formGroup: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl(null),
    // date_Upload: new FormControl(new Date()),
  });
  constructor(
    private readonly store: SongPageStore,
    private readonly uploadFileService: AngularFireStorage,
  ) {
    this.store.currentSong$.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.formGroup.reset();
      this.formGroup.patchValue(value);
    });
  }

  ngOnInit(): void {}
  onClosed() {
    this.store.setFormSong(false);
    this.formGroup.reset();
    this.pathAudio = '';
    this.pathImage = '';
  }
  isVisible() {
    this.formGroup.reset();
  }
  onSubmit() {
    const value = this.formGroup.getRawValue();
    // value.date_Upload = this.getCurrentDateTime(
    //   this.formGroup.get('date_Upload')?.value,
    // );
    value.image = this.image;
    value.link = this.link_Audio;
    if (this.formGroup.invalid) {
      console.log('chưa valid');
      Object.values(this.formGroup.controls).forEach(i => {
        i.markAsDirty();
        i.updateValueAndValidity();
      });
      return;
    }
    if(!value.id) {
      delete value.id;
      this.store.createSong(value);
    }
  }
  onFileChangeAudio(event: any) {
    this.pathAudio = event.target.files[0];
    this.filePathAudio = event.target.files[0].name;
  }

  upLoadAudio() {
    if (this.pathAudio && this.filePathAudio) {
      const fileRef = this.uploadFileService.ref(this.filePathAudio);
      this.uploadFileService
        .upload(this.filePathAudio, this.pathAudio)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.link_Audio = url;
            });
          }),
        )
        .subscribe();
    }
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
  getCurrentDateTime(date: string) {
    return formatDate(date, 'dd/MM/yyyy', 'en-US');
  }
}
