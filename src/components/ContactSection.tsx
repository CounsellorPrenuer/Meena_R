'use client'

import { Mail, Phone, MapPin, Link as LinkedinIcon, Share2 as InstagramIcon, Send, User, MessageSquare } from 'lucide-react'
import Image from 'next/image'

type ContactSectionProps = {
  contact?: {
    phone?: string
    email?: string
    linkedin?: string
  }
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="bg-[#f8fafc] py-24" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          
          {/* Left Column: Form */}
          <div className="order-2 lg:order-1">
            <div className="rounded-[3rem] border border-[#e2e8f0] bg-white p-8 shadow-[0_30px_70px_rgba(164,197,217,0.12)] md:p-12">
              <h3 className="text-3xl font-black text-[#2c3e50] mb-8">Send Us a Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#5b7a9d] uppercase tracking-wider ml-1 px-1 flex items-center gap-2">
                       <User className="w-4 h-4" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-[#e2e8f0] bg-[#fcfdfd] px-6 py-4 text-slate-700 outline-none transition-all focus:border-[#4a6b8a] focus:ring-4 focus:ring-[#4a6b8a]/5 placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#5b7a9d] uppercase tracking-wider ml-1 px-1 flex items-center gap-2">
                       <Mail className="w-4 h-4" /> Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-[#e2e8f0] bg-[#fcfdfd] px-6 py-4 text-slate-700 outline-none transition-all focus:border-[#4a6b8a] focus:ring-4 focus:ring-[#4a6b8a]/5 placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#5b7a9d] uppercase tracking-wider ml-1 px-1 flex items-center gap-2">
                     <Phone className="w-4 h-4" /> Contact Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full rounded-2xl border border-[#e2e8f0] bg-[#fcfdfd] px-6 py-4 text-slate-700 outline-none transition-all focus:border-[#4a6b8a] focus:ring-4 focus:ring-[#4a6b8a]/5 placeholder:text-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#5b7a9d] uppercase tracking-wider ml-1 px-1 flex items-center gap-2">
                     <MessageSquare className="w-4 h-4" /> Your Message
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className="w-full rounded-[2rem] border border-[#e2e8f0] bg-[#fcfdfd] px-6 py-4 text-slate-700 outline-none transition-all focus:border-[#4a6b8a] focus:ring-4 focus:ring-[#4a6b8a]/5 placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#b2ac88] px-8 py-5 text-lg font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:bg-[#9ba579] hover:shadow-2xl active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Send Message <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:pt-12 order-1 lg:order-2 space-y-12">
            <div>
              <h2 className="text-4xl font-black text-[#2c3e50] md:text-5xl lg:text-6xl leading-tight">
                Ready to build <span className="text-[#4a6b8a]">your future?</span>
              </h2>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-lg">
                Join ClariPath and discover the clarity you need to succeed. We're here to guide you every step of the way.
              </p>
            </div>

            <div className="space-y-8">
              {contact?.phone && (
                <div className="flex items-start gap-6 group">
                  <div className="rounded-2xl bg-white p-4 text-[#4a6b8a] shadow-lg transition-transform group-hover:scale-110">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#5b7a9d] uppercase tracking-[0.2em] mb-1">Call Us</p>
                    <p className="text-xl font-bold text-[#2c3e50]">{contact.phone}</p>
                  </div>
                </div>
              )}

              {contact?.email && (
                <div className="flex items-start gap-6 group">
                  <div className="rounded-2xl bg-white p-4 text-[#4a6b8a] shadow-lg transition-transform group-hover:scale-110">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#5b7a9d] uppercase tracking-[0.2em] mb-1">Email Us</p>
                    <p className="text-xl font-bold text-[#2c3e50]">{contact.email}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-6 group">
                <div className="rounded-2xl bg-white p-4 text-[#4a6b8a] shadow-lg transition-transform group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#5b7a9d] uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-xl font-bold text-[#2c3e50]">Available Globally (Online)</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#e2e8f0]">
                <p className="text-sm font-bold text-[#5b7a9d] uppercase tracking-[0.2em] mb-6">Follow Our Journey</p>
                <div className="flex gap-4">
                  {contact?.linkedin && (
                    <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl bg-white p-4 text-[#4a6b8a] shadow-md transition-all hover:-translate-y-1 hover:bg-[#4a6b8a] hover:text-white">
                      <LinkedinIcon className="w-6 h-6" />
                    </a>
                  )}
                  <a href="#" className="rounded-2xl bg-white p-4 text-[#e1306c] shadow-md transition-all hover:-translate-y-1 hover:bg-[#e1306c] hover:text-white">
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                </div>
            </div>

            {/* Quote Card (Mini) */}
            <div className="rounded-3xl bg-gradient-to-br from-[#4a6b8a] to-[#2c3e50] p-8 text-white shadow-2xl relative overflow-hidden group">
               <div className="relative z-10">
                 <p className="text-lg italic leading-relaxed opacity-90">
                   "Helping you choose a path that truly aligns with your potential."
                 </p>
                 <div className="mt-6 flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full border-2 border-white/20 overflow-hidden">
                     <Image src="/meena-photo.jpg" alt="Meena" width={40} height={40} className="object-cover" />
                   </div>
                   <div>
                     <p className="text-sm font-bold">Meena R</p>
                     <p className="text-xs opacity-60">Founder, ClariPath</p>
                   </div>
                 </div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full transition-transform group-hover:scale-150" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
