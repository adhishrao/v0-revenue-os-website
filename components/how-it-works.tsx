"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "A New Lead Enters Your System",
    description: "A form submission, ad click, CRM event, or any trigger you define. RevenueOS listens to your existing channels via webhook.",
  },
  {
    number: "02",
    title: "n8n Automation Fires Instantly",
    description: "Your n8n workflow receives the lead data and processes it in real time. Route, enrich, and validate -- then trigger the call via HTTP request.",
  },
  {
    number: "03",
    title: "Vapi AI Voice Agent Calls the Lead",
    description: "Within seconds, a Vapi-powered AI voice agent dials the lead. The conversation is natural, context-aware, and customized to your business.",
  },
  {
    number: "04",
    title: "Lead is Qualified and Routed",
    description: "The AI qualifies the lead based on your criteria, books a meeting on your calendar, or routes to a sales rep. Every call is recorded and transcribed.",
  },
]

interface HowItWorksProps {
  onGetDemo?: () => void
  onLearnMore?: () => void
}

export function HowItWorks({ onGetDemo, onLearnMore }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            How RevenueOS Responds to Leads in Seconds
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Four steps. Fully automated. From lead capture to AI-powered phone call.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8 sm:space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-4 sm:gap-6 md:gap-12">
                  {/* Step Number */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-secondary border border-border rounded-full flex items-center justify-center">
                    <span className="text-primary font-mono font-bold text-sm sm:text-lg">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 sm:pt-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    {index === steps.length - 1 && (
                      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button
                          onClick={onGetDemo}
                          className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          Get a Live AI Demo Call
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                          variant="outline"
                          onClick={onLearnMore}
                          className="w-full sm:w-auto border-border text-foreground hover:bg-secondary bg-transparent"
                        >
                          Learn More
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
