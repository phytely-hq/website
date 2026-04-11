"use client";

export default function ParallaxVisual() {
  return (
    <section id="about" className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden border-y border-foreground/10 bg-muted">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/content/images/farm-parallax.jpg')]"
      />

      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-screen-2xl mx-auto h-full px-4 md:px-8 relative">
          <div className="absolute right-4 ml-4 bottom-6 md:bottom-10 max-w-md">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60 mb-3 drop-shadow-sm">
                Quants for Plants
            </p>
            <p className="text-xs md:text-sm font-medium leading-relaxed text-white drop-shadow-md mr-4">
                <span className="text-primary mr-2 font-black">//</span>
                Managing a farm today means checking too many different apps 
                and screens just to see if things are okay. It’s messy and slow. 
                We take all those tools and put them into one simple place.
                <br /><br /> 
                We give you a clear view of your whole operation so you can stop fighting with your data 
                and start doing what you do best, which is farming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}