export interface Song {
  id: string
  name: string
  author: string
  link: string
  image: string
  description: string,
}
export interface songCreate {
  id: string
  name: string
  author: string
  link: string
  image: string
  description: string,
  category: string[]
}
export interface Search {
  itemsSong: ItemsSong[]
  countSong: number
  itemsAlbum: ItemsAlbum[]
  countAlbum: number
}

export interface ItemsSong {
  id: string
  name: string
  author: string
  description: string
}

export interface ItemsAlbum {
  id: string
  name: string
  description: string
}
