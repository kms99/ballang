import React, { ComponentProps, PropsWithChildren } from 'react'

interface Props extends ComponentProps<'li'> {}

export default function HeaderNavItem({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <li
      {...props}
      className="text-[0.938rem] font-medium text-gray-800 [&:hover]:text-black transition "
    >
      {children}
    </li>
  )
}
