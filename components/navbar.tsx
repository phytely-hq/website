"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const menuLinks = [
  { 
    label: "Pricing", 
    href: "/api/pricing",
    description: "Flexible plans that scale with your agricultural needs. Explore our pricing for the API."
  },
  { 
    label: "Careers", 
    href: "/careers",
    description: "Join our team of innovators building the future of sustainable, data-driven farming."
  },
  { 
    label: "Partnerships", 
    href: "/partnerships",
    description: "Collaborate with us to integrate sustainable agricultural solutions to the world. Find out how."
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header className="relative top-0 left-0 right-0 z-100">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="group flex items-center cursor-pointer focus:outline-none"
            >
              <div className="relative flex flex-col items-start justify-center gap-[6px] w-6 h-5 shrink-0">
                <span
                  className={`block h-[2px] bg-foreground transition-all duration-300 ease-out origin-center ${
                    isOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"
                  }`}
                />
                <span
                  className={`block h-[2px] bg-foreground transition-all duration-300 ease-out ${
                    isOpen ? "w-0 opacity-0 -translate-x-2" : "w-6 opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] bg-foreground transition-all duration-300 ease-out origin-center ${
                    isOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-4 group-hover:w-6"
                  }`}
                />
              </div>
            </button>

            <Link
              href="/"
              className="text-foreground flex items-center select-none"
            >
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="link" size="sm" className="tracking-widest hidden sm:block" >
                View Docs
            </Button>
            <Link href="https://app.phytely.com/">
             <Button variant="default" size="sm" className="tracking-widest" >
                Try App
             </Button>
            </Link>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!isOpen}
        style={{
          height: isOpen ? "67vh" : "0",
          transition: "height 0.6s cubic-bezier(.76,0,.24,1)",
        }}
        className="fixed inset-x-0 top-0 z-40 bg-background overflow-hidden border-b border-border"
      >
        <div className="h-16" />
        <div className="max-w-screen-2xl mx-auto px-6 h-[calc(67vh-4rem)]" >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-10">
            <nav className="flex flex-col justify-center h-full">
              <ul>
                {menuLinks.map((link, i) => (
                  <li key={link.label} onMouseEnter={() => setHoveredIndex(i)}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-5 border-b border-border last:border-0"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "translateY(0)" : "translateY(12px)",
                        transition: `opacity 0.4s ease ${0.15 + i * 0.07}s, transform 0.4s ease ${0.15 + i * 0.07}s`,
                      }}
                    >
                      <span className={`font-semibold text-4xl md:text-5xl font-sans tracking-tight transition-all duration-300 ${hoveredIndex === i ? "text-foreground translate-x-2" : "text-foreground/50"}`}>
                        {link.label}
                      </span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`transition-all duration-300 shrink-0 ${hoveredIndex === i ? "text-foreground translate-x-1" : "text-transparent"}`}>
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:flex flex-col justify-center h-full pl-10 lg:pl-20">
              <div 
                className="max-w-md transition-all duration-500 ease-out"
                style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.4s" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-4 font-sans">
                  {menuLinks[hoveredIndex].label}
                </h3>
                <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed">
                  {menuLinks[hoveredIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-30 bg-black transition-opacity duration-500"
        style={{
          opacity: isOpen ? 0.25 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />
    </>
  )
}
