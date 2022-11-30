import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { SongsService } from 'src/app/core/services/songs/songs.service';
import { MyPlayListStore } from './my-playlists.store';

@Component({
  selector: 'app-my-playlists',
  templateUrl: './my-playlists.component.html',
  styleUrls: ['./my-playlists.component.scss'],
})
export class MyPlaylistsComponent implements OnInit {
  isVisible = false;
  image: string = '';
  pathImage: string = '';
  filePathImage: string = '';
  readonly formGroup: FormGroup = new FormGroup({
    // id: new FormControl(null),
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    state: new FormControl(true, Validators.required),
  });
  constructor(
    private readonly store: MyPlayListStore,
    private readonly uploadFileService: AngularFireStorage,
  ) {}

  readonly vmPlaylist$ = this.store.vm$;

  ngOnInit(): void {}
  addPlaylist() {
    this.isVisible = true;
  }
  handleOk() {
    const value = this.formGroup.getRawValue();
    value.image = this.image;
    console.log(value);
    this.store.createPlaylist(value);
    this.isVisible = false;
  }
  handleCancel() {
    this.isVisible = false;
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
}
