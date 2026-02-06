"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
]

interface HeaderProps {
  onGetDemo?: () => void
}

export function Header({ onGetDemo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Log in
            </Button>
            <Button onClick={onGetDemo} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-foreground p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-sm font-medium py-3 px-3 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
                <Button variant="ghost" className="justify-start text-muted-foreground">
                  Log in
                </Button>
                <Button onClick={() => { onGetDemo?.(); setMobileMenuOpen(false); }} className="bg-primary text-primary-foreground">
                  Get a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
