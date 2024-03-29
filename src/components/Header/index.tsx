'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './NavItem'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projects',
    href: '/projects'
  }
]

export function Header() {
  return (
    <motion.header
      className="flex items-center justify-center absolute top-0 z-10 w-full h-24"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={55}
            height={44}
            src="images/logo.svg"
            alt="Placeholder Logo"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-8">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
