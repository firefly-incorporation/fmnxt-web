import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../../../hooks/useInView'

type Props = {
  children: ReactNode
  className?: string
  /** Stagger sibling reveals (ms). */
  delayMs?: number
}

export function RevealOnScroll({ children, className = '', delayMs = 0 }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.08 })

  const style = {
    '--reveal-delay': `${delayMs}ms`
  } as CSSProperties

  return (
    <div ref={ref} className={className.trim()} style={style}>
      <div className={`home-reveal-inner ${inView ? 'home-reveal-inner--in' : ''}`.trim()}>{children}</div>
    </div>
  )
}
