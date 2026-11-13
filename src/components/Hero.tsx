import { Phone, MessageCircle, ShieldCheck, Clock, IndianRupee, Route, ArrowRight } from 'lucide-react';
import { BUSINESS, HERO_IMAGE, telUrl, whatsappUrl, WHATSAPP_DEFAULT_MSG } from '../constants';

const HIGHLIGHTS = [
  { icon: Clock, label: '24/7 Customer Support' },
  { icon: ShieldCheck, label: 'Safe & Secure Transport' },
  { icon: IndianRupee, label: 'Affordable Pricing' },
  { icon: Route, label: 'All India Relocation' },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Professional moving truck with packed household furniture ready for relocation"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-300 ring-1 ring-orange-400/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            Trusted Packers &amp; Movers in Hanumakonda &amp; Warangal
          </div>

          <h1
            className="animate-fade-in-up mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
            style={{ animationDelay: '0.1s' }}
          >
            VINAY PACKERS
            <br />
            <span className="text-orange-500">AND MOVERS</span>
          </h1>

          <p
            className="animate-fade-in-up mt-5 text-lg font-medium text-orange-100 sm:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            {BUSINESS.tagline}
          </p>

          <p
            className="animate-fade-in-up mt-3 max-w-2xl text-base text-blue-100/80"
            style={{ animationDelay: '0.3s' }}
          >
            Safe, Secure, Affordable and Hassle-Free Relocation Services. We Make Your Moving Journey Easy.
          </p>

          {/* Buttons */}
          <div
            className="animate-fade-in-up mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="#quote" className="btn-primary">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href={telUrl} className="btn-outline">
              <Phone className="h-4 w-4" /> Call Now – {BUSINESS.phone}
            </a>
            <a
              href={whatsappUrl(WHATSAPP_DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          {/* Highlights */}
          <div
            className="animate-fade-in-up mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:max-w-2xl"
            style={{ animationDelay: '0.5s' }}
          >
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm ring-1 ring-white/15 transition-colors hover:bg-white/15"
              >
                <Icon className="h-5 w-5 shrink-0 text-orange-400" />
                <span className="text-sm font-medium text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,80 L1440,80 L1440,40 C1080,80 360,0 0,40 Z" fill="#f0f4f9" />
        </svg>
      </div>
    </section>
  );
}
