import React, { PropsWithChildren } from 'react'

export default function ProductItemPriceContainer({
  children,
}: PropsWithChildren) {
  return <div className="flex gap-2 text-sm sm:flex-col">{children}</div>
}
