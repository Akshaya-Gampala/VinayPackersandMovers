import { useState, type FormEvent } from 'react';
import { Send, MessageCircle, Info, CheckCircle2 } from 'lucide-react';
import { BUSINESS, whatsappUrl } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormState {
  name: string;
  mobile: string;
  whatsapp: string;
  from: string;
  to: string;
  shiftingType: string;
  movingDate: string;
  requirements: string;
}

const INITIAL: FormState = {
  name: '',
  mobile: '',
  whatsapp: '',
  from: '',
  to: '',
  shiftingType: '',
  movingDate: '',
  requirements: '',
};

const SHIFTING_TYPES = ['Home', 'Office', 'Vehicle', 'Other'];

export default function QuoteForm() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.mobile.trim()) {
      e.mobile = 'Please enter your mobile number';
    } else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\D/g, '').replace(/^91/, ''))) {
      e.mobile = 'Please enter a valid 10-digit Indian mobile number';
    }
    if (!form.from.trim()) e.from = 'Please enter the moving-from location';
    if (!form.to.trim()) e.to = 'Please enter the moving-to location';
    if (!form.shiftingType) e.shiftingType = 'Please select a shifting type';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(
    field: keyof FormState,
    value: string,
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function buildMessage(): string {
    const lines = [
      `*New Moving Enquiry - Vinay Packers and Movers*`,
      ``,
      `*Name:* ${form.name}`,
      `*Mobile:* ${form.mobile}`,
      `*WhatsApp:* ${form.whatsapp || form.mobile}`,
      `*Moving From:* ${form.from}`,
      `*Moving To:* ${form.to}`,
      `*Shifting Type:* ${form.shiftingType}`,
    ];
    if (form.movingDate) lines.push(`*Preferred Moving Date:* ${form.movingDate}`);
    if (form.requirements.trim()) lines.push(`*Additional Requirements:* ${form.requirements}`);
    return lines.join('\n');
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const url = whatsappUrl(buildMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setForm(INITIAL);
  }

  const inputClass =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400/50';

  return (
    <section id="quote" className="section-pad bg-navy-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-navy-400 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Free Estimate
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Get a Free Moving Quote</h2>
          <p className="mt-3 text-base text-blue-100/80">
            Fill in your details and we&apos;ll send your enquiry directly through WhatsApp for a
            quick response.
          </p>
        </div>

        <div
          ref={ref}
          className={`mx-auto mt-12 max-w-3xl ${visible ? 'visible' : ''} reveal`}
        >
          <div className="rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            {/* Info banner */}
            <div className="mb-6 flex items-start gap-3 rounded-xl bg-orange-50 p-4 ring-1 ring-orange-100">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
              <p className="text-sm text-orange-800">
                Your enquiry will be sent through WhatsApp to{' '}
                <span className="font-semibold">{BUSINESS.whatsappDisplay}</span>. Please make sure
                WhatsApp is installed on your device.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-xl bg-green-50 p-4 ring-1 ring-green-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Your enquiry has been prepared in WhatsApp!
                  </p>
                  <p className="mt-1 text-xs text-green-700">
                    If WhatsApp didn&apos;t open automatically, please tap the button below.
                  </p>
                  <a
                    href={whatsappUrl(
                      `Hello Vinay Packers and Movers, I need information about your packing and moving services. Please contact me.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp mt-3 text-xs"
                  >
                    <MessageCircle className="h-4 w-4" /> Open WhatsApp
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
              <div>
                <label htmlFor="q-name" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Customer Name <span className="text-orange-600">*</span>
                </label>
                <input
                  id="q-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className={`${inputClass} ${errors.name ? 'border-red-400' : 'border-navy-200'}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="q-mobile" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Mobile Number <span className="text-orange-600">*</span>
                </label>
                <input
                  id="q-mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => handleChange('mobile', e.target.value)}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`${inputClass} ${errors.mobile ? 'border-red-400' : 'border-navy-200'}`}
                />
                {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
              </div>

              <div>
                <label htmlFor="q-whatsapp" className="mb-1.5 block text-sm font-medium text-navy-700">
                  WhatsApp Number
                </label>
                <input
                  id="q-whatsapp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => handleChange('whatsapp', e.target.value)}
                  placeholder="Same as mobile if not specified"
                  maxLength={10}
                  className={`${inputClass} border-navy-200`}
                />
              </div>

              <div>
                <label htmlFor="q-type" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Shifting Type <span className="text-orange-600">*</span>
                </label>
                <select
                  id="q-type"
                  value={form.shiftingType}
                  onChange={(e) => handleChange('shiftingType', e.target.value)}
                  className={`${inputClass} ${errors.shiftingType ? 'border-red-400' : 'border-navy-200'}`}
                >
                  <option value="">Select shifting type</option>
                  {SHIFTING_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.shiftingType && (
                  <p className="mt-1 text-xs text-red-500">{errors.shiftingType}</p>
                )}
              </div>

              <div>
                <label htmlFor="q-from" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Moving From <span className="text-orange-600">*</span>
                </label>
                <input
                  id="q-from"
                  type="text"
                  value={form.from}
                  onChange={(e) => handleChange('from', e.target.value)}
                  placeholder="e.g. Hanumakonda"
                  className={`${inputClass} ${errors.from ? 'border-red-400' : 'border-navy-200'}`}
                />
                {errors.from && <p className="mt-1 text-xs text-red-500">{errors.from}</p>}
              </div>

              <div>
                <label htmlFor="q-to" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Moving To <span className="text-orange-600">*</span>
                </label>
                <input
                  id="q-to"
                  type="text"
                  value={form.to}
                  onChange={(e) => handleChange('to', e.target.value)}
                  placeholder="e.g. Hyderabad"
                  className={`${inputClass} ${errors.to ? 'border-red-400' : 'border-navy-200'}`}
                />
                {errors.to && <p className="mt-1 text-xs text-red-500">{errors.to}</p>}
              </div>

              <div>
                <label htmlFor="q-date" className="mb-1.5 block text-sm font-medium text-navy-700">
                  Preferred Moving Date
                </label>
                <input
                  id="q-date"
                  type="date"
                  value={form.movingDate}
                  onChange={(e) => handleChange('movingDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`${inputClass} border-navy-200`}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="q-req"
                  className="mb-1.5 block text-sm font-medium text-navy-700"
                >
                  Additional Requirements
                </label>
                <textarea
                  id="q-req"
                  rows={3}
                  value={form.requirements}
                  onChange={(e) => handleChange('requirements', e.target.value)}
                  placeholder="List items, special handling needs, or any other details"
                  className={`${inputClass} resize-none border-navy-200`}
                />
              </div>

              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full text-base">
                  <Send className="h-4 w-4" /> Get Free Quote via WhatsApp
                </button>
                <p className="mt-3 text-center text-xs text-navy-400">
                  By submitting, your details will open in WhatsApp with a pre-filled message to{' '}
                  {BUSINESS.whatsappDisplay}.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
