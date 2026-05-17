'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Dictionary } from '@/lib/dictionaries'

interface PortfolioProps {
  dict: Dictionary
}

export function Portfolio({ dict }: PortfolioProps) {
  return (
    <section id="portfolio" className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.portfolio.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.portfolio.subtitle}
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {dict.portfolio.items.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card px-12 py-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              {client.logo && (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={160}
                  className="h-40 w-40 object-contain"
                />
              )}
              <p className="text-sm font-medium">{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
