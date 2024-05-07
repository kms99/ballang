import React, { PropsWithChildren } from 'react'

export default function HeaderNavListInnerContainer({
  children,
}: PropsWithChildren) {
  return (
    <section className="flex gap-4 sm:flex-col sm:w-full sm:gap-0">
      {children}
    </section>
  )
}
