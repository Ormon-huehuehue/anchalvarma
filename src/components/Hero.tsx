import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center !h-screen">
    <div className="inset-0 w-screen z-0">
      <Image
        src="/bride7.jpeg"
        alt="Makeup artist at work"
        fill
        className="object-cover [object-position:100%_60%] brightness-50 opacity-100"
        priority
      />
    </div>
    <div className="container relative z-10 flex flex-col items-center justify-center py-24 text-center md:py-32">
      <h1 className="text-4xl text-white font-bold tracking-tight sm:text-5xl md:text-6xl">
        Transform Your Look with <span className="text-white">Professional Makeup</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-white md:text-xl">
        Specializing in bridal, special events, and editorial makeup artistry. Elevate your beauty for any
        occasion.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="#contact">
          <Button size="lg">Book a Session</Button>
        </Link>
        <Link href="#portfolio">
          <Button variant="outline" size="lg">
            View Portfolio
          </Button>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Hero