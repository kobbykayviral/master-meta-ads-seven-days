import { useState } from 'react'
import { Plus } from 'lucide-react'
import { EVENT } from '../config/event.js'

const FAQS = [
  {
    q: 'Who is this training for?',
    a: 'Entrepreneurs, business owners, digital marketers, freelancers, content creators, social media managers, and anyone — beginner or experienced — who wants better results from Meta Ads.',
  },
  {
    q: 'Do I need previous Meta Ads experience?',
    a: "No. The training starts from the foundations on Day 1 and builds up, so it works whether you're brand new to Meta Ads or already running campaigns.",
  },
  {
    q: 'Where will the training take place?',
    a: 'The training runs live on Google Meet. You\'ll receive the link details after you register.',
  },
  {
    q: 'What time does the training start?',
    a: `Sessions run daily from ${EVENT.TIME_RANGE}, from ${EVENT.DATE_RANGE}.`,
  },
  {
    q: 'How much does registration cost?',
    a: `Registration is ${EVENT.FEE_LABEL}.00 for the full 7-day training.`,
  },
  {
    q: 'How many days is the training?',
    a: '7 days of live sessions, one per day, covering a complete Meta Ads system from foundations to scaling.',
  },
  {
    q: 'Will the sessions be live?',
    a: 'Yes — every session is delivered live on Google Meet, not pre-recorded.',
  },
  {
    q: 'How do I get access to the VIP WhatsApp group?',
    a: 'VIP WhatsApp access is shared after your registration and payment have both been completed successfully.',
  },
  {
    q: 'What happens after I register?',
    a: "After you submit the registration form, you'll be taken to secure payment to complete your GH₵50 spot for the training.",
  },
]

function FAQItem({ q, a, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-white/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          id={`faq-header-${id}`}
          className="w-full flex items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-display font-semibold text-base sm:text-lg text-white">
            {q}
          </span>
          <Plus
            size={20}
            className={`shrink-0 text-accent transition-transform duration-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
          />
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-header-${id}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-white/65 leading-relaxed text-[15px]">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal text-center mb-12">
          <p className="eyebrow text-xs font-semibold tracking-widest text-accent mb-4">
            QUESTIONS
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="reveal rounded-3xl border border-white/10 bg-white/[0.02] px-6 sm:px-8">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              id={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
