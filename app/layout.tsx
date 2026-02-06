import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' })

export const metadata: Metadata = {
  title: 'RevenueOS | AI Voice Agent for Instant Lead Response | Speed to Lead',
  description: 'RevenueOS is the AI voice agent that calls your leads within seconds. Automate lead qualification, book meetings, and close more deals with webhook-based workflows powered by Vapi and n8n.',
  keywords: 'AI voice agent, instant lead response, speed to lead, AI calling leads, n8n automation, webhook-based workflows, Vapi AI voice calls, AI lead qualification',
  openGraph: {
    title: 'RevenueOS | AI Voice Agent for Instant Lead Response',
    description: 'Your leads get a call within seconds. Not hours. Not days. Seconds. AI-powered voice agents that qualify, book, and convert on autopilot.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
