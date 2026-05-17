'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS } from '@/lib/constants'
import type { Dictionary } from '@/lib/dictionaries'

interface ContactProps {
  dict: Dictionary
}

export function Contact({ dict }: ContactProps) {
  const waLink = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(dict.contact.waMessage)}`

  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="gap-2 text-base"
            render={<Link href={waLink} target="_blank" rel="noopener noreferrer" />}
          >
            <MessageCircle className="h-5 w-5" />
            {dict.contact.cta}
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            {dict.contact.response}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
