import { Phone, MessageCircle, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS, ABOUT_IMAGE, telUrl, whatsappUrl } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const POINTS = [
  'Household & office relocation',
  'Vehicle transportation',
  'Packing, loading & unloading',
  'Door-to-door service',
  'All India coverage',
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad bg-navy-50/60">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={ABOUT_IMAGE}
                alt="Vinay Packers and Movers professional team ready for relocation"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-navy-800 p-5 text-white shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-orange-400" />
                <div>
                  <p className="text-xs text-blue-200">Available</p>
                  <p className="text-lg font-bold">24/7 Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={ref} className={visible ? 'visible' : ''}>
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              About Us
            </span>
            <h2 className="section-title mt-2">About Vinay Packers and Movers</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">{BUSINESS.about}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-navy-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telUrl} className="btn-navy">
                <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-navy-500">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-500" /> Hanumakonda &amp; Warangal, Telangana
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-500" /> {BUSINESS.hours}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
