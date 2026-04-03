import { BRAND } from '../../const/branding'
import { usePointerParallax } from '../../hooks/usePointerParallax'

/** Ruler ticks — suggests measurement / FM operations (unique to this product). */
function LeftRulerTicks() {
  const widths = [14, 22, 18, 28, 16, 24, 20, 32, 12, 26]
  return (
    <div className="flex flex-col items-end gap-5 pr-0.5" aria-hidden>
      {widths.map((w, i) => (
        <span
          key={i}
          className="h-px rounded-full bg-brand-navy/20 transition-colors home-rail-scan"
          style={{ width: `${w}px`, animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </div>
  )
}

/** Abstract “capacity / stack” bars — CRE portfolio metaphor. */
function RightMetricBars() {
  return (
    <svg className="text-brand-gold drop-shadow-[0_0_12px_rgba(6,182,212,0.2)]" width="36" height="132" viewBox="0 0 36 132" aria-hidden>
      <rect x="2" y="72" width="5" height="58" rx="1.5" fill="currentColor" className="opacity-[0.35]" />
      <rect x="10" y="48" width="5" height="82" rx="1.5" fill="currentColor" className="opacity-[0.45]" />
      <rect x="18" y="88" width="5" height="42" rx="1.5" fill="currentColor" className="opacity-[0.3]" />
      <rect x="26" y="32" width="5" height="98" rx="1.5" fill="currentColor" className="opacity-[0.5]" />
    </svg>
  )
}

export function HomeViewportRails() {
  const { x, y } = usePointerParallax(8)

  return (
    <>
      {/* Slim frame — single refined accent */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 top-16 z-[1] hidden w-px md:block"
        style={{
          background: 'linear-gradient(180deg, rgba(6,182,212,0.9) 0%, rgba(10,37,64,0.35) 38%, rgba(255,176,32,0.55) 100%)'
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed bottom-0 right-0 top-16 z-[1] hidden w-px md:block"
        style={{
          background: 'linear-gradient(180deg, rgba(255,176,32,0.75) 0%, rgba(6,182,212,0.4) 52%, rgba(52,211,153,0.45) 100%)'
        }}
        aria-hidden
      />

      {/* Wide gutters — blueprint + metrics (≥ 1340px) */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 top-16 z-0 hidden min-[1340px]:block"
        style={{ width: 'max(52px, calc((100vw - 1360px) / 2))' }}
        aria-hidden
      >
        <div
          className="home-rail-grid-bg absolute inset-0 opacity-70"
          style={{
            maskImage: 'linear-gradient(90deg, black 0%, black 55%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, black 0%, black 55%, transparent 100%)'
          }}
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-cyan-500/[0.07] via-transparent to-transparent"
          style={{ transform: `translate3d(${x * 0.15}px, ${y * 0.08}px, 0)` }}
        />
        <div className="relative flex h-full flex-col items-end justify-between pb-36 pt-10 pr-3">
          <div className="flex flex-col items-end gap-4">
            <img
              src={BRAND.logoMark}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain opacity-[0.42] grayscale contrast-125"
              decoding="async"
            />
            <LeftRulerTicks />
          </div>
          <p
            className="max-h-[min(200px,28vh)] text-[9px] font-bold uppercase leading-loose tracking-[0.55em] text-brand-navy/35"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Facilities · Real estate · Learning
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none fixed bottom-0 right-0 top-16 z-0 hidden min-[1340px]:block"
        style={{ width: 'max(52px, calc((100vw - 1360px) / 2))' }}
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -32deg,
              transparent,
              transparent 7px,
              rgba(10, 37, 64, 0.045) 7px,
              rgba(10, 37, 64, 0.045) 8px
            )`,
            maskImage: 'linear-gradient(270deg, black 0%, black 55%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(270deg, black 0%, black 55%, transparent 100%)'
          }}
        />
        <div
          className="absolute inset-0 bg-linear-to-l from-amber-400/[0.06] via-transparent to-transparent"
          style={{ transform: `translate3d(${-x * 0.12}px, ${-y * 0.06}px, 0)` }}
        />
        <div className="relative flex h-full flex-col items-start justify-between pb-36 pt-10 pl-3">
          <RightMetricBars />
          <p
            className="text-[9px] font-bold uppercase leading-loose tracking-[0.5em] text-brand-navy/35"
            style={{ writingMode: 'vertical-rl' }}
          >
            Video · Portfolio · Scale
          </p>
          <div className="flex flex-col gap-2 border-l border-brand-gold/25 pl-2">
            <span className="text-[8px] font-semibold tabular-nums text-brand-gold-dark/50">01</span>
            <span className="text-[8px] font-semibold tabular-nums text-brand-navy/30">02</span>
            <span className="text-[8px] font-semibold tabular-nums text-brand-mint/50">03</span>
          </div>
        </div>
      </div>
    </>
  )
}
