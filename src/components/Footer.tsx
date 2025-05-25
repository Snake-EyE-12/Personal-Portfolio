'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    {
      icon: '/github-icon.png',
      href: 'https://github.com/Snake-EyE-12',
      alt: 'GitHub'
    },
    {
      icon: '/itchio-icon.png',
      href: 'https://snake-eye-12.itch.io/',
      alt: 'Itch.io'
    },
    {
      icon: '/linkedin-icon.png',
      href: 'https://www.linkedin.com/in/chase-guymon/',
      alt: 'LinkedIn'
    },
    {
      icon: '/email-icon.png',
      href: 'mailto:chase.guymon@q.com',
      alt: 'Email'
    }
  ]

  return (
    <footer className="bg-background-dark/80 backdrop-blur-md border-t border-primary-green/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Chase Guymon. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={41}
                  height={41}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 