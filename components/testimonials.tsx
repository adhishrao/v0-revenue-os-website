"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

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
            i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Trusted by Teams That Refuse to Lose Leads
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            A proven system built for speed. Here{"'"}s what our clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-5 sm:p-6 flex flex-col gap-4">
                <StarRating rating={t.rating} />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {`"${t.text}"`}
                </p>
                <div className="mt-auto pt-3 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
