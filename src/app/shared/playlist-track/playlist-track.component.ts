import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoriteService } from 'src/app/core/services/favorite/favorite.service';
import { Song } from 'src/app/core/services/songs/songs.model';

@Component({
  selector: 'app-playlist-track',
  templateUrl: './playlist-track.component.html',
  styleUrls: ['./playlist-track.component.scss'],
})
export class PlaylistTrackComponent {
  @Input() index: number = 0;
  @Input() song: Song = {
    id: '',
    name: '',
    author: '',
    link: '',
    image: '',
    description: '',
  };
  @Input() playlist: any;
  @Output() favorite = new EventEmitter<string>();
  @Output() add = new EventEmitter<string>();
  @Output() addMusic = new EventEmitter<string>();
  @Output() addMusicToPlaylist = new EventEmitter<string>();
  @Output() playMusic = new EventEmitter<Song>();
  @Input() showFavorite = true;
  @Input() deleteFavorite = false;
  @Input() playlistUser: any;
  @Input() showButtonAddPlaylist: boolean = true;
  show = false;
  constructor(private readonly service: FavoriteService) {}

  ngOnInit(): void {}
  onConfirm() {}
  onRemove() {}
  onShow() {
    this.add.emit(this.song.id);
    this.show = !this.show;
  }
}
