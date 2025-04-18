'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Sidebar from '@/components/Sidebar'
import { ChevronLeft } from 'lucide-react'

const Header = () => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <header className="sticky flex justify-center z-10 bg-white">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="w-full md:mx-16 mx-5 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-bold tracking-tight hover:text-muted-foreground transition-colors duration-200 absolute">
            Anchal Varma
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#portfolio" className="text-sm font-medium transition-colors hover:text-primary">
            Portfolio
          </Link>
          <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#contact">
            <Button>Book Now</Button>
          </Link>
          <button
            id = 'sidebar-button'
            onClick={() => setCollapsed(!collapsed)}
            className={`text-black duration-300 hover:bg-primary p-3 hover:text-white transition-all rounded-full ${!collapsed ? 'opacity-0' : 'opacity-100'}`}
          >
            <ChevronLeft
              size={20}
              className={`transition-transform duration-300 ${
                !collapsed ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
