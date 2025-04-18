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
    <section id="about" className="bg-muted/50">
    <div className="container">
      <div className="grid gap-2 md:grid-cols-2 md:items-center">
        <div className="relative md:h-full md:w-full aspect-square overflow-hidden rounded-lg">
          <Image
            src="/anchal2.jpeg"
            alt="Makeup artist portrait"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6 px-5 py-5">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          {aboutSectionContent.map((text, index)=>(
            <p key={index} className="text-lg text-muted-foreground">
                {text}      
            </p>
          ))}
         
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/anchalvermamua/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://www.facebook.com/anchalvermamua/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About