import Header from '@/components/layout/Header'
import { PropsWithChildren } from 'react'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen pt-16 relative">
      <Header />
      {children}
    </div>
  )
}
