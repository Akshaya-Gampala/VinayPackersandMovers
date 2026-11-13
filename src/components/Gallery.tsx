import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    [],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, next, prev]);

  return (
    <section id="gallery" className="section-pad bg-navy-50/60">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Our Work
          </span>
          <h2 className="section-title mt-2">Gallery of Our Moving Work</h2>
          <p className="section-subtitle">
            A glimpse of our team in action — packing, loading, transporting, and delivering with
            care.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${visible ? 'visible' : ''} reveal`}
        >
          {GALLERY.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
              aria-label={`View ${item.label} photo`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
                <span className="text-sm font-semibold text-white">{item.label}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm transition-colors group-hover:bg-orange-500">
                  <ZoomIn className="h-4 w-4 text-white" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy-400">
          These are demonstration images. We can replace them with actual photographs of our work at
          any time.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 backdrop-blur-sm"
          onClick={close}
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={close}
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <figure
            className="mx-auto max-w-4xl px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              className="mx-auto max-h-[80vh] rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm font-medium text-white">
              {GALLERY[lightbox].label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
