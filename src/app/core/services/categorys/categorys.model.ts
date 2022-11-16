export interface Category {
  id: number
  name: string
  image: string
  description: string
  songs: Song[]
}

export interface Song {
  id: number
  name: string
  author: string
  link: string
  image: string
  description: string
}
