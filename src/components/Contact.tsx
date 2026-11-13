import { Phone, MessageCircle, Clock, MapPin, Navigation } from 'lucide-react';
import { BUSINESS, telUrl, whatsappUrl } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: BUSINESS.phone,
    action: telUrl,
    actionLabel: 'Call Now',
    color: 'bg-navy-600',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: BUSINESS.whatsappDisplay,
    action: whatsappUrl(),
    actionLabel: 'Chat Now',
    color: 'bg-[#25D366]',
  },
  {
    icon: MapPin,
    label: 'Service Areas',
    value: 'Hanumakonda, Warangal & All India',
    color: 'bg-orange-500',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: BUSINESS.hours,
    color: 'bg-navy-700',
  },
];

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Get In Touch
          </span>
          <h2 className="section-title mt-2">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or ready to book your move? Reach out anytime — we&apos;re available 24/7
            to help you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div ref={ref} className={visible ? 'visible' : ''}>
            <div className="grid gap-4 sm:grid-cols-2">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="card p-5">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${info.color}`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-navy-400">
                      {info.label}
                    </h3>
                    <p className="mt-1 text-base font-bold text-navy-900">{info.value}</p>
                    {info.action && (
                      <a
                        href={info.action}
                        target={info.action.startsWith('https') ? '_blank' : undefined}
                        rel={info.action.startsWith('https') ? 'noopener noreferrer' : undefined}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700"
                      >
                        {info.actionLabel} →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick action buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={telUrl} className="btn-navy flex-1">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Chat
              </a>
              <a href="#quote" className="btn-primary flex-1">
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <div className="flex items-center gap-2 bg-navy-800 px-5 py-3 text-white">
              <Navigation className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold">
                Service Area: Hanumakonda &amp; Warangal, Telangana
              </span>
            </div>
            <iframe
              title="Vinay Packers and Movers service area - Hanumakonda and Warangal, Telangana"
              src="https://www.google.com/maps?q=Hanumakonda,Warangal,Telangana&output=embed"
              className="h-full min-h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
