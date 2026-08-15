# Master Meta Ads Optimization in Seven Days

A premium, conversion-focused landing page and registration funnel for KobbyKay's
7-day live Meta Ads training. Built with React + Vite + Tailwind CSS.

**Event:** 25th – 31st October · 7:30 PM – 9:30 PM daily · Live on Google Meet · GH₵50

---

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

This starts a local dev server (usually `http://localhost:5173`) with hot reload.

## 3. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

---

## 4. Project structure

```text
src/
├── assets/              → your supplied images (profile photo, background, flyer, etc.)
├── components/          → Navbar, Hero, Curriculum, RegistrationForm, FAQ, Footer, etc.
├── config/event.js      → ⭐ ALL business/event values live here — start here to edit content
├── hooks/useReveal.js   → scroll-reveal animation hook
├── pages/
│   ├── Landing.jsx      → assembles the full landing page
│   └── Success.jsx      → post-payment confirmation page
├── App.jsx              → tiny hash-based router (`/` and `#/success`)
└── main.jsx             → React entry point
```

---

## 5. Where to change things

### Event details, fees, dates, trainer name
Edit **`src/config/event.js`**. Every component reads from this one file —
nothing is hard-coded across multiple components.

### Web3Forms integration
Also in `src/config/event.js`:

```js
export const WEB3FORMS_ACCESS_KEY = '8cb1f884-3a63-478b-90da-cd52a0897dde'
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
```

This is a **public, client-side key** — Web3Forms is designed for this key to sit in
frontend code, so nothing further needs to be hidden. The actual submit logic lives in
`src/components/RegistrationForm.jsx`, which POSTs the form fields (name, email,
WhatsApp number, business name, role, and goal) as JSON to the endpoint above, with
loading, success, and error states built in.

### Xharp payment link
Also in `src/config/event.js`:

```js
export const XHARP_PAYMENT_URL = 'https://www.usexharp.io/pay/master-meta-ads-in-seven-days'
```

The visitor is only redirected here **after** a successful Web3Forms submission
(see `handleSubmit` in `RegistrationForm.jsx`). If the submission fails, the user
sees an error message and is never sent to payment.

### VIP WhatsApp group link
Also in `src/config/event.js`:

```js
export const VIP_WHATSAPP_URL = ''
```

This is intentionally left **empty** in this build. See §7 below — it must only be
filled in and shown once real payment verification is wired up.

---

## 6. How the registration → payment flow works

```text
Landing page
   ↓
"Reserve My Seat" → scrolls to registration form
   ↓
Visitor fills in the form
   ↓
Form POSTs to Web3Forms
   ↓
Submission successful?
   ├─ No  → friendly error shown, user can retry, NOT redirected to payment
   └─ Yes → success message shown, then redirected to the Xharp payment URL
```

This logic lives entirely in `src/components/RegistrationForm.jsx`.

---

## 7. Payment verification & the VIP WhatsApp group — read this before launch

**This is the one piece that cannot be safely completed without Xharp's official
payment verification documentation (webhook, payment-status API, or a signed
return/redirect token).**

A frontend redirect back from a payment page is **not, on its own, proof that
payment succeeded** — anyone could visit `yoursite.com/#/success` directly without
paying. For that reason, this project does **not** fake payment verification, and
does **not** expose the VIP WhatsApp link anywhere in the source code by default.

What's already built for you:

- A dedicated confirmation page at `src/pages/Success.jsx`, reachable at
  `<your-site-url>/#/success`.
- A single flag, `PAYMENT_VERIFIED`, at the top of that file. It defaults to `false`,
  which shows a "we're confirming your payment" message instead of the WhatsApp
  button.
- A single config value, `VIP_WHATSAPP_URL` in `src/config/event.js`, which is the
  only place the WhatsApp link needs to be added.

**To finish this integration once you have Xharp's docs**, do one of the following,
in order of preference:

1. **Server-side webhook (recommended):** Have Xharp call a small backend endpoint
   (a serverless function works fine — e.g. Vercel/Netlify Functions, or a tiny
   Node/Express service) when a payment succeeds. That endpoint verifies the
   payment with Xharp's API and only then reveals/sends the WhatsApp link (e.g. by
   emailing/WhatsApp-ing it directly to the registrant, or by writing a "paid" flag
   the frontend can check). This is the only fully secure option, because it never
   trusts the browser.
2. **Signed return token:** If Xharp redirects back with a signed/verifiable token
   in the URL, verify that token server-side (not in the browser) before setting
   `PAYMENT_VERIFIED`.
3. **Manual interim step:** Until either of the above is in place, keep
   `PAYMENT_VERIFIED = false` and instead personally confirm payment (e.g. via
   Xharp's dashboard) and send the WhatsApp link directly to each registrant. The
   Success page already explains this to users so nothing feels broken.

Do not set `PAYMENT_VERIFIED = true` unconditionally — that would show the WhatsApp
button to anyone who lands on the success URL, paid or not.

---

## 8. Deploying to GitHub Pages

This repo includes a ready-to-use GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds and deploys automatically on every push
to `main`.

**One-time setup:**

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes it.

**If your repo is not a custom/organization root domain** (i.e. your site will live
at `https://<username>.github.io/<repo-name>/`), open `vite.config.js` and confirm
`base` is set correctly. The current config uses `base: './'` (relative paths),
which works for both project pages and custom domains without any changes.

**Manual deploy alternative** (if you'd rather not use Actions):

```bash
npm run build
npm run deploy
```

This uses the included `gh-pages` package to publish the `dist/` folder to a
`gh-pages` branch.

---

## 9. Environment variables

None are required. The Web3Forms key is intentionally a public client-side key and
is checked into `src/config/event.js` directly, as Web3Forms' own integration model
expects. If you'd rather not commit it to a public repo, you can optionally move it
to a Vite env variable:

```
# .env.local (not committed)
VITE_WEB3FORMS_ACCESS_KEY=8cb1f884-3a63-478b-90da-cd52a0897dde
```

and reference it in `src/config/event.js` as
`import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`. This is optional — the key is safe to
expose either way.

---

## 10. Known limitations

- **Payment verification is not implemented** — see §7. This requires Xharp's
  official server-side verification mechanism, which wasn't available at build
  time. The architecture is ready for it; it just needs to be connected.
- The **VIP WhatsApp link is intentionally blank** until verification is wired up.
- No backend/database is included — registrations are captured by Web3Forms and
  delivered to your inbox; there's no admin dashboard in this build.
- Large source images (`src/assets/background.png`, `src/assets/flyer-reference.jpg`)
  are the originals you supplied. For best performance, consider compressing them
  (e.g. via [squoosh.app](https://squoosh.app)) before final deployment — they're
  used as-is here to preserve visual fidelity.
- `public/favicon.png` and `public/og-image.jpg` are currently placeholders copied
  from your headshot. Swap in a proper favicon/OG image before launch if you'd like
  something more tailored.

---

## 11. Tech stack

- React 18 + Vite 5
- Tailwind CSS 3 (custom brand tokens in `tailwind.config.js`: primary `#0108B0`,
  accent `#FF6E01`)
- lucide-react for icons
- No backend — Web3Forms handles form delivery, Xharp handles payment
