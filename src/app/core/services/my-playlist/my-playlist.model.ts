export interface MyPlaylist {
  id: string;
  name: string;
  state: boolean;
  image: string;
  description: string;
  listSong: ListSong[];
  routerLink?:string;
}

export interface ListSong {
  id: string;
  name: string;
  author: string;
  link: string;
  image: string;
  description: string;
}

export interface PlaylistCreate {
  name: string;
  state: boolean;
  image: string;
  description: string;
}
