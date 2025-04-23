import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
// import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="flex flex-col items-center w-screen h-screen !mx-0">

      {/* Mobile Banner */}
      <div className="relative w-full h-full md:hidden">
        <Image
          src="/banner_mobile_upscaled.jpg"
          alt="Makeup artist at work"
          fill
          className="object-cover brightness-100 opacity-100 [object-position:0%_110%]"
          priority
        />
      </div>

      {/* Desktop Layout */}
      <div className="md:grid md:grid-cols-2 hidden w-screen h-screen inset-0">
        <div className="relative w-full h-screen overflow-x-visible">
          <Image
            src="/poster.png"
            alt="Makeup artist at work"
            fill
            className="object-cover ml-[10rem] min-w-[600px] h-full"
            priority
          />

          {/* Centered buttons */}
          {/* <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap justify-center gap-4">
            <Link href="#contact">
              <Button size="lg">Book a Session</Button>
            </Link>
            <Link href="#portfolio">
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </Link>
          </div> */}
        </div>

        <div className="relative w-full h-screen">
          <Image
            src="/portrait.png"
            alt="Makeup artist at work"
            fill
            className="object-cover [object-position:20%_20%] scale-100 max-w-[680px] min-w-[680px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
