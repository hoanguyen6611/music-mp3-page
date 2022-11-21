export interface Album {
  id: string
  name: string
  state: boolean
  description: string
  image: string
  listSong: ListSong[]
}

export interface ListSong {
  id: string
  name: string
  author: string
  link: string
  image: string
  description: string
}
