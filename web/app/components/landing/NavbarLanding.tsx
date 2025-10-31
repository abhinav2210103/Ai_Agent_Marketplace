'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { Button } from './Button'
import DifyLogo from '@/app/components/base/logo/dify-logo'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type NavItem = {
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Use Cases', hasDropdown: true },
  { label: 'Solutions', hasDropdown: true, isActive: true },
  { label: 'Customers' },
  { label: 'Pricing' },
  { label: 'Resources', hasDropdown: true },
]

const NavbarLanding = () => {
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* ✅ LOGO SECTION (Replaced ailifebot text + placeholder) */}
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => router.push('/')}
          >
            <DifyLogo size="large" /> {/* or 'medium' depending on your preference */}
          </div>

          {/* ✅ DESKTOP NAV LINKS */}
          <div className="hidden items-center gap-4 md:flex">
            {navItems.map(item => (
              <button
                key={item.label}
                className={cn(
                  'relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-gray-900',
                  item.isActive
                    ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600'
                    : 'text-gray-600',
                )}
                onClick={() => {
                  // Add routing if needed: router.push("/use-cases")
                }}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>
            ))}
          </div>

          {/* ✅ DESKTOP CTA BUTTONS */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              variant="secondary"
              size="default"
              onClick={() => router.push('/apps')}
            >
              Agent Builder
            </Button>
            <Button
              variant="default"
              size="default"
              onClick={() => router.push('/contactus')}
            >
              Talk to us <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          {/* ✅ MOBILE MENU TOGGLE */}
          <button
            className="md:hidden"
            onClick={() => setIsMobile(!isMobile)}
            aria-label="Toggle menu"
          >
            {isMobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ✅ MOBILE MENU DROPDOWN */}
        {isMobile && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-2 px-4">
              {navItems.map(item => (
                <button
                  key={item.label}
                  className={cn(
                    'flex justify-between px-3 py-2 text-sm font-medium hover:bg-gray-100',
                    item.isActive ? 'text-blue-600' : 'text-gray-800',
                  )}
                  onClick={() => {
                    setIsMobile(false)
                    // router.push(...)
                  }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>
              ))}

              <div className="mt-4 flex flex-col gap-2">
                <Button
                  variant="secondary"
                  size="default"
                  className="w-full"
                  onClick={() => {
                    setIsMobile(false)
                    router.push('/apps')
                  }}
                >
                  Agent Builder
                </Button>
                <Button
                  variant="default"
                  size="default"
                  className="w-full"
                  onClick={() => {
                    setIsMobile(false)
                    router.push('/contactus')
                  }}
                >
                  Talk to us <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavbarLanding
