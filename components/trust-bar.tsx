"use client"

import { Building2, Home, Stethoscope, BarChart3, Briefcase, Megaphone } from "lucide-react"

const audiences = [
  { icon: Briefcase, label: "Founders" },
  { icon: BarChart3, label: "Sales Leaders" },
  { icon: Megaphone, label: "Performance Marketers" },
  { icon: Home, label: "Real Estate Teams" },
  { icon: Stethoscope, label: "Clinics" },
  { icon: Building2, label: "Service Businesses" },
]

export function TrustBar() {
  return (
    <section className="py-12 sm:py-16 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm sm:text-base font-medium text-muted-foreground mb-8 sm:mb-10">
          Built for teams that can{"'"}t afford to miss a single lead
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {audiences.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2.5 py-4 px-3 rounded-lg bg-secondary/40 border border-border/50"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
