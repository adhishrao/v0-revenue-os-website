"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Stethoscope, GraduationCap, Car, Building2, Dumbbell } from "lucide-react"

const useCases = [
  {
    icon: Home,
    industry: "Real Estate",
    title: "Call Leads from Zillow, Realtor, or Facebook Ads",
    description: "Every property inquiry gets an instant AI call. Qualify buyer intent, schedule showings, and capture seller leads before competitors pick up the phone.",
  },
  {
    icon: Stethoscope,
    industry: "Clinics & Healthcare",
    title: "Fill Your Appointment Calendar on Autopilot",
    description: "New patient inquiries get an immediate callback. The AI books appointments, confirms insurance details, and routes urgent cases to staff.",
  },
  {
    icon: Building2,
    industry: "Home Services",
    title: "Respond to Every Job Request Instantly",
    description: "Plumbing, HVAC, roofing -- when a lead fills out a form, the AI calls within seconds. Qualify the job, provide estimates, and schedule on-site visits.",
  },
  {
    icon: Car,
    industry: "Auto Dealerships",
    title: "Turn Online Shoppers into Showroom Visits",
    description: "Website visitors submit an inquiry, AI calls them back immediately. Qualify financing needs, confirm vehicle interest, and book test drives.",
  },
  {
    icon: GraduationCap,
    industry: "Education & Coaching",
    title: "Convert Enrollment Inquiries Faster",
    description: "Course inquiries and consultation requests get an instant call. The AI answers program questions, handles objections, and books enrollment calls.",
  },
  {
    icon: Dumbbell,
    industry: "Fitness & Wellness",
    title: "Turn Interest into Memberships",
    description: "Trial requests and class inquiries are called immediately. The AI explains membership options, schedules tours, and books intro sessions.",
  },
]

interface UseCasesProps {
  onGetDemo?: () => void
}

export function UseCases({ onGetDemo }: UseCasesProps) {
  return (
    <section id="use-cases" className="py-16 sm:py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            AI Calling Leads Across Every Industry
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            If your business generates leads, RevenueOS makes sure none of them go cold.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {useCases.map((useCase) => (
            <Card
              key={useCase.industry}
              className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer group"
              onClick={() => onGetDemo?.()}
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-primary">{useCase.industry}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
