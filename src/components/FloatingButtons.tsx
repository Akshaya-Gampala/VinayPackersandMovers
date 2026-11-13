import { useEffect, useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { telUrl, whatsappUrl, WHATSAPP_DEFAULT_MSG, BUSINESS } from '../constants';

export default function FloatingButtons() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* WhatsApp floating button */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {showTooltip && !dismissed && (
          <div className="relative max-w-[220px] rounded-2xl bg-white p-3 shadow-xl ring-1 ring-navy-100 animate-slide-in-right">
            <button
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy-800 text-white"
              onClick={() => setDismissed(true)}
              aria-label="Close tooltip"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="text-xs font-semibold text-navy-900">Need help with your move?</p>
            <p className="mt-1 text-xs text-navy-500">Chat with us on WhatsApp — we&apos;re online 24/7!</p>
          </div>
        )}

        <a
          href={whatsappUrl(WHATSAPP_DEFAULT_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-500/40 transition-transform hover:scale-110"
          aria-label={`Chat on WhatsApp with ${BUSINESS.name}`}
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
          <MessageCircle className="relative h-7 w-7 text-white" />
        </a>
      </div>

      {/* Call floating button - mobile only */}
      <a
        href={telUrl}
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 shadow-lg shadow-navy-900/40 transition-transform hover:scale-110 lg:hidden"
        aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
      >
        <Phone className="h-6 w-6 text-white" />
      </a>
    </>
  );
}
