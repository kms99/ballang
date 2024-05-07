import React, { ComponentProps, PropsWithChildren } from 'react'

interface Props extends ComponentProps<'h2'> {}

export default function H2({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <h2
      {...props}
      className={`text-3xl font-bold text-black text-center ${className}`}
    >
      {children}
    </h2>
  )
}
