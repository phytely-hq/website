"use client"

import React from "react"
import Image from "next/image"

const services = [
  {
    id: "01",
    title: "Orchard Risk Analytics",
    description: "We map out everything that could threaten your fruit trees so you always stay ahead.",
    image: "/content/images/iot_hub_1.png",
  },
  {
    id: "02",
    title: "Pollination Contracts",
    description: "We deploy managed hives to your fields so your crops hit the maximum allowable yield.",
    image: "https://images.pexels.com/photos/7459846/pexels-photo-7459846.jpeg",
  },
  {
    id: "03",
    title: "Land Restoration",
    description: "We rebuild your degraded soil using native plants and root boosting fungi.",
    image: "https://images.pexels.com/photos/35910440/pexels-photo-35910440.jpeg",
  },
  {
    id: "04",
    title: "Conservation Outreach",
    description: "We track as well as tag threatened tree based ecosystems, and actively help preserve them.",
    image: "https://images.pexels.com/photos/19944982/pexels-photo-19944982.jpeg",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-background text-white py-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter text-balance">
            <span className="block text-foreground">Pure Science.</span>
            <span className="block text-muted-foreground">Zero Guesswork.</span>
          </h2>
        </div>
      </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col aspect-[3/4] overflow-hidden bg-zinc-950 border border-white/10 transition-colors hover:border-white/20"
            >
              <div className="relative flex-1 bg-zinc-900 border-b border-white/10 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 shrink-0 flex flex-col gap-2 bg-muted/50">
                <h3 className="text-lg font-medium leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
