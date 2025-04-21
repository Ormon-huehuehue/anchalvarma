import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import SupabaseNav from "@/components/SupabaseNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Anchal Varma - Professional Makeup Artist",
  description: "Professional makeup services for weddings, special events, and more. Book your appointment today!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} >
        <SpeedInsights/>
          <Header/>
          {/* <SupabaseNav/> */}
          <div className="px-5 md:px-10">
          {children}
          </div>
          <Footer/>
      </body>
    </html>
 
  )
}
