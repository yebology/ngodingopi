'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { NAV_LINKS, LOCALES, type Locale } from '@/lib/constants'
import type { Dictionary } from '@/lib/dictionaries'

interface NavbarProps {
  dict: Dictionary
  lang: Locale
}

export function Navbar({ dict, lang }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function getLocalizedPath(targetLocale: string) {
    const segments = pathname.split('/')
    segments[1] = targetLocale
    return segments.join('/')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href={`/${lang}`} className="text-xl font-bold tracking-tight">
          ngoding
          <span className="text-primary">opi</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={`/${lang}/${link.href}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {dict.nav[link.key as keyof typeof dict.nav]}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LOCALES.map((locale) => (
                <DropdownMenuItem key={locale}>
                  <Link
                    href={getLocalizedPath(locale)}
                    className={`block w-full ${locale === lang ? 'font-semibold' : ''}`}
                  >
                    {locale === 'en' ? '🇺🇸 English' : '🇮🇩 Indonesia'}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* CTA */}
          <Button size="sm" render={<Link href={`/${lang}/#contact`} />}>
            {dict.nav.getInTouch}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 pt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={`/${lang}/${link.href}`}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {dict.nav[link.key as keyof typeof dict.nav]}
                  </Link>
                ))}

                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div className="flex gap-2">
                      {LOCALES.map((locale) => (
                        <Link
                          key={locale}
                          href={getLocalizedPath(locale)}
                          onClick={() => setOpen(false)}
                          className={`text-sm ${locale === lang ? 'font-bold text-foreground' : 'text-muted-foreground'}`}
                        >
                          {locale.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="mt-2"
                    render={
                      <Link
                        href={`/${lang}/#contact`}
                        onClick={() => setOpen(false)}
                      />
                    }
                  >
                    {dict.nav.getInTouch}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}
