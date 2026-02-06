"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How fast does the AI voice agent call new leads?",
    answer: "RevenueOS triggers a Vapi AI voice call within 5-10 seconds of receiving a new lead through your webhook. Speed to lead is the most critical factor in conversion rates -- studies show that responding within 5 minutes makes you 100x more likely to connect.",
  },
  {
    question: "What is the tech stack behind RevenueOS?",
    answer: "RevenueOS uses n8n for webhook-based workflow automation and Vapi for AI voice calls. When a lead enters your system, an n8n workflow processes the data and fires an HTTP request to Vapi, which initiates a natural AI-powered phone call. The entire pipeline is configurable and transparent.",
  },
  {
    question: "Can I customize what the AI voice agent says?",
    answer: "Yes. You define the AI's script, tone, qualification criteria, and conversation flow. The voice agent is trained on your specific products, services, and objection-handling patterns. You control the experience end to end.",
  },
  {
    question: "What integrations does RevenueOS support?",
    answer: "RevenueOS connects to any system that supports webhooks. Out of the box, it integrates with n8n, Zapier, Make, HubSpot, Salesforce, Pipedrive, Google Sheets, and Slack. Custom integrations are available for enterprise clients.",
  },
  {
    question: "What happens if a lead doesn't pick up the call?",
    answer: "You can configure automatic retry attempts at custom intervals. The AI can also leave a voicemail and trigger follow-up SMS or email sequences through your n8n workflow. No lead falls through the cracks.",
  },
  {
    question: "How does AI lead qualification work?",
    answer: "The AI asks pre-defined qualifying questions during the call -- budget, timeline, decision-making authority, and any custom criteria you set. Qualified leads are routed to your sales team or booked directly onto your calendar. Unqualified leads are tagged and stored for nurture sequences.",
  },
  {
    question: "Is my lead data secure?",
    answer: "All calls are encrypted end to end. Lead data is processed in secure, SOC 2-aligned infrastructure. We do not sell or share your data. Call recordings and transcripts are accessible only through your dashboard.",
  },
  {
    question: "Can I try RevenueOS before committing?",
    answer: "Yes. Click the demo button on this page, enter your name and phone number, and our AI voice agent will call you within seconds. You'll experience exactly what your leads will experience. No credit card required.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything you need to know about AI voice agents and instant lead response.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-foreground hover:text-primary text-left text-sm sm:text-base py-4 sm:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
