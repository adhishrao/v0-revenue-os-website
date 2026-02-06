"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Bot, BarChart3, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Instant Lead Response",
    description: "New lead comes in, they get a call in seconds. Speed to lead is the single biggest factor in conversion -- and RevenueOS handles it automatically.",
  },
  {
    icon: Clock,
    title: "24/7 Lead Coverage",
    description: "Leads don't wait for business hours. Every inquiry gets handled at 2am, on weekends, and during holidays. Zero gaps in your pipeline.",
  },
  {
    icon: Bot,
    title: "AI-Powered Conversations",
    description: "Not a robocall. A real conversation. The AI qualifies leads, answers questions about your business, and books meetings directly on your calendar.",
  },
  {
    icon: BarChart3,
    title: "Full Call Analytics",
    description: "Every interaction is tracked and transcribed. See pick-up rates, qualification outcomes, and conversion metrics -- all in real time.",
  },
  {
    icon: Zap,
    title: "Plugs Into Your Stack",
    description: "Works with your existing CRM, forms, and marketing tools. No migration, no ripping out what already works. Just faster lead response.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "End-to-end encryption on all calls and data. SOC 2 aligned practices. Your lead data stays private, secure, and compliant.",
  },
]

interface FeaturesProps {
  onLearnMore?: (feature: string) => void
}

export function Features({ onLearnMore }: FeaturesProps) {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            A Proven System That Converts More Leads
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            RevenueOS is battle-tested infrastructure trusted by sales teams, clinics, agencies, and service businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer group"
              onClick={() => onLearnMore?.(feature.title)}
            >
              <CardContent className="p-5 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
