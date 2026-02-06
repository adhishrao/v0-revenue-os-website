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
  { code: "+1", country: "US/CA", flag: "US" },
  { code: "+44", country: "UK", flag: "UK" },
  { code: "+91", country: "IN", flag: "IN" },
  { code: "+61", country: "AU", flag: "AU" },
  { code: "+49", country: "DE", flag: "DE" },
  { code: "+33", country: "FR", flag: "FR" },
  { code: "+81", country: "JP", flag: "JP" },
  { code: "+86", country: "CN", flag: "CN" },
  { code: "+55", country: "BR", flag: "BR" },
  { code: "+52", country: "MX", flag: "MX" },
  { code: "+34", country: "ES", flag: "ES" },
  { code: "+39", country: "IT", flag: "IT" },
  { code: "+31", country: "NL", flag: "NL" },
  { code: "+46", country: "SE", flag: "SE" },
  { code: "+41", country: "CH", flag: "CH" },
  { code: "+65", country: "SG", flag: "SG" },
  { code: "+971", country: "UAE", flag: "AE" },
  { code: "+966", country: "SA", flag: "SA" },
  { code: "+27", country: "ZA", flag: "ZA" },
  { code: "+64", country: "NZ", flag: "NZ" },
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
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      setIsSuccess(true)
      setTimeout(() => {
        onClose()
        setTimeout(() => {
          setName("")
          setPhone("")
          setCountryCode("+1")
          setIsSuccess(false)
        }, 300)
      }, 2000)
    } catch (_err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md bg-card border-border mx-auto">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-foreground text-xl sm:text-2xl">Get a Demo Call</DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm sm:text-base">
                Enter your details and our AI voice agent will call you within seconds to demonstrate how Revenue OS works.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 mt-3 sm:mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground text-sm">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground h-11 sm:h-10"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground text-sm">
                  Phone Number
                </Label>
                <div className="flex gap-2">
                  <Select value={countryCode} onValueChange={setCountryCode} disabled={isLoading}>
                    <SelectTrigger className="w-24 sm:w-28 bg-secondary border-border text-foreground h-11 sm:h-10 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border max-h-60">
                      {countryCodes.map((country) => (
                        <SelectItem
                          key={country.code}
                          value={country.code}
                          className="text-foreground hover:bg-secondary"
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="text-xs text-muted-foreground">{country.flag}</span>
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
                    className="flex-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground h-11 sm:h-10"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 sm:h-10"
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
          <div className="py-6 sm:py-8 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Call Incoming!</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Our AI voice agent will call you at {countryCode} {phone} within seconds.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
