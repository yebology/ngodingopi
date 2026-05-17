import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/dictionaries'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Portfolio } from '@/components/sections/portfolio'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import type { Locale } from '@/lib/constants'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  return (
    <>
      <Navbar dict={dict} lang={lang as Locale} />
      <main>
        <Hero dict={dict} lang={lang as Locale} />
        <Services dict={dict} />
        <Portfolio dict={dict} />
        <About dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} lang={lang as Locale} />
    </>
  )
}
