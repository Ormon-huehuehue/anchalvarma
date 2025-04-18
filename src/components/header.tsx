import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"


const header = () => {
return (
<header className="sticky flex justify-center z-10 bg-white">
    <div className="w-full md:mx-10 mx-5 flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-lg font-bold tracking-tight hover:text-muted-foreground transition-colors duration-200 absolute">Anchal Varma</span>
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
        <button className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
</header>
)
}

export default header