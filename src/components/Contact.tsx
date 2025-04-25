/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Instagram, Facebook, Mail, Phone, MessageSquare } from "lucide-react";
import ContactForm from './ContactForm';
import Link from "next/link";


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

            <Link href="tel:+918750044212" target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4">
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
            </Link>

              <Link href="mailto:info@anchalverma.in" target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4">
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
              </Link>

              <Link href="https://wa.me/09999099225" target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4">

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
              </Link>

              <Link href="https://www.instagram.com/anchalvermamua/" target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <p className="text-muted-foreground">@anchalvermamua</p>
                  <p className="mt-1 text-sm text-muted-foreground">DM me for quick questions</p>
                </div>
              </Link>

              <Link href="https://www.facebook.com/anchalvermamua/" target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Facebook className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h4 className="font-medium">Facebook</h4>
                    <p className="text-muted-foreground">@anchalvermamua</p>
                    <p className="mt-1 text-sm text-muted-foreground">Anchal Verma</p>
                </div>
              </Link>
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
          <ContactForm/>


        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact