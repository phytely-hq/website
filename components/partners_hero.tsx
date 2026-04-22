"use client";

import Image from "next/image";

export default function HeroPartners() {
  return (
    <section className="w-full min-h-[100dvh] bg-background text-white flex flex-col py-10 md:py-12 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 shrink-0 w-full mb-8 md:mb-12 flex flex-col space-y-6">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter text-balance">
          <span className="text-foreground">Mitigating Risk </span>
          <span className="block text-muted-foreground">Together.</span>
        </h1>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full mb-12 md:mb-16">
        <div className="relative w-full aspect-video bg-muted group overflow-hidden">
          <Image
            src="/content/images/seeds.jpg"
            alt="Partnership in agriculture"
            className="absolute inset-0 w-full h-full object-cover"
            fill
            priority
          />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-2">
        <div>
          <span className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4 block">
            We need your help
          </span>
        </div>

        <div className="flex flex-col gap-6 text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl">
          <p>
            We are an agritech collective committed to the belief that true resilience cannot come at the cost of the environment.
            Sustainable agriculture requires risk mitigation solutions that protect both the farmer’s margin and the planet’s future.
          </p>
          <p>
            We are looking for partners to help us scale through integrated hardware & insurance solutions. 
            If you provide the sensors or infrastructure required to quantify risk without harming the environment, let&apos;s talk.
          </p>
        </div>
      </div>
    </section>
  );
}