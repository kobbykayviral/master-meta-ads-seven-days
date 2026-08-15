import { Award, Megaphone, LineChart, Target } from 'lucide-react'
import profile from '../assets/profile.jpg'
import { TRAINER } from '../config/event.js'

const CREDENTIALS = [
  { icon: Award, label: '5+ Years Experience' },
  { icon: Megaphone, label: 'Digital Marketing' },
  { icon: LineChart, label: 'Social Media Strategy' },
  { icon: Target, label: 'Meta Ads' },
]

export default function AboutTrainer() {
  return (
    <section id="trainer" className="relative py-20 sm:py-28 bg-primary-950/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="reveal relative mx-auto max-w-xs lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary-500/30 blur-2xl -z-10" />
            <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-glow-blue aspect-[4/5]">
              <img
                src={profile}
                alt={`${TRAINER.FULL_NAME} — ${TRAINER.TITLE}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="reveal">
            <p className="eyebrow text-xs font-semibold tracking-widest text-accent mb-4">
              MEET YOUR TRAINER
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-5xl leading-tight mb-1">
              {TRAINER.FULL_NAME}
            </h2>
            <p className="font-display text-accent font-semibold text-lg mb-1">
              {TRAINER.ALIAS}
            </p>
            <p className="text-white/50 font-medium mb-6">{TRAINER.TITLE}</p>

            <div className="space-y-4 text-white/70 leading-relaxed text-[15px] sm:text-base">
              <p>
                My name is Appiah Kwabena Richmond, popularly known as KobbyKay. I am a
                highly motivated, adaptable, and results-driven Social Media Manager with
                5 years of hands-on experience managing diverse platforms, creating
                compelling content, and driving brand growth.
              </p>
              <p>
                I bring energy, creativity, and a strong work ethic to every project,
                with a strong focus on data-driven strategies that increase engagement,
                improve audience growth, and drive ROI.
              </p>
              <p>
                I specialize in digital copywriting, influencer outreach, trend analysis,
                community management, content strategy, and helping small businesses
                stand out online, connect with their audience, and turn visibility into
                sales.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CREDENTIALS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center"
                >
                  <Icon size={18} className="text-accent mx-auto mb-2" />
                  <p className="text-xs font-semibold text-white/80 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
