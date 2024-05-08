import React from 'react'
import Title from './Title'
import HeaderNavList from './HeaderNavList'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center gap-20 px-8 border-b bg-white sm:justify-between sm:gap-[unset]">
      <Title />
      <HeaderNavList />
    </header>
  )
}
