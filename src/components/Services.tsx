import { ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICES, whatsappUrl } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Services() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-pad bg-navy-50/60">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            What We Offer
          </span>
          <h2 className="section-title mt-2">Our Relocation Services</h2>
          <p className="section-subtitle">
            From household shifting to vehicle transportation — we handle every aspect of your move
            with care, professionalism, and reliability.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${visible ? 'visible' : ''} reveal`}
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="card group overflow-hidden hover:-translate-y-1.5 hover:shadow-xl"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Vinay Packers and Movers`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-900/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 shadow-lg">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{service.description}</p>
                  <div className="mt-4 flex gap-2">
                    <a
                      href="#quote"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-navy-800 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-900"
                    >
                      Get Quote <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={whatsappUrl(
                        `Hello Vinay Packers and Movers, I am interested in your ${service.title} service. Please share details.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-[#1ebe57] transition-colors hover:bg-green-100"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
