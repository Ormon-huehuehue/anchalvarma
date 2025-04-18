import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import PortfolioWidget from './Portfolio-widget';

const portfolioData = [
  {
    imageUrl : "/bride5.jpeg",
    title : "Makeup",
    caption : "Bridal / Editorial / Natural"
  },
  {
    imageUrl : "/anchal.jpeg",
    title : "Makeup",
    caption : "Bridal / Editorial / Natural"
  },
  {
    imageUrl : "/bride1.jpeg",
    title : "Makeup",
    caption : "Bridal / Editorial / Natural"
  },
  {
    imageUrl : "/bride2.jpeg",
    title : "Makeup",
    caption : "Bridal / Editorial / Natural"
  },
  {
    imageUrl : "/bride6.jpeg",
    title : "Makeup",
    caption : "Bridal / Editorial / Natural"
  },
  {
    imageUrl : "/bride4.jpeg",
    title : "Makeup",
    caption : "Bridal / Editorial / Natural"
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted/50">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Portfolio</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Browse through my recent work and see the transformations
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {portfolioData.map((item, index) => (
          <PortfolioWidget key={index} item = {item}/>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="#contact">
          <Button>Book Your Session</Button>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Portfolio