import Image from 'next/image'

type FounderProps = {
  founder?: {
    name?: string
    titleLine?: string
    bio?: string[]
    photo?: {asset?: {url?: string}}
  }
}

export function FounderSection({founder}: FounderProps) {
  if (!founder) return null

  return (
    <section className="bg-gradient-to-b from-white to-[#f0f4f8] py-24" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#2c3e50] md:text-5xl">Meet the Founder</h2>
          <p className="mt-4 text-lg font-medium text-[#5b7a9d]">
            Guidance rooted in experience, driven by purpose.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          {/* Bio Card */}
          <article className="rounded-[3rem] border border-[#e2e8f0] bg-white p-8 shadow-[0_20px_60px_rgba(164,197,217,0.15)] md:p-12">
            <h3 className="font-serif text-3xl font-bold text-[#2c3e50]">{founder.name}</h3>
            <p className="mt-1 text-base font-semibold text-[#4a6b8a]">{founder.titleLine}</p>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-700">
              {founder.bio?.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Highlight Quote */}
            <div className="mt-10 border-l-4 border-[#a4c5d9] bg-[#f8fafc] p-6 italic text-[#4a6b8a]">
              "I am deeply committed to helping individuals choose a path that truly aligns with their potential—so they can build a future defined not just by success, but also by happiness and fulfilment."
            </div>
          </article>

          {/* Photo */}
          <div className="relative">
            <div className="overflow-hidden rounded-[3rem] shadow-[0_20px_60px_rgba(164,197,217,0.2)]">
              <Image
                alt={founder.name || 'Founder'}
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
                height={800}
                src="/meena-photo.jpg"
                width={600}
              />
            </div>
            {/* Design Element */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-[#b2ac88]/20 -z-10" />
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#a4c5d9]/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
