export type Playlists = Playlist[]
export interface Playlist {
  id: number
  name: string
  state: boolean
  image: string
  description: string
  user?: User
  listSong: ListSong[]
}

export interface User {
  id: number
  email: string
  name: string
  role: string
  password: string
}

export interface ListSong {
  id: number
  name: string
  author: string
  link: string
  image: string
  description: string
}
