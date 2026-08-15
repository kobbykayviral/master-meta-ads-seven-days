import { useState } from 'react'
import { Loader2, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'
import {
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
  XHARP_PAYMENT_URL,
  EVENT,
} from '../config/event.js'

const ROLE_OPTIONS = [
  'Entrepreneur',
  'Business Owner',
  'Digital Marketer',
  'Freelancer',
  'Content Creator',
  'Social Media Manager',
  'Student',
  'Beginner',
  'Other',
]

const EMPTY_FORM = {
  name: '',
  email: '',
  whatsapp: '',
  business: '',
  role: '',
  goal: '',
  consent: false,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// status: 'idle' | 'submitting' | 'success' | 'error'
export default function RegistrationForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverError, setServerError] = useState('')

  const update = (field) => (e) => {
    const value = field === 'consent' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!form.email.trim()) next.email = 'Please enter your email address.'
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Enter a valid email address.'
    if (!form.whatsapp.trim()) next.whatsapp = 'Please enter your WhatsApp number.'
    if (!form.role) next.role = 'Please tell us what best describes you.'
    if (!form.goal.trim()) next.goal = 'Let us know what you want to achieve.'
    if (!form.consent) next.consent = 'Please confirm to continue.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')

    if (!validate()) {
      const firstError = document.querySelector('[data-error="true"]')
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setStatus('submitting')

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Registration — ${EVENT.NAME}`,
        from_name: EVENT.NAME,
        name: form.name,
        email: form.email,
        whatsapp: form.whatsapp,
        business: form.business || 'Not provided',
        role: form.role,
        message: form.goal,
        event: EVENT.NAME,
      }

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => null)

      if (res.ok && data && data.success) {
        setStatus('success')
        // Only redirect to payment AFTER a confirmed successful submission.
        window.setTimeout(() => {
          window.location.href = XHARP_PAYMENT_URL
        }, 1800)
      } else {
        throw new Error((data && data.message) || 'Submission was not accepted.')
      }
    } catch (err) {
      setStatus('error')
      setServerError(
        "We couldn't submit your registration right now. Please check your connection and try again."
      )
    }
  }

  const inputClass = (field) =>
    `w-full rounded-xl bg-white/[0.04] border ${
      errors[field] ? 'border-red-400/60' : 'border-white/15'
    } px-4 py-3.5 text-white placeholder-white/35 focus:border-accent focus:bg-white/[0.06] outline-none transition-colors`

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-8 sm:p-10 text-center">
        <CheckCircle2 size={44} className="text-emerald-400 mx-auto mb-4" />
        <h3 className="font-display font-bold text-2xl mb-2">Registration Received!</h3>
        <p className="text-white/70 max-w-md mx-auto">
          Your registration details have been received. You're being redirected to
          secure payment to complete your {EVENT.FEE_LABEL} spot.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/50">
          <Loader2 size={16} className="animate-spin" />
          Redirecting to payment…
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            className={inputClass('name')}
            data-error={!!errors.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-300">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-2">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            className={inputClass('email')}
            data-error={!!errors.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-300">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-semibold text-white/80 mb-2">
            WhatsApp Number <span className="text-accent">*</span>
          </label>
          <input
            id="whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 024 000 0000"
            value={form.whatsapp}
            onChange={update('whatsapp')}
            className={inputClass('whatsapp')}
            data-error={!!errors.whatsapp}
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
          />
          {errors.whatsapp && (
            <p id="whatsapp-error" className="mt-1.5 text-sm text-red-300">
              {errors.whatsapp}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="business" className="block text-sm font-semibold text-white/80 mb-2">
            Business / Brand Name <span className="text-white/40 font-normal">(optional)</span>
          </label>
          <input
            id="business"
            type="text"
            value={form.business}
            onChange={update('business')}
            className={inputClass('business')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-white/80 mb-2">
          What best describes you? <span className="text-accent">*</span>
        </label>
        <select
          id="role"
          value={form.role}
          onChange={update('role')}
          className={`${inputClass('role')} appearance-none`}
          data-error={!!errors.role}
          aria-invalid={!!errors.role}
          aria-describedby={errors.role ? 'role-error' : undefined}
        >
          <option value="" disabled className="bg-primary-950">
            Select an option
          </option>
          {ROLE_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-primary-950">
              {opt}
            </option>
          ))}
        </select>
        {errors.role && (
          <p id="role-error" className="mt-1.5 text-sm text-red-300">
            {errors.role}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="goal" className="block text-sm font-semibold text-white/80 mb-2">
          What do you want to achieve from this training? <span className="text-accent">*</span>
        </label>
        <textarea
          id="goal"
          rows={4}
          value={form.goal}
          onChange={update('goal')}
          className={inputClass('goal')}
          data-error={!!errors.goal}
          aria-invalid={!!errors.goal}
          aria-describedby={errors.goal ? 'goal-error' : undefined}
        />
        {errors.goal && (
          <p id="goal-error" className="mt-1.5 text-sm text-red-300">
            {errors.goal}
          </p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer" data-error={!!errors.consent}>
        <input
          type="checkbox"
          checked={form.consent}
          onChange={update('consent')}
          className="mt-1 w-4 h-4 rounded border-white/30 bg-white/10 accent-accent shrink-0"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
        />
        <span className="text-sm text-white/65 leading-relaxed">
          I confirm that the information provided is accurate and I agree to be
          contacted regarding this training.
        </span>
      </label>
      {errors.consent && (
        <p id="consent-error" className="-mt-3 text-sm text-red-300">
          {errors.consent}
        </p>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3.5">
          <AlertTriangle size={18} className="text-red-300 shrink-0 mt-0.5" />
          <p className="text-sm text-red-200">{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-500 disabled:opacity-60 disabled:cursor-not-allowed text-ink font-display font-bold text-base sm:text-lg px-7 py-4 transition-all hover:shadow-glow"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Continue to Payment — {EVENT.FEE_LABEL}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-white/40">
        You'll be redirected to secure payment only after your registration is
        successfully submitted.
      </p>
    </form>
  )
}
