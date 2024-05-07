import React, { PropsWithChildren } from 'react'

export default function HeaderNavListInnerContainer({
  children,
}: PropsWithChildren) {
  return <section className="flex gap-4">{children}</section>
}
