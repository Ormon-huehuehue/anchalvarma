import About from "@/components/about";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
        {/* Hero Section */}
        <Hero/>

        {/* Services Section */}
        <Services/>

        {/* About Section */}
        <About/>
      
    

        {/* Portfolio Section */}
        <Portfolio/>

        {/* Testimonials Section */}
        <Testimonials/>

        {/* Contact Section */}
        <Contact/>
  
    </div>
  )
}
