import Image from 'next/image'
import {Briefcase, ChartBarStacked, FileText, Globe2, GraduationCap, MessageSquareText, NotebookTabs, PhoneCall, UserCircle2} from 'lucide-react'
import {MentorshipTabs} from '@/components/MentorshipTabs'
import {FounderSection} from '@/components/FounderSection'
import {ContactSection} from '@/components/ContactSection'
import {client} from '@/sanity/lib/client'
import {homePageQuery} from '@/sanity/lib/queries'

export const revalidate = 60

type HomeData = {
  site?: {
    brandName?: string
    companyName?: string
    tagline?: string
    shortNote?: string
    about?: string[]
    serviceModes?: string[]
    domains?: string[]
    referenceWebsite?: string
    contact?: {
      phone?: string
      email?: string
      linkedin?: string
    }
  }
  founder?: {
    name?: string
    titleLine?: string
    bio?: string[]
    photo?: {asset?: {url?: string}}
  }
  serviceGroups?: {
    _id: string
    audience?: string
    subtitle?: string
    services?: {title?: string; description?: string}[]
  }[]
  plans?: {
    _id: string
    segment: string
    standard: {
      label?: string
      name?: string
      price?: string
      cta?: string
      included?: string[]
      excluded?: string[]
    }
    premium: {
      label?: string
      name?: string
      price?: string
      cta?: string
      included?: string[]
      excluded?: string[]
    }
  }[]
  customPackages?: {
    _id: string
    title?: string
    price?: string
    description?: string
    icon?: string
    cta?: string
  }[]
}

const iconMap: Record<string, React.ComponentType<{className?: string}>> = {
  cv: FileText,
  linkedin: UserCircle2,
  strategy: Briefcase,
  report: ChartBarStacked,
  counseling: MessageSquareText,
  knowledge: NotebookTabs,
  helpline: PhoneCall,
  session: GraduationCap,
  overseas: Globe2,
}

import Link from 'next/link'

export default async function Home() {
  const data = await client.fetch<HomeData>(homePageQuery)

  if (!data?.site) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center text-slate-700">
        <h1 className="text-3xl font-bold text-[#2b43b3]">ClariPath Website</h1>
        <p className="mt-4">Sanity content has not been seeded yet. Run `npm run seed` after adding env values.</p>
      </main>
    )
  }

  const {site, founder, serviceGroups = [], plans = [], customPackages = []} = data

  return (
    <main className="bg-[#fcfdfd] text-slate-800 pt-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="rounded-[3rem] border border-[#e2e8f0] bg-white/90 p-8 shadow-[0_30px_70px_rgba(164,197,217,0.18)] md:p-16">
          <p className="inline-block rounded-full bg-[#a4c5d9]/20 px-4 py-1 text-sm font-bold text-[#4a6b8a] uppercase tracking-wider">{site.companyName}</p>
          <h1 className="mt-8 text-5xl font-black leading-[1.1] text-[#2c3e50] md:text-7xl lg:text-8xl tracking-tighter">
            {site.brandName}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium text-[#5b7a9d] leading-relaxed">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
            {site.shortNote}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {(site.serviceModes ?? []).map((mode) => (
              <span className="rounded-full border border-[#cbd5e1] bg-[#f8fafc] px-5 py-2.5 text-sm font-bold text-[#547599]" key={mode}>
                {mode}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About ClariPath Section */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
           <h2 className="text-3xl md:text-4xl font-black text-[#2c3e50] leading-tight">
             Transforming <span className="text-[#4a6b8a]">Confusion</span> into <span className="text-[#8b9a67]">Confidence</span>
           </h2>
           <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
              {(site.about ?? []).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
           </div>
        </div>
      </section>

      {/* Founder Section (Replaces old About/Founder) */}
      <FounderSection founder={founder} />

      {/* Services Section */}
      <section className="mx-auto max-w-6xl px-6 py-24" id="services">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-black text-[#2c3e50] md:text-5xl">Our Services</h2>
            <p className="mt-4 text-lg text-slate-600">Expert guidance for every step of your career journey.</p>
          </div>
          <div className="hidden md:block h-1 w-24 bg-[#a4c5d9] rounded-full mb-4" />
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {serviceGroups.map((group) => (
            <article className="rounded-[2.5rem] border border-[#e2e8f0] bg-white p-8 shadow-[0_15px_40px_rgba(178,172,136,0.12)] transition-all hover:shadow-[0_20px_50px_rgba(178,172,136,0.18)]" key={group._id}>
              <h3 className="text-2xl font-bold text-[#4a6b8a]">{group.audience}</h3>
              <p className="mt-2 text-base font-semibold text-[#6a8a7a] border-b border-[#e2e8f0] pb-4">{group.subtitle}</p>
              <div className="mt-6 space-y-6">
                {(group.services ?? []).map((service) => (
                  <div key={service.title}>
                    <h4 className="text-lg font-bold text-slate-900">{service.title}</h4>
                    <p className="mt-1 text-base text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mentorship Packages */}
      <section className="bg-slate-50 py-24" id="packages">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-black text-[#2c3e50] md:text-5xl">Mentoria Packages</h2>
          <p className="mt-4 text-lg text-slate-600">Choose a path that fits your goals and current stage.</p>
          <div className="mt-12">
            <MentorshipTabs plans={plans} />
          </div>
        </div>
      </section>

      {/* Specialized Add-ons */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-black text-[#2c3e50] md:text-5xl">Specialized Add-ons</h2>
        <p className="mt-4 text-lg text-slate-600">Complement your journey with targeted career tools.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {customPackages.map((pkg) => {
            const Icon = iconMap[pkg.icon || 'report'] || FileText
            return (
              <article className="rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-[0_10px_35px_rgba(164,197,217,0.12)] transition-transform hover:-translate-y-1" key={pkg._id}>
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-[#a4c5d9]/10 p-4 text-[#4a6b8a]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2c3e50]">{pkg.title}</h3>
                    <p className="text-lg font-semibold text-[#5b7a9d]">{pkg.price}</p>
                    <p className="mt-3 text-base text-slate-600 leading-relaxed">{pkg.description}</p>
                    <button className="mt-6 rounded-xl bg-[#b2ac88] px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-[#9da97e] active:scale-95" type="button">
                      {pkg.cta || 'Book Now'}
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection contact={site.contact} />

      {/* Simple Footer */}
      <footer className="border-t border-[#e2e8f0] bg-white pt-12 pb-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} {site.companyName || 'ClariPath Career Counselling'}. All rights reserved.</p>
            <div className="flex gap-8">
               <Link href="#about" className="hover:text-[#4a6b8a] font-medium transition-colors">About</Link>
               <Link href="#services" className="hover:text-[#4a6b8a] font-medium transition-colors">Services</Link>
               <Link href="#packages" className="hover:text-[#4a6b8a] font-medium transition-colors">Packages</Link>
               <Link href="#contact" className="hover:text-[#4a6b8a] font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
