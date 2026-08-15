import { CheckCircle2, MessageCircle, Home, Info } from 'lucide-react'
import { VIP_WHATSAPP_URL, EVENT } from '../config/event.js'

// ─────────────────────────────────────────────────────────────
// This page is reached after Xharp redirects back from payment.
//
// IMPORTANT — read before wiring this up for real:
// This frontend has no secure way, on its own, to confirm that a
// payment actually succeeded. A URL parameter or redirect alone can
// be spoofed by anyone who knows the URL, so it must NEVER be treated
// as proof of payment on its own.
//
// The correct integration point is Xharp's official server-side
// verification mechanism (webhook / payment-status API / signed
// return token — whichever Xharp provides). See README §7 for the
// exact spot to plug that in.
//
// Until that verification is wired up, this page intentionally shows
// a "we've received you, hang tight" message rather than falsely
// confirming payment or exposing the VIP WhatsApp link.
// ─────────────────────────────────────────────────────────────
const PAYMENT_VERIFIED = false // ← flip only once real Xharp verification is wired up

export default function Success() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-24 bg-ink">
      <div className="max-w-lg w-full text-center">
        <div className="mx-auto w-20 h-20 rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-emerald-400" />
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">You're In! 🎉</h1>
        <p className="text-white/70 text-lg leading-relaxed">
          Your registration for <span className="text-white font-semibold">{EVENT.NAME}</span>{' '}
          has been received and you've completed the payment step.
        </p>

        {PAYMENT_VERIFIED && VIP_WHATSAPP_URL ? (
          <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/10 p-6">
            <p className="font-display font-bold text-lg mb-4">Join the VIP WhatsApp Group</p>
            <a
              href={VIP_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-500 text-ink font-display font-bold px-7 py-4 transition-all hover:shadow-glow"
            >
              <MessageCircle size={20} />
              Join VIP WhatsApp Group
            </a>
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
            <div className="flex items-start gap-3">
              <Info size={18} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-white/65 leading-relaxed">
                We're confirming your payment. Once it's verified, you'll be sent your VIP
                WhatsApp group access. If you have any questions in the meantime, reach out
                using the WhatsApp number you registered with.
              </p>
            </div>
          </div>
        )}

        <a
          href="#/"
          className="mt-10 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <Home size={15} />
          Back to homepage
        </a>
      </div>
    </main>
  )
}
