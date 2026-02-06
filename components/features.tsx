"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Bot, BarChart3, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Instant Lead Calls",
    description: "Every new lead gets a call within seconds, not hours. Our AI voice agent ensures no opportunity slips through the cracks.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Leads come in at all hours. Our system works around the clock so you never miss a potential customer.",
  },
  {
    icon: Bot,
    title: "AI-Powered Conversations",
    description: "Natural, intelligent conversations that qualify leads, answer questions, and book meetings automatically.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track every call, conversion rate, and lead quality with our comprehensive dashboard.",
  },
  {
    icon: Zap,
    title: "Seamless Integrations",
    description: "Connect with your CRM, n8n workflows, and existing tech stack through webhooks and APIs.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data is protected with bank-level encryption and full compliance with data regulations.",
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
            Everything You Need to Convert More Leads
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            A complete system designed to maximize your lead conversion rate and revenue.
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
