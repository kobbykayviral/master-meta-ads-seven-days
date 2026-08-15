import { TrendingDown, Target, Wallet, Gauge, FlaskConical, BarChart3 } from 'lucide-react'

const PROBLEMS = [
  { icon: TrendingDown, text: 'Boost posts without a real strategy' },
  { icon: Target, text: 'Target the wrong audience' },
  { icon: Wallet, text: 'Waste money on poorly optimized campaigns' },
  { icon: Gauge, text: "Struggle to understand ad performance" },
  { icon: FlaskConical, text: "Don't know what to test" },
  { icon: ChartNoAxesCombined, text: "Don't know how to scale winning campaigns" },
]

export default function WhyThisTraining() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow text-xs font-semibold tracking-widest text-accent mb-4">
            THE PROBLEM
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl leading-tight">
            Running Ads But Not Getting the Results You Want?
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROBLEMS.map(({ icon: Icon, text }, i) => (
            <div
              key={text}
              className="reveal group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-6 transition-all hover:-translate-y-1 hover:border-accent/30"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors">
                <Icon size={20} className="text-primary-200 group-hover:text-accent transition-colors" />
              </div>
              <p className="text-white/85 font-medium leading-snug">{text}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 text-center">
          <h3 className="font-display font-bold text-2xl sm:text-4xl">
            <span className="text-white">This Training </span>
            <span className="text-accent">Changes That.</span>
          </h3>
        </div>
      </div>
    </section>
  )
}
