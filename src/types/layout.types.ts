export interface HeaderItem {
  type: 'link' | 'button'
  text: string
  id: string
  src?: string
}

export interface HeaderAuthItem extends HeaderItem {
  loginStatus: boolean
}
