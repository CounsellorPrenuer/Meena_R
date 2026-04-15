"use client"

import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar({logo}: {logo?: string}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    {name: 'About', href: '#about'},
    {name: 'Services', href: '#services'},
    {name: 'Packages', href: '#packages'},
    {name: 'Contact', href: '#contact'},
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/80 py-3 shadow-sm backdrop-blur-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link className="flex items-center gap-2" href="/">
          {logo ? (
            <Image alt="ClariPath Logo" className="h-10 w-auto object-contain" height={40} src={logo} width={150} />
          ) : (
            <span className="text-2xl font-black tracking-tight text-[#2c3e50]">
              Clari<span className="text-[#4a6b8a]">Path</span>
            </span>
          )}
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              className="text-sm font-bold text-slate-600 transition-colors hover:text-[#4a6b8a]"
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          className="rounded-full bg-gradient-to-r from-[#a4c5d9] to-[#8eb6cf] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95"
          href="#contact"
        >
          Book Consultation
        </a>
      </div>
    </nav>
  )
}
