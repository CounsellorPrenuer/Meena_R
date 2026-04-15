"use client"

import {useMemo, useState} from 'react'
import {Check, X} from 'lucide-react'

type PlanDetails = {
  label?: string
  name?: string
  price?: string
  cta?: string
  included?: string[]
  excluded?: string[]
}

type MentorshipPlan = {
  _id: string
  segment: string
  standard: PlanDetails
  premium: PlanDetails
}

function PlanCard({tone, plan}: {tone: 'standard' | 'premium'; plan: PlanDetails}) {
  return (
    <article className="relative rounded-3xl border border-[#e2e8f0] bg-white/95 p-7 shadow-[0_12px_45px_rgba(164,197,217,0.12)]">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#5b7a9d]">{plan.label}</p>
      <h3 className="mt-4 text-3xl font-bold text-[#2c3e50]">{plan.name}</h3>
      <p className="mt-1 text-4xl font-extrabold text-[#4a6b8a]">{plan.price}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-700">
        {(plan.included ?? []).map((feature) => (
          <li className="flex items-start gap-3" key={feature}>
            <Check className="mt-0.5 h-4 w-4 text-[#8b9a67]" />
            <span>{feature}</span>
          </li>
        ))}
        {(plan.excluded ?? []).map((feature) => (
          <li className="flex items-start gap-3 opacity-70" key={feature}>
            <X className="mt-0.5 h-4 w-4 text-[#aabac8]" />
            <span className="line-through">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-8 rounded-full px-7 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all shadow-md active:scale-95 ${
          tone === 'premium' ? 'bg-[#a4c5d9] hover:bg-[#8eb6cf]' : 'bg-[#b2ac88] hover:bg-[#9da97e]'
        }`}
        type="button"
      >
        {plan.cta || 'Buy now'}
      </button>
    </article>
  )
}

export function MentorshipTabs({plans}: {plans: MentorshipPlan[]}) {
  const sorted = useMemo(() => plans.filter((plan) => plan.segment), [plans])
  const [activeSegment, setActiveSegment] = useState(sorted[0]?.segment)

  const selectedPlan = sorted.find((plan) => plan.segment === activeSegment) ?? sorted[0]

  if (!selectedPlan) {
    return null
  }

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[#f8fafc] px-4 py-10 md:px-10 border border-[#e2e8f0]">
      <div className="absolute -left-16 top-28 h-44 w-44 rounded-full bg-[#a4c5d9]/10" />
      <div className="absolute -right-6 top-10 h-20 w-20 rounded-full bg-[#b2ac88]/10" />
      <div className="absolute bottom-3 right-16 h-6 v-6 rounded-full bg-[#a4c5d9]/20" />

      <div className="relative z-10 flex flex-wrap gap-3">
        {sorted.map((plan) => {
          const active = plan.segment === selectedPlan.segment
          return (
            <button
              className={`rounded-xl border px-5 py-3 text-sm font-semibold md:min-w-48 transition-all ${
                active ? 'border-[#4a6b8a] bg-[#4a6b8a] text-white shadow-lg' : 'border-[#cbd5e1] bg-white text-[#547599] hover:border-[#a4c5d9]'
              }`}
              key={plan._id}
              onClick={() => setActiveSegment(plan.segment)}
              type="button"
            >
              {plan.segment}
            </button>
          )
        })}
      </div>

      <div className="relative z-10 mt-8 grid gap-6 lg:grid-cols-2">
        <PlanCard tone="standard" plan={selectedPlan.standard} />
        <PlanCard tone="premium" plan={selectedPlan.premium} />
      </div>
    </section>
  )
}