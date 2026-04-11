"use client"
import { useState, useRef, useEffect } from 'react'
import { PlayIcon, PauseIcon } from '@phosphor-icons/react'

const Testimonials = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => setIsPlaying(false)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const handleVideoClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    
    const video = videoRef.current
    if (!video) return

    if (video.ended) {
      video.currentTime = 0
      video.play()
      setIsPlaying(true)
    } else if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

  return (
    <section className="bg-background pt-24 sm:pt-32 lg:pt-40">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-32 lg:mb-40">
          <div className="mx-auto max-w-screen-2xl relative w-full bg-black overflow-hidden group">
            <video
              ref={videoRef}
              src="/content/testimonial.mp4"
              className={`w-full aspect-[9/16] sm:aspect-video object-cover cursor-pointer transition-all duration-700 ${isPlaying ? 'grayscale-0' : 'grayscale'}`}
              playsInline
              onClick={handleVideoClick}
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-none bg-white/10 backdrop-blur-sm text-white pointer-events-auto cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:bg-white/20 group/btn"
                onClick={handleVideoClick}
              >
                {isPlaying ? (
                  <PauseIcon size={28} weight="light" className="sm:w-8 sm:h-8 transition-transform duration-300 group-active/btn:scale-90" />
                ) : (
                  <PlayIcon size={28} weight="light" className="sm:w-8 sm:h-8 transition-transform duration-300 group-active/btn:scale-90" />
                )}
              </div>
            </div>
          </div>

          <div className="absolute -top-20 sm:-bottom-24 right-0 w-full z-10 px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="mx-auto max-w-7xl flex justify-end">
              <h1 className="text-right text-6xl sm:text-8xl md:text-9xl font-black uppercase leading-[0.82] tracking-tighter text-balance drop-shadow-2xl">
                <span className="block text-foreground">Social</span>
                <span className="block text-muted-foreground/80">Proof.</span>
              </h1>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Testimonials