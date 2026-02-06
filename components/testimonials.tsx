"use client"

import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback, useRef } from "react"

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, ScaleUp Digital",
    rating: 5,
    text: "We went from losing 40% of our leads to converting nearly all of them. RevenueOS calls every single lead before they even close the browser tab. Game changer.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Sales, PropVista Realty",
    rating: 5,
    text: "Our agents used to call leads back in 2-3 hours. Now the AI handles it in seconds. Our booking rate tripled in the first month. I don't know how we ran without this.",
  },
  {
    name: "James Okafor",
    role: "CEO, BrightSmile Clinics",
    rating: 5,
    text: "Patients who fill out our forms get a call almost instantly. No-shows dropped by 60%. RevenueOS pays for itself every single week.",
  },
  {
    name: "Priya Sharma",
    role: "Growth Lead, FinEdge",
    rating: 4,
    text: "We plug in the leads, RevenueOS does the rest. Qualified meetings show up on our calendar like magic. The system just works -- reliably and at scale.",
  },
  {
    name: "Marcus Williams",
    role: "Owner, Elite Home Services",
    rating: 5,
    text: "Before RevenueOS, my team missed half the leads that came in after hours. Now every single one gets a call. Revenue is up 35% in 90 days.",
  },
  {
    name: "Ananya Reddy",
    role: "Director of Marketing, LearnPath Edu",
    rating: 5,
    text: "Speed to lead is everything in our space. RevenueOS gave us that edge. Enrollment inquiries get handled in real time -- even on weekends and holidays.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${rating}-${i}`}
          className={`w-4 h-4 ${
            i < rating
              ? "text-primary fill-primary"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const totalSlides = testimonials.length

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(((index % totalSlides) + totalSlides) % totalSlides)
    },
    [totalSlides],
  )

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo])
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo])

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  // Pause auto-play on hover / interaction
  const pause = () => setIsAutoPlaying(false)
  const resume = () => setIsAutoPlaying(true)

  // Touch / pointer drag
  const handlePointerDown = (e: React.PointerEvent) => {
    pause()
    setIsDragging(true)
    setDragStartX(e.clientX)
    setDragOffset(0)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    setDragOffset(e.clientX - dragStartX)
  }

  const handlePointerUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    const threshold = 60
    if (dragOffset < -threshold) {
      next()
    } else if (dragOffset > threshold) {
      prev()
    }
    setDragOffset(0)
    resume()
  }

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Trusted by Teams That Refuse to Lose Leads
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            A proven system built for speed. Here{"'"}s what our clients have to say.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Arrow buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-10 bg-card border-border hover:border-primary/50 hover:bg-secondary rounded-full w-9 h-9 sm:w-10 sm:h-10 shadow-lg"
            onClick={() => { pause(); prev(); resume(); }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-10 bg-card border-border hover:border-primary/50 hover:bg-secondary rounded-full w-9 h-9 sm:w-10 sm:h-10 shadow-lg"
            onClick={() => { pause(); next(); resume(); }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          </Button>

          {/* Track */}
          <div className="overflow-hidden mx-6 sm:mx-8">
            <div
              ref={trackRef}
              className="flex select-none"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
                transition: isDragging ? "none" : "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="w-full flex-shrink-0 px-2 sm:px-3"
                >
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-6 sm:p-8 flex flex-col gap-5 min-h-[240px] sm:min-h-[260px]">
                      <StarRating rating={t.rating} />
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed flex-1">
                        {`"${t.text}"`}
                      </p>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm sm:text-base font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => { pause(); goTo(i); resume(); }}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
