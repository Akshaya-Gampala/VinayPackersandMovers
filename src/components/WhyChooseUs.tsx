import { FEATURES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WhyChooseUs() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Why Trust Us
          </span>
          <h2 className="section-title mt-2">Why Choose Vinay Packers and Movers?</h2>
          <p className="section-subtitle">
            We combine professional expertise with genuine care to make your relocation experience
            smooth, safe, and stress-free.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${visible ? 'visible' : ''} reveal`}
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card group p-6 text-center hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 transition-colors group-hover:bg-orange-500">
                  <Icon className="h-7 w-7 text-navy-700 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
