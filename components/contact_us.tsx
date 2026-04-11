"use client";

// IMPORTANT: You must import the Leaflet CSS for tiles to appear correctly
import "leaflet/dist/leaflet.css";

import { 
  Map, 
  MapMarker, 
  MapTileLayer 
} from "@/components/ui/map";
import type { LatLngExpression } from "leaflet";

export default function ContactOffices() {
  const MASERU_COORDINATES = [-29.3151, 27.4869] as LatLngExpression; 

  return (
    <section className="w-full flex flex-col pt-16 md:pt-24 bg-background">
      
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full mb-10 md:mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter text-balance">
              <span className="block text-foreground">Save Your</span>
              <span className="block text-muted-foreground">Harvest.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6">
            <p className="text-sm font-medium leading-relaxed max-w-md text-muted-foreground lg:text-left">
              <span className="text-primary mr-2 font-black">//</span>
              If you’d like to speak with the team in person or check out our equipment, 
              our main office is marked on the map below. Simply click the marker or look at the footer for 
              specific location details and directions.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[350px] md:h-[500px] bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Map 
            center={MASERU_COORDINATES} 
            zoom={14} 
            scrollWheelZoom={false} 
          >
          <MapTileLayer/>
            
            <MapMarker 
              position={MASERU_COORDINATES} 
              icon={
                <div className="flex items-center justify-center -translate-x-1/2 -translate-y-1/2 focus:outline-none">
                  <span className="absolute h-12 w-12 animate-ping rounded-full bg-white/20" />
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-full bg-black/50 blur-md translate-y-1" />
                    <div className="relative h-12 w-12 rounded-full border-[3px] border-white overflow-hidden bg-white shadow-xl">
                      <img 
                        src="https://picsum.photos/seed/PointCircleBorder2/60/60" 
                        alt="Node"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              } 
            />

          </Map>
        </div>
      </div>
    </section>
  );
}