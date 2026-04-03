import type { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { CartProvider } from '../../context/CartContext'
import { HomeCourseSearchProvider } from '../../context/HomeCourseSearchContext'
import { BottomNav } from './BottomNav'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppShell({ children }: PropsWithChildren) {
  const isLoginRoute = useLocation().pathname === '/login'

  return (
    <CartProvider>
      <HomeCourseSearchProvider>
        <div className="min-h-screen bg-linear-to-b from-slate-100 via-brand-gold-light/35 to-slate-100 text-slate-900">
          <Header />
          <main
            className={`mx-auto w-full max-w-[1360px] px-4 py-6 pb-24 sm:px-6 md:pb-6 lg:px-10 ${
              isLoginRoute ? 'max-md:p-0' : ''
            }`}
          >
            {children}
          </main>
          <Footer className={isLoginRoute ? 'max-md:hidden' : undefined} />
          <BottomNav />
        </div>
      </HomeCourseSearchProvider>
    </CartProvider>
  )
}
