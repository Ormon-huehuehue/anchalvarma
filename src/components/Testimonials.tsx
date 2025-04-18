/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from "next/image";
import TestimonialWidget from './TestimonialWidget';


const testimonials = [
  {
    imageUrl : "/bride2.jpeg",
    name : "Sarah",
    service : "bridal makeup",
    comment : "I couldn't have been happier with my wedding makeup! Not only did I look amazing, but my makeup lasted all day and night through tears, dancing, and countless hugs. Highly recommend!",
    stars : 4
  },
  {
    imageUrl : "/anchal2.jpeg",
    name : "Emily Rodriguez",
    service : "Special Event",
    comment : "I had my makeup done for a gala and received so many compliments! The makeup artist really listened to what I wanted and created a look that made me feel confident and beautiful.",
    stars : 4
  },
  {
    imageUrl : "/bride4.jpeg",
    name : "Sarah",
    service : "Makeup Lesson",
    comment : "I couldn't have been happier with my wedding makeup! Not only did I look amazing, but my makeup lasted all day and night through tears, dancing, and countless hugs. Highly recommend!",
    stars : 4
  }
]

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
        {testimonials.map((review, index)=>(
          <TestimonialWidget review={review} key={index} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonials