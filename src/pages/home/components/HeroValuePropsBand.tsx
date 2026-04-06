import type { CSSProperties } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FiClock, FiTarget, FiZap } from 'react-icons/fi'
import type { HeroValueProp } from '../../../const/homePageData'

const iconFor = {
  industry: FiTarget,
  pace: FiClock,
  outcomes: FiZap
} as const

type Props = {
  items: readonly HeroValueProp[]
}

function reducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export function HeroValuePropsBand({ items }: Props) {
  const [active, setActive] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [glow, setGlow] = useState({ x: 50, y: 50 })
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const safe = items.length > 0 ? active % items.length : 0
  const current = items[safe]

  useEffect(() => {
    if (items.length <= 1) return
    const t = window.setInterval(() => setActive((i) => (i + 1) % items.length), 5200)
    return () => window.clearInterval(t)
  }, [items.length])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (reducedMotion()) return
    const el = wrapRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    setGlow({ x, y })
    const cx = e.clientX - r.left - r.width / 2
    const cy = e.clientY - r.top - r.height / 2
    setParallax({ x: cx * 0.02, y: cy * 0.02 })
  }, [])

  const onPointerLeave = useCallback(() => {
    setGlow({ x: 50, y: 42 })
    setParallax({ x: 0, y: 0 })
  }, [])

  return (
    <div
      ref={wrapRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:rounded-3xl md:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300"
        style={
          {
            background: `radial-gradient(520px circle at ${glow.x}% ${glow.y}%, rgba(37, 99, 235, 0.06), transparent 55%),
              radial-gradient(380px circle at ${100 - glow.x * 0.5}% ${100 - glow.y * 0.45}%, rgba(30, 58, 138, 0.05), transparent 50%)`
          } as CSSProperties
        }
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
        aria-hidden
      >
        <div className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-brand-gold-light blur-3xl" />
      </div>

      <div className="relative z-[1]">
        <div className="mb-5 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Why professionals choose FMNXT</p>
            <p className="mt-1 text-lg font-bold text-brand-navy md:text-xl">Three ways we fit serious FM & CRE schedules</p>
          </div>
          <div className="flex gap-1.5 md:pb-0.5" role="tablist" aria-label="Highlight selection">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === safe}
                aria-label={`Show benefit ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === safe ? 'w-8 bg-brand-navy' : 'w-2 bg-slate-200 hover:bg-brand-gold/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {items.map((item, i) => {
            const Icon = iconFor[item.id as keyof typeof iconFor] ?? FiTarget
            const on = i === safe
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(i)}
                className={`relative flex flex-col rounded-xl border p-4 text-left transition-all duration-300 md:p-5 ${
                  on
                    ? 'border-brand-navy/20 bg-slate-50 shadow-sm ring-1 ring-brand-navy/15'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <span
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg transition-colors duration-300 ${
                    on ? 'bg-brand-navy text-white' : 'bg-slate-100 text-brand-navy'
                  }`}
                >
                  <Icon aria-hidden />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">0{i + 1}</span>
                <span className="mt-1 font-bold leading-snug text-brand-navy md:text-[1.05rem]">{item.title}</span>
                <span className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.subtitle}</span>
                {on ? (
                  <span className="mt-3 block h-0.5 w-full max-w-[4rem] rounded-full bg-brand-gold" aria-hidden />
                ) : null}
              </button>
            )
          })}
        </div>

        <div
          className="relative mt-5 rounded-xl border border-slate-200 bg-slate-50/80 p-4 md:mt-6 md:p-5"
          aria-live="polite"
        >
          <p className="text-sm leading-relaxed text-slate-700 md:text-[0.95rem]">{current?.detail}</p>
        </div>
      </div>
    </div>
  )
}
