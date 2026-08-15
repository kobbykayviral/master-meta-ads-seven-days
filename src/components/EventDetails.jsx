import { CalendarDays, Clock3, MapPin, Wallet, Layers } from 'lucide-react'
import { EVENT } from '../config/event.js'

const DETAILS = [
  { icon: CalendarDays, label: 'Date', value: EVENT.DATE_RANGE },
  { icon: Clock3, label: 'Time', value: EVENT.TIME_RANGE.replace(' Daily', '') },
  { icon: MapPin, label: 'Venue', value: 'Google Meet' },
  { icon: Wallet, label: 'Investment', value: `${EVENT.FEE_LABEL}.00` },
  { icon: Layers, label: 'Format', value: EVENT.FORMAT },
]

export default function EventDetails() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow text-xs font-semibold tracking-widest text-accent mb-4">
            THE DETAILS
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl leading-tight">
            Everything You Need to Know
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {DETAILS.map(({ icon: Icon, label, value }, i) => (
            <div
              key={label}
              className="reveal rounded-2xl border border-white/10 bg-gradient-to-b from-primary-900/50 to-transparent p-6 text-center lg:text-left"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <Icon size={20} className="text-accent" />
              </div>
              <p className="eyebrow text-[11px] font-bold tracking-widest text-white/45 mb-1">
                {label.toUpperCase()}
              </p>
              <p className="font-display font-bold text-lg leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
