import { EVENT } from '../config/event.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-primary-950/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div>
            <p className="font-display font-bold text-lg">{EVENT.ORG}</p>
            <p className="text-white/60 text-sm mt-1 max-w-xs">{EVENT.NAME}</p>
          </div>

          <div className="text-sm text-white/60 space-y-1">
            <p className="font-semibold text-white/80">Event Date</p>
            <p>{EVENT.DATE_RANGE} · {EVENT.TIME_RANGE}</p>
            <p>{EVENT.VENUE}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} {EVENT.ORG}. All rights reserved.</p>
          <p>Registration details are collected only to manage your seat for this training.</p>
        </div>
      </div>
    </footer>
  )
}
