/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Client Testimonials</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Hear what my clients have to say about their experience
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {/* Testimonial 1 */}
        <div className="rounded-lg border p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=40&width=40" alt="Client" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-medium">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">Bride</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground">
              "I couldn't have been happier with my wedding makeup! Not only did I look amazing, but my makeup
              lasted all day and night through tears, dancing, and countless hugs. Highly recommend!"
            </p>
          </div>
          <div className="mt-4 flex text-primary">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="rounded-lg border p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=40&width=40" alt="Client" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-medium">Emily Rodriguez</h3>
              <p className="text-sm text-muted-foreground">Special Event</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground">
              "I had my makeup done for a gala and received so many compliments! The makeup artist really listened
              to what I wanted and created a look that made me feel confident and beautiful."
            </p>
          </div>
          <div className="mt-4 flex text-primary">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="rounded-lg border p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=40&width=40" alt="Client" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-medium">Jessica Chen</h3>
              <p className="text-sm text-muted-foreground">Makeup Lesson</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground">
              "The makeup lesson was exactly what I needed! I learned so many techniques that I can now do myself.
              The artist was patient, knowledgeable, and made the whole experience fun."
            </p>
          </div>
          <div className="mt-4 flex text-primary">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials