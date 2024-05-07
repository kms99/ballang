import { HeaderAuthItem, HeaderItem } from '@/types/layout.types'

export const HEADER_NAV_ITEMS_BRANDS: HeaderItem[] = [
  { text: 'BRANDS', src: '/brands', id: 'brands', type: 'link' },
]

export const HEADER_NAV_ITEMS_AUTHENTICATIONS: HeaderAuthItem[] = [
  {
    type: 'link',
    text: '회원가입',
    id: 'sign-up',
    loginStatus: false,
    src: '/sign-up',
  },
  { type: 'button', text: '로그인', loginStatus: false, id: 'sign-in' },
  { type: 'button', text: '로그아웃', loginStatus: true, id: 'sign-out' },
  {
    type: 'link',
    text: '장바구니',
    id: 'cart',
    loginStatus: true,
    src: '/cart',
  },
]

export const NAV_ITEM_GROUPS = [
  { key: 'header_brands', array: HEADER_NAV_ITEMS_BRANDS },
  { key: 'header_auth', array: HEADER_NAV_ITEMS_AUTHENTICATIONS },
]
