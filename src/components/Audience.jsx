import {
  Briefcase,
  Building2,
  Megaphone,
  Laptop,
  Camera,
  Share2,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

const AUDIENCE = [
  { icon: Briefcase, label: 'Entrepreneurs' },
  { icon: Building2, label: 'Business Owners' },
  { icon: Megaphone, label: 'Digital Marketers' },
  { icon: Laptop, label: 'Freelancers' },
  { icon: Camera, label: 'Content Creators' },
  { icon: Share2, label: 'Social Media Managers' },
  { icon: Sparkles, label: 'Beginners Who Want to Learn Meta Ads' },
  { icon: TrendingUp, label: 'Anyone Running Ads Who Wants Better Results' },
]

export default function Audience() {
  return (
    <section id="audience" className="relative py-20 sm:py-28 bg-primary-950/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow text-xs font-semibold tracking-widest text-accent mb-4">
            IS THIS YOU?
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl leading-tight">
            This Is For You If<span className="text-accent">...</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {AUDIENCE.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="reveal group flex flex-col items-center text-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-accent/[0.08] hover:border-accent/30 px-4 py-7 transition-all hover:-translate-y-1"
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              <div className="w-11 h-11 rounded-full bg-primary-500/25 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                <Icon size={19} className="text-primary-200 group-hover:text-accent transition-colors" />
              </div>
              <p className="text-sm font-semibold text-white/85">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
