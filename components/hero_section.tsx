"use client";

import { ArrowDownIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PhytelyHero() {
  return (
    <section className="w-full h-[100dvh] flex flex-col pt-10 md:pt-14 overflow-hidden bg-background">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 shrink-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-6 md:mb-8">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter text-balance">
              <span className="block text-foreground">Plant Smarter.</span>
              <span className="block text-muted-foreground">Grow Greener.</span>
            </h1>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6">
            <p className="text-sm font-medium leading-relaxed max-w-md text-muted-foreground lg:text-right">
              Farming is a high-stakes gamble against biological variables. We
              provide the high-fidelity signal required to underwrite the margin 
              and eliminate the data noise that steals your profit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:justify-end">
              <Link href="/#about">
               <Button 
                variant="default" 
                size="lg" 
                className="uppercase font-bold h-12 px-8 tracking-widest rounded-none"
               >
                <ArrowDownIcon weight="bold" className="w-4 h-4 mr-2" />
                Learn More
               </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex-1 bg-muted overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/content/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-foreground/5 pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none mb-14 ">
          <div className="max-w-screen-2xl mx-auto h-full px-4 md:px-8 relative">
            <div className="absolute bottom-6 md:bottom-10 max-w-md">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60 mb-3 drop-shadow-sm">
                Active Telemetry
              </p>
              <p className="text-xs md:text-sm font-medium leading-relaxed text-white drop-shadow-md mr-4">
                <span className="text-primary mr-2 font-black">//</span>
                Clarence Hub Real-time signal processing of moisture, nutrient 
                density, and biological risks across monitored sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}