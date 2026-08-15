import { ArrowRight, Calendar, Clock, Video } from 'lucide-react'
import { EVENT } from '../config/event.js'

export default function FinalCTA() {
  const scrollTo = (e) => {
    e.preventDefault()
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-600 via-primary-800 to-primary-950 animate-gradientMove bg-[length:200%_200%]" />
      <div className="absolute inset-0 -z-10 bg-noise" />

      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <h2 className="reveal font-display font-bold text-3xl sm:text-6xl leading-tight">
          Ready to Master <span className="text-accent">Meta Ads?</span>
        </h2>
        <p className="reveal mt-5 text-white/75 text-lg sm:text-xl">
          Seven days. Practical strategies. Better campaigns. More confidence.
        </p>

        <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
          {[
            { icon: Calendar, text: EVENT.DATE_RANGE },
            { icon: Clock, text: EVENT.TIME_RANGE.replace(' Daily', '') },
            { icon: Video, text: 'Google Meet' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium"
            >
              <Icon size={15} className="text-accent" />
              {text}
            </div>
          ))}
        </div>

        <a
          href="#register"
          onClick={scrollTo}
          className="reveal group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-500 text-ink font-display font-bold text-lg px-9 py-5 transition-all hover:shadow-glow hover:-translate-y-0.5"
        >
          Register for {EVENT.FEE_LABEL}
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
