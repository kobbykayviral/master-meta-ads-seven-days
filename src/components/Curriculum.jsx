import {
  Compass,
  Crosshair,
  Users,
  PenTool,
  SlidersHorizontal,
  PiggyBank,
  Rocket,
} from 'lucide-react'

const DAYS = [
  {
    day: '01',
    icon: Compass,
    title: 'Meta Ads Foundations',
    desc: 'Get the core building blocks right — how the Meta Ads ecosystem actually works, from pixel to platform.',
  },
  {
    day: '02',
    icon: Crosshair,
    title: 'Campaign Strategy & Objectives',
    desc: 'Choose the right objective for the right goal, and structure campaigns that are built to perform.',
  },
  {
    day: '03',
    icon: Users,
    title: 'Audience Targeting',
    desc: 'Find and reach the people most likely to buy — instead of guessing who your ad should be shown to.',
  },
  {
    day: '04',
    icon: PenTool,
    title: 'Creative & Ad Copy',
    desc: 'Craft scroll-stopping creative and copy that turns attention into clicks, leads, and sales.',
  },
  {
    day: '05',
    icon: SlidersHorizontal,
    title: 'Campaign Optimization',
    desc: 'Read your ad data with confidence and know exactly what to adjust, test, and improve.',
  },
  {
    day: '06',
    icon: PiggyBank,
    title: 'Reducing Wasted Ad Spend',
    desc: 'Spot where your budget is leaking and tighten your campaigns for a better return on every cedi.',
  },
  {
    day: '07',
    icon: Rocket,
    title: 'Scaling Your Winning Campaigns',
    desc: 'Take what works and grow it — scale winning campaigns without breaking their performance.',
  },
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow text-xs font-semibold tracking-widest text-accent mb-4">
            THE CURRICULUM
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl leading-tight">
            What You'll Learn — Day by Day
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg">
            Seven live sessions. Seven skills. One complete system for running better Meta ads.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DAYS.map(({ day, icon: Icon, title, desc }, i) => (
            <div
              key={day}
              className={`reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-900/60 to-primary-950/60 p-7 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-card ${
                i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute -right-6 -top-6 font-display font-bold text-8xl text-white/[0.04] group-hover:text-accent/[0.08] transition-colors select-none">
                {day}
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display text-xs font-bold tracking-widest text-accent">
                    DAY {day}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/25 transition-transform">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-white">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
