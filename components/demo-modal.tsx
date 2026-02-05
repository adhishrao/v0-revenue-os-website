"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, Loader2, CheckCircle } from "lucide-react"

const countryCodes = [
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+52", country: "MX", flag: "🇲🇽" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+46", country: "SE", flag: "🇸🇪" },
  { code: "+41", country: "CH", flag: "🇨🇭" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+27", country: "ZA", flag: "🇿🇦" },
  { code: "+64", country: "NZ", flag: "🇳🇿" },
]

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
  webhookUrl?: string
}

export function DemoModal({ isOpen, onClose, webhookUrl }: DemoModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [countryCode, setCountryCode] = useState("+1")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError("Please enter your name")
      return
    }

    if (!phone.trim()) {
      setError("Please enter your phone number")
      return
    }

    setIsLoading(true)

    const fullPhoneNumber = `${countryCode}${phone.replace(/\D/g, "")}`
    
    const payload = {
      name: name.trim(),
      phone: fullPhoneNumber,
      countryCode,
      timestamp: new Date().toISOString(),
      source: "demo_request",
    }

    try {
      // If webhook URL is provided, send the data
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          throw new Error("Failed to submit request")
        }
      } else {
        // Log the payload for debugging when no webhook is configured
        console.log("[v0] Demo request payload (no webhook configured):", payload)
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      setIsSuccess(true)
      setTimeout(() => {
        onClose()
        // Reset form after closing
        setTimeout(() => {
          setName("")
          setPhone("")
          setCountryCode("+1")
          setIsSuccess(false)
        }, 300)
      }, 2000)
    } catch (err) {
      console.error("[v0] Error submitting demo request:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-foreground text-2xl">Get a Demo Call</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Enter your details and our AI voice agent will call you within seconds to demonstrate how Revenue OS works.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Phone Number
                </Label>
                <div className="flex gap-2">
                  <Select value={countryCode} onValueChange={setCountryCode} disabled={isLoading}>
                    <SelectTrigger className="w-28 bg-secondary border-border text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {countryCodes.map((country) => (
                        <SelectItem
                          key={country.code}
                          value={country.code}
                          className="text-foreground hover:bg-secondary"
                        >
                          <span className="flex items-center gap-2">
                            <span>{country.flag}</span>
                            <span>{country.code}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Me Now
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to receive a demo call from our AI voice agent.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Call Incoming!</h3>
            <p className="text-muted-foreground">
              Our AI voice agent will call you at {countryCode} {phone} within seconds.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
