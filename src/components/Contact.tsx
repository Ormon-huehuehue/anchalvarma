/* eslint-disable react/no-unescaped-entities */
import React, { useEffect} from 'react'
import { Instagram, Facebook, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";



const Contact = () => {
  return (
    <section id="contact" className="md:mb-24 mb-15">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Ready to book your appointment or have questions? Get in touch!
        </p>
      </div>
      <div className="mt-12 overflow-hidden rounded-lg border bg-background shadow-sm">
        <div className="grid md:grid-cols-5">
          {/* Contact Info Sidebar */}
          <div className="bg-primary/5 p-8 md:col-span-2">
            <h3 className="text-xl font-semibold">Let's Connect</h3>
            <p className="mt-2 text-muted-foreground">
              I'd love to hear from you! Reach out through any of these channels:
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 8750044212</p>
                  <p className="mt-1 text-sm text-muted-foreground">Available Mon-Fri, 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">info@anchalverma.in</p>
                  <p className="mt-1 text-sm text-muted-foreground"></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Whatsapp</h4>
                  <p className="text-muted-foreground">099 99 099225</p>
                  <p className="mt-1 text-sm text-muted-foreground"></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <p className="text-muted-foreground">@anchalvermamua</p>
                  <p className="mt-1 text-sm text-muted-foreground">DM me for quick questions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Facebook className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Facebook</h4>
                  <p className="text-muted-foreground">@anchalvermamua</p>
                  <p className="mt-1 text-sm text-muted-foreground">Anchal Verma</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h4 className="font-medium">Service Areas</h4>
              <p className="mt-2 text-muted-foreground">
                Available for bookings in the greater metropolitan area and willing to travel for destination
                events.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:col-span-3">
            <h3 className="text-xl font-semibold">Send a Message</h3>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium leading-none">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="event">Special Event Makeup</option>
                    <option value="lesson">Makeup Lesson</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium leading-none">
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell me about your event or any questions you have"
                  required
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I consent to having my information stored for contact purposes
                </label>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>


        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact