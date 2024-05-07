import React from 'react'
import Title from './Title'
import HeaderNavList from './HeaderNavList'

export default function Header() {
  return (
    <header className="flex items-center gap-20 px-8 h-16 border-b">
      <Title />
      <HeaderNavList />
    </header>
  )
}