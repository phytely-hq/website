"use client";

import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayIcon, PauseIcon } from '@phosphor-icons/react';

export default function PartnersMain() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setIsPlaying(false);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleVideoClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    const video = videoRef.current;
    if (!video) return;

    if (video.ended) {
      video.currentTime = 0;
      video.play();
      setIsPlaying(true);
    } else if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full bg-background flex items-center justify-center py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full bg-card border border-border">
          
          <div className="p-10 lg:p-14 flex flex-col justify-between h-full order-2 lg:order-1 border-r border-border">
            <div>
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-12 lg:mb-16">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="text-secondary-foreground">
                  <line x1="7" y1="7" x2="17" y2="17"></line>
                  <polyline points="17 7 17 17 7 17"></polyline>
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">Insurance Providers</h2>
              <p className="text-xs font-medium text-muted-foreground leading-relaxed mb-8">
                <span className="text-primary mr-2 font-black">//</span>
                We need partnerships with agricultural insurance providers to offer simple, affordable cover that protects farmers from risks like drought, bad weather, and crop loss. This helps farmers feel more secure and able to invest in their farms.
              </p>
            </div>
            
            <div className="pt-4">
              <Link href="mailto:info@phytely.com?subject=Enquiry%20on%20Insurance%20Provider%20Partnership">
                <Button variant="default" size="sm" className="uppercase font-bold h-12 px-8 tracking-widest rounded-none w-fit">
                  Enquire More
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full h-[400px] lg:h-auto order-1 lg:order-2 bg-muted relative overflow-hidden group">
            <video
              ref={videoRef}
              src="/content/partnership.mp4"
              className={`absolute inset-0 w-full h-full object-cover cursor-pointer transition-all duration-700 ${isPlaying ? 'grayscale-0' : 'grayscale'}`}
              playsInline
              onClick={handleVideoClick}
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div 
                className="relative flex h-16 w-16 items-center justify-center rounded-none bg-white/10 backdrop-blur-sm text-white pointer-events-auto cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:bg-white/20 group/btn"
                onClick={handleVideoClick}
              >
                {isPlaying ? (
                  <PauseIcon size={28} weight="light" className="transition-transform duration-300 group-active/btn:scale-90" />
                ) : (
                  <PlayIcon size={28} weight="light" className="transition-transform duration-300 group-active/btn:scale-90" />
                )}
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-0" />
          </div>

          <div className="p-10 lg:p-14 flex flex-col justify-between h-full order-3 border-l border-border">
            <div>
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-12 lg:mb-16">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="text-secondary-foreground">
                  <line x1="7" y1="7" x2="17" y2="17"></line>
                  <polyline points="17 7 17 17 7 17"></polyline>
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">IoT Partnerships</h2>
              <p className="text-xs font-medium text-muted-foreground leading-relaxed mb-8">
                <span className="text-primary mr-2 font-black">//</span>
                We also need to work with more IoT providers to give farmers access to clearer real-time data and insights. These partnerships help farmers make informed decisions and build more resilient livelihoods.
              </p>
            </div>
            
            <div className="pt-4">
              <Link href="mailto:info@phytely.com?subject=Enquiry%20on%20IoT%20and%20Infrastructure%20Partnership">
                <Button variant="default" size="sm" className="uppercase font-bold h-12 px-8 tracking-widest rounded-none w-fit">
                  Enquire More
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}