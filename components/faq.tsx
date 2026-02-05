"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly does the AI call new leads?",
    answer: "Our AI voice agent typically calls within 5-10 seconds of receiving a new lead through your webhook. This instant response dramatically increases your chances of conversion.",
  },
  {
    question: "Can I customize what the AI says?",
    answer: "Yes! You can fully customize the AI's script, tone, and conversation flow. We work with you to train the AI on your specific products, services, and qualification criteria.",
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with n8n, Zapier, Make, and any system that supports webhooks. We also have direct integrations with popular CRMs like HubSpot, Salesforce, and Pipedrive.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees. You only pay for your monthly subscription. Our team will help you get set up and integrated at no additional cost.",
  },
  {
    question: "What happens if a lead doesn't answer?",
    answer: "You can configure automatic follow-up attempts at intervals you specify. The AI can also leave voicemails and send follow-up SMS messages.",
  },
  {
    question: "Can I listen to call recordings?",
    answer: "Yes, all calls are recorded and transcribed. You can access them through your dashboard or receive them automatically via webhook to your CRM.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Revenue OS.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-foreground hover:text-primary text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
