import React from 'react'
import Link from 'next/link'
import { NAV_ITEM_GROUPS } from '@/constants/layout.constants'
import HeaderNavListInnerContainer from './HeaderNavListInnerContainer'
import HeaderNavItem from './HeaderNavItem'

export default function HeaderNavList() {
  const isLogin = false

  return (
    <nav className="w-full">
      <ul className="flex justify-between items-center">
        {NAV_ITEM_GROUPS.map((group) => (
          <HeaderNavListInnerContainer key={group.key}>
            {group.array
              .filter((item) => {
                if ('loginStatus' in item) return item.loginStatus === isLogin
                return true
              })
              .map((item, index) => {
                switch (item.type) {
                  case 'button':
                    return (
                      <HeaderNavItem key={`${index}_${item.id}`} id={item.id}>
                        <button id={item.id}>{item.text}</button>
                      </HeaderNavItem>
                    )
                  case 'link':
                    return (
                      <HeaderNavItem key={`${index}_${item.id}`} id={item.id}>
                        <Link href={item.src || '/'}>{item.text}</Link>
                      </HeaderNavItem>
                    )
                  default:
                    return null
                }
              })}
          </HeaderNavListInnerContainer>
        ))}
      </ul>
    </nav>
  )
}
