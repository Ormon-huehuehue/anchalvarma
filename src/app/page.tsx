
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import About from "@/components/about";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Makeup artist at work"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 text-center md:py-32">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transform Your Look with <span className="text-primary">Professional Makeup</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
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

        {/* About Section */}
        <About/>

        {/* Services Section */}
        <Services/>

        {/* Portfolio Section */}
        <Portfolio/>

        {/* Testimonials Section */}
        <Testimonials/>

        {/* Contact Section */}
        <Contact/>
      </main>
    </div>
  )
}
