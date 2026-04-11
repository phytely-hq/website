"use client"

import * as React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Safari } from "@/registry/safari"
import { Terminal } from "@/components/ui/terminal"

const slides = [
    {
    id: 1,
    title: "Analytics API",
    text: "We give you a clear view of your whole operation so you can stop fighting with your data and start doing what you do best, which is farming. Everything syncs in real-time.",
    link: "/#about",
    img: "/content/images/api.png",
    safariUrl: "analytics.farm.local",
    terminal: {
      commands: [
        "curl api.farm/trees?img=f01.jpg",
        "curl api.farm/stream?id=drone_01"
      ],
      outputs: {
        0: [
          "{",
          "  \"count\": 1240,",
          "  \"issues\": 42,",
          "  \"map\": \"m01.jpg\"",
          "}"
        ],
        1: [
          "{",
          "  \"status\": \"live\",",
          "  \"source\": \"dji_mavic_3e\",",
          "  \"url\": \"api.farm/live/d01\"",
          "}"
        ]
      }
    }
  },
  {
    id: 2,
    title: "IoT Hub",
    text: "Managing a farm today means checking too many different apps and screens just to see if things are okay. It’s messy and slow. We take all those tools and put them into one simple place.",
    link: "/#about",
    img: "/content/images/iot_hub.png",
    safariUrl: "https://phytely.vercel.app",
  }
]

export default function OffsetCarousel() {
  const trackRef = React.useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const scrollNext = () => {
    const nextIndex = Math.min(activeIndex + 1, slides.length - 1)
    if (trackRef.current) {
      const slide = trackRef.current.children[nextIndex] as HTMLElement
      if (slide) {
        slide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
      }
    }
    setActiveIndex(nextIndex)
  }

  const scrollPrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0)
    if (trackRef.current) {
      const slide = trackRef.current.children[prevIndex] as HTMLElement
      if (slide) {
        slide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
      }
    }
    setActiveIndex(prevIndex)
  }

  return (
    <>
      <section className="py-16 md:py-24 flex flex-col gap-10 md:gap-20 overflow-hidden bg-muted/50 text-white">
        <div className="w-full pl-4 md:pl-8 2xl:pl-[calc(50vw-768px+2rem)] pr-4 md:pr-8">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter text-balance">
            <span className="block text-white">Full Signals.</span>
            <span className="block text-white/50">Zero Noise.</span>
          </h2>
        </div>
        
        <div className="flex flex-col xl:flex-row items-start lg:items-end gap-8 lg:gap-10 pl-4 md:pl-8 2xl:pl-[calc(50vw-768px+2rem)]">
          <div className="w-full lg:w-[350px] shrink-0 flex flex-col gap-6 lg:gap-10 pb-2 lg:pb-5 pr-4 md:pr-0">
            <div className="lg:min-h-[150px] flex flex-col justify-end">
              <p 
                key={activeIndex} 
                className="text-sm md:text-base lg:text-sm font-medium leading-relaxed max-w-md text-white drop-shadow-md mr-4 animate-in fade-in duration-500"
              >
                <span className="text-primary mr-2 font-black">//</span>
                {slides[activeIndex].text}
              </p>
              <Button variant="link" 
                      size="sm" 
                      className="my-4 uppercase px-0 self-start justify-start" onClick={() => window.location.href = slides[activeIndex].link}>
                Try It Now
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#31302b] transition-colors"
                onClick={scrollPrev}
                aria-label="Previous terminal"
              >
                <ArrowLeftIcon size={18} weight="bold" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#31302b] transition-colors"
                onClick={scrollNext}
                aria-label="Next terminal"
              >
                <ArrowRightIcon size={18} weight="bold" />
              </Button>
            </div>
          </div>

          {/* Carousel Track */}
          <div 
            ref={trackRef}
            className="w-full lg:flex-1 flex gap-2 md:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 md:px-8 py-4 scroll-pl-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {slides.map((slide, index) => (
              <div 
                key={slide.id} 
                data-index={index}
                className="flex-none w-[88vw] md:w-[85%] lg:w-[75%] aspect-video snap-start relative group flex flex-col"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 w-full h-full px-0 md:px-8">
                    <Safari 
                      url={slide.safariUrl}
                      imageSrc={slide.img} 
                    />
                  </div>

                  {slide.terminal && (
                    <div className="hidden md:block absolute bottom-4 left-0 z-30 w-full max-w-[60%] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-black/50 drop-shadow-xl">
                      <Terminal
                        commands={slide.terminal.commands}
                        outputs={slide.terminal.outputs}
                        typingSpeed={45}
                        username="Phytely-Linux"
                        delayBetweenCommands={1000}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-14 md:py-26 bg-muted/50 flex flex-col items-center justify-center px-4 md:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-white/50 mb-8 md:mb-12">
            No Subscription Traps
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.3] md:leading-[1.2] text-secondary font-serif mb-10 md:mb-16 text-balance">
            We don’t lock you into ongoing <span className="italic">subscriptions</span>, just <span className="italic">flexible</span> access when you need it.
          </h2>
        </div>
      </section>
    </>
  )
}