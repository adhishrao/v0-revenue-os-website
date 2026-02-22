"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Zap } from "lucide-react"

interface HeroProps {
  onGetDemo?: () => void
}

export function Hero({ onGetDemo }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              AI Voice Agent for Instant Lead Response
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 text-balance">
            Your Leads Get a Call
            <span className="text-primary"> in Seconds.</span> Not Hours.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            RevenueOS is the AI voice agent that responds to every new lead the moment it arrives.
            Qualify, book, and convert -- on autopilot. Trusted by hundreds of businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Button
              size="lg"
              onClick={onGetDemo}
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get a Live AI Demo Call
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-border text-foreground hover:bg-secondary px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium bg-transparent"
              onClick={() => window.open('https://calendly.com/revenueos-ai/30min', '_blank')}
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-6 text-xs sm:text-sm text-muted-foreground">
            No spam. No waiting. Our AI calls you within seconds.
          </p>
        </div>
      </div>
    </section>
  )
}
