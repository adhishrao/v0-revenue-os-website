"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Features } from "@/components/features"
import { UseCases } from "@/components/use-cases"
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
const N8N_WEBHOOK_URL = "https://n8n.revenueos.services/webhook/vapi-call"

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

  // Handler for footer link clicks
  const handleFooterLinkClick = (_linkName: string) => {
    // Connect to your routing or external links
  }

  return (
    <main className="min-h-screen bg-background">
      <Header onGetDemo={openDemoModal} />
      <Hero onGetDemo={openDemoModal} />
      <TrustBar />
      <Features onLearnMore={handleFeatureClick} />
      <UseCases onGetDemo={openDemoModal} />
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
