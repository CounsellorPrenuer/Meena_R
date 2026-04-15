import type {Metadata} from 'next'
import {Nunito_Sans, Sora} from 'next/font/google'
import {Navbar} from '@/components/Navbar'
import {client} from '@/sanity/lib/client'
import {groq} from 'next-sanity'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
})

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'ClariPath Career Counselling',
  description: 'Discover Yourself. Choose Your Path. Create Your Future.',
}

async function getSiteSettings() {
  return client.fetch(groq`*[_type == "siteSettings"][0]{ "logo": logo.asset->url }`)
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await getSiteSettings()
  return (
    <html lang="en" className={`${sora.variable} ${nunito.variable} scroll-smooth`}>
      <body className="antialiased">
        <Navbar logo={settings?.logo} />
        {children}
      </body>
    </html>
  )
}