"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Lead Comes In",
    description: "A new lead submits a form, triggers an event, or enters your system through any channel.",
  },
  {
    number: "02",
    title: "Webhook Fires",
    description: "Your n8n workflow instantly receives the lead data and triggers our voice agent API via HTTP request.",
  },
  {
    number: "03",
    title: "AI Calls Instantly",
    description: "Our Vapi-powered voice agent calls the lead within seconds, having a natural conversation.",
  },
  {
    number: "04",
    title: "Lead Qualified",
    description: "The AI qualifies the lead, answers questions, and books a meeting or transfers to your team.",
  },
]

interface HowItWorksProps {
  onGetDemo?: () => void
  onLearnMore?: () => void
}

export function HowItWorks({ onGetDemo, onLearnMore }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From lead capture to conversion in four simple steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-6 md:gap-12">
                  {/* Step Number */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-secondary border border-border rounded-full flex items-center justify-center">
                    <span className="text-primary font-mono font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    {index === steps.length - 1 && (
                      <div className="mt-6 flex flex-wrap gap-4">
                        <Button
                          onClick={onGetDemo}
                          className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          Get Your Demo Call
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                          variant="outline"
                          onClick={onLearnMore}
                          className="border-border text-foreground hover:bg-secondary bg-transparent"
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
