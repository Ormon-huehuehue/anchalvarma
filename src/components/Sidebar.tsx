'use client'

import {
  BookOpen,
  Info,
  Workflow,
  Mail,
  UserSearch,
} from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const navItems = [
  { icon: <BookOpen size={20} />, label: 'About', link: '/#about' },
  { icon: <Info size={20} />, label: 'Services', link: '/#services' },
  { icon: <Workflow size={20} />, label: 'Portfolio', link: '/#portfolio' },
  { icon: <UserSearch size={20} />, label: 'Testimonials', link: '/#testimonials' },
  { icon: <Mail size={20} />, label: 'Contact', link: '/#contact' },
]

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}) {
  const [showContent, setShowContent] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!collapsed) {
      timeout = setTimeout(() => setShowContent(true), 300)
    } else {
      setShowContent(false)
    }

    return () => clearTimeout(timeout)
  }, [collapsed])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setCollapsed(true)
      }
    }

    if (!collapsed) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [collapsed, setCollapsed])

  return (
    <aside
      ref={sidebarRef}
      className={`h-screen bg-white fixed left-0 z-10 flex flex-col transition-all duration-300 ease-in-out overflow-hidden text-black/70 border-r-2 ${
        collapsed ? 'w-0' : 'w-64'
      }`}
    >
      <h1
        className={`flex items-center gap-5 transition-opacity duration-300 text-primary text-lg font-bold p-5 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Anchal Varma
      </h1>
      <nav className="flex flex-col gap-2 mt-4">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="flex items-center gap-4 px-4 py-2 hover:bg-white hover:text-black cursor-pointer transition-colors"
            onClick={()=>setCollapsed}
          >
            <div
              className={`flex items-center gap-5 transition-opacity duration-100 ${
                showContent ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          </a>
        ))}
      </nav>
    </aside>
  )
}
