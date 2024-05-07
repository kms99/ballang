'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { NAV_ITEM_GROUPS } from '@/constants/layout.constants'
import NavHamburg from '/public/svgs/hamburg-btn.svg'
import HeaderNavListInnerContainer from './HeaderNavListInnerContainer'
import HeaderNavItem from './HeaderNavItem'

export default function HeaderNavList() {
  const isLogin = false

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggleNav = () => setIsOpen((prev) => !prev)

  return (
    <nav className="w-full sm:w-fit">
      <button
        className="sm:block hidden"
        onClick={handleToggleNav}
        aria-label="hamburg btn"
      >
        <NavHamburg />
      </button>
      <ul
        className={`relative flex justify-between sm-nav ${
          isOpen ? 'sm:h-28' : 'sm:h-0'
        }`}
      >
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
                        <button
                          id={item.id}
                          className="sm-nav-item"
                          tabIndex={isOpen ? 0 : -1}
                        >
                          {item.text}
                        </button>
                      </HeaderNavItem>
                    )
                  case 'link':
                    return (
                      <HeaderNavItem key={`${index}_${item.id}`} id={item.id}>
                        <Link
                          href={item.src || '/'}
                          className="sm-nav-item"
                          tabIndex={isOpen ? 0 : -1}
                        >
                          {item.text}
                        </Link>
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
