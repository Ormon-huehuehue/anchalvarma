'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface itemProps {
  imageUrl: string
  title: string
  caption: string
}

const PortfolioWidget = ({ item }: { item: itemProps }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isCentered, setIsCentered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // tailwind 'md' breakpoint
    }

    const handleScroll = () => {
      if (!ref.current || !isMobile) return

      const rect = ref.current.getBoundingClientRect()
      const elementCenter = rect.top + rect.height / 2
      const screenCenter = window.innerHeight / 2
      const threshold = 150 // px range for being "centered"

      const distanceFromCenter = Math.abs(screenCenter - elementCenter)
      setIsCentered(distanceFromCenter < threshold)
    }

    checkIsMobile()
    handleScroll()

    window.addEventListener('resize', checkIsMobile)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', checkIsMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  return (
    <div ref={ref} className="group relative overflow-hidden rounded-lg">
      <div
        className={`
          aspect-square w-full overflow-hidden 
          transition-transform duration-300 
          ${isMobile ? (isCentered ? 'scale-105' : 'scale-100') : 'group-hover:scale-105'}
        `}
      >
        <Image
          src={item.imageUrl}
          alt={`Makeup portfolio item`}
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent p-6 ">
        <div>
          <h3 className="font-medium text-white">{item.title}</h3>
          <p className="text-sm text-white/80">{item.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioWidget
