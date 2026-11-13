import { Star, MessageSquarePlus, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reviews() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Customer Feedback
          </span>
          <h2 className="section-title mt-2">Customer Reviews</h2>
          <p className="section-subtitle">
            We value every customer&apos;s experience. Genuine reviews from our clients will appear
            here as they are shared with us.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-12 ${visible ? 'visible' : ''} reveal`}
        >
          <div className="mx-auto max-w-2xl rounded-3xl border-2 border-dashed border-navy-200 bg-navy-50/50 p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
              <Star className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy-900">No Reviews Yet</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-navy-500">
              We believe in authentic feedback. As our customers share their genuine moving
              experiences with us, their reviews will be displayed here. We do not post fabricated
              reviews.
            </p>
            <a
              href={whatsappUrl(
                'Hello Vinay Packers and Movers, I would like to share my feedback about your moving services.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              <MessageSquarePlus className="h-4 w-4" /> Share Your Feedback
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-orange-600"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            Talk to us on WhatsApp about your experience
          </a>
        </div>
      </div>
    </section>
  );
}
