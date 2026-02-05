"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { DemoModal } from "@/components/demo-modal"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

// ===========================================
// CONFIGURATION - Update these values to connect your backend
// ===========================================

// Your n8n webhook URL that triggers the Vapi call
// Example: "https://your-n8n-instance.com/webhook/your-webhook-id"
const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || ""

// ===========================================

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const { toast } = useToast()

  const openDemoModal = () => {
    setIsDemoModalOpen(true)
  }

  const closeDemoModal = () => {
    setIsDemoModalOpen(false)
  }

  // Handler for feature card clicks
  const handleFeatureClick = (featureName: string) => {
    toast({
      title: `${featureName}`,
      description: "Click 'Get a Demo' to learn more about this feature.",
    })
  }

  // Handler for "Learn More" clicks
  const handleLearnMore = () => {
    toast({
      title: "Coming Soon",
      description: "Detailed documentation is being prepared.",
    })
  }

  // Handler for pricing plan selection
  const handleSelectPlan = (planName: string) => {
    if (planName === "Enterprise") {
      toast({
        title: "Contact Sales",
        description: "Our team will reach out to discuss your enterprise needs.",
      })
    } else {
      toast({
        title: `${planName} Plan Selected`,
        description: "Starting your free trial...",
      })
    }
    // You can connect this to a Stripe checkout or your signup flow
  }

  // Handler for footer link clicks
  const handleFooterLinkClick = (_linkName: string) => {
    // Connect to your routing or external links
  }

  return (
    <main className="min-h-screen bg-background">
      <Header onGetDemo={openDemoModal} />
      <Hero onGetDemo={openDemoModal} />
      <Features onLearnMore={handleFeatureClick} />
      <HowItWorks onGetDemo={openDemoModal} onLearnMore={handleLearnMore} />
      <Pricing onSelectPlan={handleSelectPlan} />
      <FAQ />
      <CTASection onGetDemo={openDemoModal} />
      <Footer onLinkClick={handleFooterLinkClick} />
      
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={closeDemoModal}
        webhookUrl={N8N_WEBHOOK_URL}
      />
      
      <Toaster />
    </main>
  )
}
