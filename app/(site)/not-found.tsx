"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-background text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        
        <div className="flex items-center justify-center font-black uppercase tracking-[-0.08em] leading-none select-none mb-12 text-[9.5rem] sm:text-[16rem] md:text-[22rem] lg:text-[28rem]">
          <span className="text-white z-20 relative">4</span>
          <span className="relative inline-flex items-center justify-center overflow-hidden">
            <span className="text-transparent pointer-events-none px-2 md:px-4">0</span>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-1/2 left-1/2 w-full h-full min-w-[110%] min-h-[110%] -translate-x-1/2 -translate-y-1/2 object-cover object-center scale-110 z-0 grayscale"
            >
              <source src="/content/404.mp4" type="video/mp4" />
            </video>
            <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] z-10 pointer-events-none">
              <defs>
                <mask id="zero-hole">
                  <rect width="100%" height="100%" fill="white" />
                  <text 
                    x="50%" 
                    y="50%" 
                    textAnchor="middle" 
                    dominantBaseline="central" 
                    fill="black" 
                    className="font-black text-[10rem] sm:text-[16rem] md:text-[22rem] lg:text-[28rem]"
                  >
                    0
                  </text>
                </mask>
              </defs>
              <rect 
                width="100%" 
                height="100%" 
                fill="oklch(0.141 0.005 285.823)" 
                mask="url(#zero-hole)" 
              />
            </svg>

          </span>
          <span className="text-white z-20 relative">4</span>
        </div>

        <div className="max-w-xl space-y-4 mb-10">
          <p className="text-foreground text-sm leading-relaxed">
            Page not found. Perhaps our goat ate it ? <br />Please check back later or return to the homepage.
          </p>
        </div>

        <Link href="/">
          <Button variant="outline" size="lg">
            Return to Homepage
          </Button>
        </Link>

      </div>
    </main>
  );
}