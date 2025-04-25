import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const aboutSectionContent = [
  "Hi, I’m Anchal Verma, a professional makeup artist based in Delhi and the founder of Anchal Verma Makeup Studioe.",
  "Over the years, I’ve been fortunate to work with a wide range of clients and have been recognized with the Best Makeup Artist in Delhi award (2022 – Forever Star India). My expertise spans HD makeup, airbrush techniques, editorial looks, party makeup, and complete bridal transformations.",
  "At my studio, we believe that makeup isn’t about hiding — it’s about enhancing what’s already beautiful. Every brushstroke is guided by that principle",
  "Let’s create magic together ✨"
]

const About = () => {
  return (
    <div className='w-screen bg-primary'>
    <section id="about" className="w-full flex justify-center items-center ">
    <div className="w-screen">
      <div className="grid gap-2 md:grid-cols-2 ">
        <div className="relative md:h-full md:w-full aspect-square overflow-hidden rounded-lg md:rounded-none">
          <Image
            src="/anchal2.jpeg"
            alt="Makeup artist portrait"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6 px-5 py-10">
          <h2 className="text-[3vw] font-bold tracking-tight sm:text-4xl text-white">About Me</h2>
          {aboutSectionContent.map((text, index)=>(
            <p key={index} className="text-[1.2vw] text-white">
                {text}      
            </p>
          ))}
         
          <div className="flex gap-4 text-white">
            <Link href="https://www.instagram.com/anchalvermamua/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://www.facebook.com/anchalvermamua/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Facebook  />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About