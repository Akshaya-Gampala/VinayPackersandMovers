import { Phone, MessageCircle, Clock, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS, SERVICES, DESTINATIONS, telUrl, whatsappUrl } from '../constants';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Get Free Quote', href: '#quote' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-blue-100/80">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="rounded-xl bg-white/95 p-3 inline-block">
              <Logo />
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {BUSINESS.name} — your trusted relocation partner based in Hanumakonda &amp; Warangal,
              Telangana. Safe, secure, and affordable moving services to anywhere in India.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href={telUrl} className="flex items-center gap-2 hover:text-orange-400">
                <Phone className="h-4 w-4 text-orange-400" /> {BUSINESS.phone}
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-400"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp: {BUSINESS.whatsappDisplay}
              </a>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-400" /> {BUSINESS.hours}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-400" /> Hanumakonda, Warangal &amp; All India
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-400"
                  >
                    <ArrowRight className="h-3 w-3 text-orange-500" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-400"
                  >
                    <ArrowRight className="h-3 w-3 text-orange-500" /> {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-400"
                >
                  <ArrowRight className="h-3 w-3 text-orange-500" /> View All Services
                </a>
              </li>
            </ul>
          </div>

          {/* Service locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Service Locations
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs">
              <li className="rounded-full bg-orange-500/20 px-3 py-1 font-semibold text-orange-300 ring-1 ring-orange-400/30">
                Hanumakonda
              </li>
              <li className="rounded-full bg-orange-500/20 px-3 py-1 font-semibold text-orange-300 ring-1 ring-orange-400/30">
                Warangal
              </li>
              {DESTINATIONS.map((d) => (
                <li
                  key={d.name}
                  className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"
                >
                  {d.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-blue-200/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Packers and Movers in Hanumakonda &amp; Warangal, Telangana — Serving All India.</p>
        </div>
      </div>
    </footer>
  );
}
