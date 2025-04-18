import React from 'react'
import { Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 flex justify-center">
    <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Anchal Verma. All rights reserved.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="https://instagram.com/anchalvermamua" target="_blank" rel="noopener noreferrer">
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
        <Link href="mailto:contact@bellamakeup.com">
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer