'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Sidebar from '@/components/Sidebar'
import { ChevronRight } from 'lucide-react'

const Header = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [handleScrollDisabled, setHandleScrollDisabled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (handleScrollDisabled) return
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false) // scrolling down
      } else {
        setShowHeader(true) // scrolling up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
    className={`sticky flex justify-center top-0 z-10 bg-white transition-transform duration-300 font-montserrat text-muted-foreground border-b-1 ${
      showHeader ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className='flex items-center justify-center'>
      <button
              id = 'sidebar-button'
              onClick={() => {
                setCollapsed(!collapsed)
              }
              }
              className={`text-black duration-300 absolute left-0  hover:bg-primary p-2 ml-3 hover:text-white transition-all rounded-full ${!collapsed ? 'opacity-0' : 'opacity-100'}`}
            >
              <ChevronRight
                size={20}
                className={`transition-transform duration-300 ${
                  !collapsed ? 'rotate-180' : ''
                }`}
              />
      </button>
      </div>
      <div className="w-full md:mx-16 mx-5 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-medium tracking-tight hover:text-muted-foreground transition-colors duration-200 
          mx-auto md:mx-0 absolute ml-10  md:static md:translate-x-0 font-gistesy"
        >
          Anchal Varma
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
            ABOUT
          </Link>
          <Link href="/#services" className="text-sm font-medium transition-colors hover:text-primary">
            SERVICES
          </Link>
          <Link href="/#portfolio" className="text-sm font-medium transition-colors hover:text-primary">
            PORTFOLIO
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            TESTIMONIALS
          </Link>
          <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
            CONTACT
          </Link>
        </nav>
        <div className="flex items-center gap-4 absolute md:relative right-0 mr-3  ">
          <Link href="#contact">
            <Button className='font-light !font-montserrat text-white'>BOOK NOW</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
