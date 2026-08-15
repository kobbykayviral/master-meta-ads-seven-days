// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR ALL EVENT + BUSINESS CONFIGURATION
// Change values here — every component reads from this file.
// ─────────────────────────────────────────────────────────────

export const EVENT = {
  NAME: 'Master Meta Ads Optimization in Seven Days',
  ORG: 'The Christian Creative Vault',
  DATE_RANGE: '25th – 31st October',
  TIME_RANGE: '7:30 PM – 9:30 PM Daily',
  VENUE: 'Live on Google Meet',
  FORMAT: '7-Day Live Online Training',
  FEE_LABEL: 'GH₵50',
  FEE_NUMERIC: 50,
  CURRENCY: 'GHS',
}

export const TRAINER = {
  FULL_NAME: 'Appiah Kwabena Richmond',
  ALIAS: 'KobbyKay',
  TITLE: 'Digital Marketer & Ads Specialist',
}

// ── Web3Forms (registration capture) ───────────────────────────
// Public client-side access key — safe to expose in frontend code.
export const WEB3FORMS_ACCESS_KEY = '8cb1f884-3a63-478b-90da-cd52a0897dde'
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

// ── Xharp payment ───────────────────────────────────────────────
// Where visitors are sent to pay AFTER a successful Web3Forms submission.
export const XHARP_PAYMENT_URL = 'https://www.usexharp.io/pay/master-meta-ads-in-seven-days'

// ── VIP WhatsApp community ──────────────────────────────────────
// IMPORTANT: This link is intentionally left as a placeholder.
// It must only ever be shown on the /success route, and only once
// Xharp payment verification has been wired up (see README §7).
// Replace this single value when you have the group link ready.
export const VIP_WHATSAPP_URL = ''

// ── Nav + section anchors ───────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: "What You'll Learn", href: '#curriculum' },
  { label: "Who It's For", href: '#audience' },
  { label: 'About KobbyKay', href: '#trainer' },
  { label: 'FAQ', href: '#faq' },
]
