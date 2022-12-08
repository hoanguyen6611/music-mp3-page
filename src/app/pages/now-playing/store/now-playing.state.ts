import { Song } from 'src/app/core/services/categorys/categorys.model';

export interface NowPlayingState {
  songs: Song[];
  volume?:number;
  current?:string;
  playing: boolean;
  currentSong?: {
    id: string;
    name: string;
    author: string;
    link?: string;
    image: string;
    description: string;
  };
  user?: any;
}
