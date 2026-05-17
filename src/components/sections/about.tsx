'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Dictionary } from '@/lib/dictionaries'

interface AboutProps {
  dict: Dictionary
}

export function About({ dict }: AboutProps) {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.about.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.about.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-center"
        >
          <p className="text-muted-foreground">{dict.about.description}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 gap-2"
            render={
              <Link
                href={dict.about.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <ExternalLink className="h-4 w-4" />
            {dict.about.linkedin}
          </Button>
        </motion.div>

        {/* Values */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {dict.about.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
