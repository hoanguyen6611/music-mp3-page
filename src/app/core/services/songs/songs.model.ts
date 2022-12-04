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
export interface SongSearch {
  items: Item[]
  count: number
}

export interface Item {
  id: string
  name: string
  author: string
  description: string
}
