import React from 'react'
import { ChevronRight } from "lucide-react";


const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 ">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Professional makeup services tailored to your unique style and occasion
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {/* Bridal Makeup */}
        <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
          <div className="mb-4 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
                className="h-8 w-8 text-primary"
              >
                <path d="M8 19h8a2 2 0 0 0 2-2v-7.93a2 2 0 0 0-.59-1.42L12 2.25l-5.41 5.4A2 2 0 0 0 6 9.07V17a2 2 0 0 0 2 2Z" />
                <path d="M12 2.25V22" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Bridal Makeup</h3>
          </div>
          <p className="text-muted-foreground">
            Look radiant on your special day with long-lasting, photo-ready makeup that enhances your natural
            beauty.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
              <span>Consultation & trial session</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
              <span>Day-of makeup application</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
              <span>Touch-up kit</span>
            </li>
          </ul>
          <div className="mt-6 text-center">
            {/* <p className="font-medium">Starting at $250</p> */}
          </div>
        </div>

        {/* Special Event Makeup */}
        <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
          <div className="mb-4 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
                className="h-8 w-8 text-primary"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Special Event Makeup</h3>
          </div>
          <p className="text-muted-foreground">
            Perfect for parties, galas, proms, and other special occasions. Look your best for any event.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
              <span>Customized look</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
              <span>Long-lasting application</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
              <span>False lashes included</span>
            </li>
          </ul>
          <div className="mt-6 text-center">
            <p className="font-medium"></p>
          </div>
        </div>

        {/* Makeup Lessons */}
        <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
          <div className="mb-4 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
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
                className="h-8 w-8 text-primary"
              >
                <path d="M2 12h5" />
                <path d="M17 12h5" />
                <path d="M12 2v5" />
                <path d="M12 17v5" />
                <path d="M12 12L2 2" />
                <path d="M12 12l10 10" />
                <path d="m12 12 10-10" />
                <path d="m12 12-10 10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Makeup Lessons</h3>
          </div>
          <p className="text-muted-foreground">
            Learn professional techniques to enhance your everyday makeup routine or master a specific look.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
              <span>Personalized instruction</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
              <span>Product recommendations</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 text-primary" />
              <span>Technique practice</span>
            </li>
          </ul>
          <div className="mt-6 text-center">
            <p className="font-medium"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services