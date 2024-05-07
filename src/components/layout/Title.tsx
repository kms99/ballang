import React from 'react'
import Link from 'next/link'
import H1 from '../atoms/H1'

export default function Title() {
  return (
    <Link href="/" about="home 버튼">
      <H1>발랑</H1>
    </Link>
  )
}
