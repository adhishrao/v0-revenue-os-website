"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

interface CTASectionProps {
  onGetDemo?: () => void
}

export function CTASection({ onGetDemo }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Hear It for Yourself
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto leading-relaxed px-2">
            Enter your name and phone number. Our AI voice agent will call you within seconds.
            No sales pitch. No follow-up emails. Just the product, live.
          </p>
          <p className="text-sm text-muted-foreground mb-8 sm:mb-10">
            This is the exact experience your leads will get.
          </p>
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
              onClick={() => window.open('mailto:sales@revenueos.io', '_blank')}
            >
              Talk to Sales
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
