import { ArrowRight, Calendar, Clock, Video, Radio } from 'lucide-react'
import bgArt from '../assets/background.png'
import profile from '../assets/profile.jpg'
import { EVENT } from '../config/event.js'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pb-32"
    >
      {/* Background artwork */}
      <div className="absolute inset-0 -z-20">
        <img
          src={bgArt}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/40 via-primary-950/70 to-ink" />
      </div>
      <div className="absolute inset-0 -z-10 bg-grid-glow" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-10 lg:gap-6 items-center">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 mb-6 animate-pulseGlow">
              <Radio size={14} className="text-accent" />
              <span className="text-xs font-semibold tracking-widest text-accent eyebrow">
                LIVE · 7 DAYS · PRACTICAL TRAINING
              </span>
            </div>

            <p className="font-display text-sm sm:text-base font-semibold tracking-[0.2em] text-white/70 mb-3 eyebrow">
              MASTER META ADS OPTIMIZATION IN
            </p>

            <h1 className="font-display font-bold leading-[0.92] tracking-tight text-white">
              <span className="block text-[3.4rem] sm:text-7xl lg:text-8xl">SEVEN</span>
              <span className="block text-[3.4rem] sm:text-7xl lg:text-8xl bg-gradient-to-r from-white via-white to-accent-200 bg-clip-text">
                DAYS
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl font-semibold text-white/90 max-w-xl mx-auto lg:mx-0">
              A 7-Day Live Training to Help You Run Better Facebook &amp; Instagram Ads
            </p>

            <p className="mt-4 text-white/65 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Learn how to create high-converting Meta ad campaigns, reach the right
              audience, reduce wasted ad spend, optimize performance, and scale with
              confidence.
            </p>

            {/* Event facts */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { icon: Calendar, text: EVENT.DATE_RANGE },
                { icon: Clock, text: EVENT.TIME_RANGE },
                { icon: Video, text: EVENT.VENUE },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/85"
                >
                  <Icon size={15} className="text-accent shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-center lg:justify-start">
              <div className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-white">
                {EVENT.FEE_LABEL} Registration
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#register"
                onClick={(e) => scrollTo(e, '#register')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-500 text-ink font-display font-bold text-base px-7 py-4 transition-all hover:shadow-glow hover:-translate-y-0.5"
              >
                Reserve My Seat — {EVENT.FEE_LABEL}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#curriculum"
                onClick={(e) => scrollTo(e, '#curriculum')}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/25 hover:border-white/50 text-white font-display font-semibold text-base px-7 py-4 transition-all hover:bg-white/5"
              >
                See What I'll Learn
              </a>
            </div>

            <p className="mt-6 font-display text-sm sm:text-base font-bold tracking-wide text-white/70">
              7 DAYS. 7 SESSIONS. <span className="text-accent">ONE SKILL</span> THAT CAN
              CHANGE HOW YOU ADVERTISE.
            </p>
          </div>

          {/* Portrait column */}
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/20 blur-3xl -z-10 animate-floatY" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-glow-blue">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent z-10" />
              <img
                src={profile}
                alt="Appiah Kwabena Richmond (KobbyKay), Digital Marketer & Ads Specialist"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl bg-ink/60 backdrop-blur-md border border-white/10 px-4 py-3">
                <p className="text-sm font-semibold text-white">Appiah Kwabena Richmond</p>
                <p className="text-xs text-accent-200 font-medium">
                  KobbyKay · Digital Marketer &amp; Ads Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
