'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const getTitle = () => {
    switch (pathname) {
      case '/games':
        return 'Game Developer & Designer'
      case '/software':
        return 'Software Engineer & Architect'
      default:
        return 'Game Developer | Software Engineer'
    }
  }

  return (
    <header className="fixed w-full top-0 bg-background-dark/95 backdrop-blur-xl border-b border-primary-green/10 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary-green">
          {getTitle()}
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/games" className="nav-link">
            Games
          </Link>
          <Link href="/software" className="nav-link">
            Software
          </Link>
          {/* Add your logo here */}
          <div className="w-10 h-10 bg-primary-green rounded-full overflow-hidden">
            <Image
              src="./FinalCG.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </nav>
    </header>
  )
} 