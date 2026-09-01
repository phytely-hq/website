"use client";

export default function ParallaxVisual() {
  return (
    <section id="about" className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-muted">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/content/images/farm-parallax.jpg')]"
      />

      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-screen-2xl mx-auto h-full px-4 md:px-8 relative">
          
          {/* Image Attribution */}
          <div className="absolute left-4 bottom-6 md:bottom-10">
            <p className="text-[9px] font-mono uppercase tracking-widest text-white/40">
              Photo by Tsepo Mabusa
            </p>
          </div>

          {/* Main Content */}
          <div className="absolute right-4 ml-4 bottom-6 md:bottom-10 max-w-md">
            <p className="text-xs md:text-sm font-medium leading-relaxed text-white drop-shadow-md mr-4">
                <span className="text-primary mr-2 font-black">//</span>
                  Local agriculture largely relies on blanket solutions to manage risk: 
                  heavy spraying and generic estimates that ignore real field conditions 
                  and often come at the expense of the environment.
                <br /><br /> 
                  We look beyond broad fixes. We build targeted analytics, tools, and mathematical models tailored to your specific field data, 
                  helping you isolate, understand, and address threats on your farm before they impact your harvest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
