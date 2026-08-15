import { MonitorPlay, Wrench, Brain } from 'lucide-react'

const PILLARS = [
  {
    icon: MonitorPlay,
    title: 'Live',
    text: 'Every session runs live on Google Meet — real time, real questions, real answers.',
  },
  {
    icon: Brain,
    title: 'Practical',
    text: 'Built around the strategy behind Meta advertising, not just slides to watch.',
  },
  {
    icon: Wrench,
    title: 'Actionable',
    text: 'Leave each session with something you can apply to your own ads immediately.',
  },
]

export default function TrustSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary-500/[0.06] to-transparent" />
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <p className="reveal eyebrow text-xs font-semibold tracking-widest text-accent mb-4">
          HOW IT WORKS
        </p>
        <h2 className="reveal font-display font-bold text-3xl sm:text-5xl leading-tight">
          Practical. Live. Actionable.
        </h2>
        <p className="reveal mt-5 max-w-2xl mx-auto text-white/65 text-base sm:text-lg leading-relaxed">
          This isn't designed to be a passive webinar where you watch slides for seven
          days. The goal is to help you understand the strategy behind Meta advertising
          and leave with practical knowledge you can immediately apply.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {PILLARS.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-left"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon size={22} className="text-accent mb-4" />
              <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
