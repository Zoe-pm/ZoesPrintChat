import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import KIHinweis from "@/components/KIHinweis";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Imprint from "@/components/Imprint";
import Datenschutz from "@/components/Datenschutz";
import { useState } from "react";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="flex-grow">
        <Hero />
        <Features />
        <KIHinweis />
        <HowItWorks />
        <About />
        <Testimonials />
        <Contact />
        <div id="imprint-modal" style={{ display: 'none' }}>
          <Imprint />
        </div>
        <Datenschutz />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
