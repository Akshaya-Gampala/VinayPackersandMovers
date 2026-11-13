import { MapPin, Navigation, Star } from 'lucide-react';
import { BUSINESS, DESTINATIONS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PRIMARY_CARDS = [
  {
    name: 'Hanumakonda',
    description:
      'Our home base. We provide complete packing and moving services across Hanumakonda and nearby areas with quick response times.',
    image:
      'https://images.pexels.com/photos/7464712/pexels-photo-7464712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Warangal',
    description:
      'Serving the greater Warangal region with trusted relocation services for homes, offices, and vehicles.',
    image:
      'https://images.pexels.com/photos/5933476/pexels-photo-5933476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function Locations() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="locations" className="section-pad bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Where We Serve
          </span>
          <h2 className="section-title mt-2">Our Service Locations</h2>
          <p className="section-subtitle">
            Proudly based in Hanumakonda &amp; Warangal, Telangana — providing professional packing
            and moving services to all major cities across India.
          </p>
        </div>

        {/* Primary location cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PRIMARY_CARDS.map((loc) => (
            <div
              key={loc.name}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={loc.image}
                alt={`Packers and movers in ${loc.name}, Telangana`}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  <Star className="h-3 w-3 fill-white" /> Primary Service Area
                </div>
                <h3 className="text-2xl font-bold text-white">Packers &amp; Movers in {loc.name}</h3>
                <p className="mt-2 text-sm text-blue-100/90">{loc.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pan-India message */}
        <div className="mt-10 rounded-2xl bg-navy-800 p-6 text-center text-white md:p-8">
          <p className="text-base md:text-lg">
            We proudly provide professional packing and moving services from{' '}
            <span className="font-semibold text-orange-400">Hanumakonda</span> and{' '}
            <span className="font-semibold text-orange-400">Warangal</span> to all major cities
            across India.
          </p>
        </div>

        {/* Destination chips */}
        <div
          ref={ref}
          className={`mt-10 ${visible ? 'visible' : ''} reveal`}
        >
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-navy-500">
            Popular Relocation Destinations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {DESTINATIONS.map((dest) => (
              <a
                key={dest.name}
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-5 py-2.5 text-sm font-medium text-navy-700 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 hover:-translate-y-0.5"
              >
                <MapPin className="h-4 w-4 text-orange-500" />
                {dest.name}
              </a>
            ))}
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-navy-400">
            <Navigation className="h-4 w-4" />
            {BUSINESS.state} to anywhere in India — one reliable moving partner.
          </p>
        </div>
      </div>
    </section>
  );
}
