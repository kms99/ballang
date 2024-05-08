import React, { PropsWithChildren } from 'react'

export default function ProductItemDetailInfoContainer({
  children,
}: PropsWithChildren) {
  return <div className="flex flex-col gap-2">{children}</div>
}
