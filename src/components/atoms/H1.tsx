import React, { ComponentProps, PropsWithChildren } from 'react'

interface Props extends ComponentProps<'h1'> {}

export default function H1({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <h1
      {...props}
      className={`text-2xl font-bold text-black text-center whitespace-nowrap ${className}`}
    >
      {children}
    </h1>
  )
}
