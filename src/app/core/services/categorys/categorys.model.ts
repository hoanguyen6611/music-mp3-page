export interface Category {
  id: string
  name: string
  image: string
  description: string
  songs: Song[]
}

export interface Song {
  id: string
  name: string
  author: string
  link: string
  image: string
  description: string
}
export interface createCategory {
  id: string
  name: string
  image: string
  description: string
}
