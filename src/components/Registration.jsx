import RegistrationForm from './RegistrationForm.jsx'

export default function Registration() {
  return (
    <section id="register" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid-glow opacity-70" />
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <div className="reveal text-center mb-10">
          <p className="eyebrow text-xs font-semibold tracking-widest text-accent mb-4">
            REGISTRATION
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl leading-tight">
            Secure Your Spot
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg">
            Fill in your details below to register for Master Meta Ads Optimization in
            Seven Days.
          </p>
        </div>

        <div className="reveal rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10 shadow-card">
          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}
