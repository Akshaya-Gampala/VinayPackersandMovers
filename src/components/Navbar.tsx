import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS, telUrl, whatsappUrl } from '../constants';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#home" aria-label="Vinay Packers and Movers home" className={scrolled ? '' : 'rounded-lg'}>
          <Logo />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-navy-700 hover:bg-navy-50 hover:text-navy-900'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telUrl}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? 'text-navy-700 hover:text-navy-900' : 'text-white/90 hover:text-white'
            }`}
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <a href="#quote" className="btn-primary">
            Get Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden ${
            scrolled ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="container-x pb-4">
            <div className="card divide-y divide-navy-50 bg-white p-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 p-2">
                <a href={telUrl} className="btn-navy w-full">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp Us
                </a>
                <a href="#quote" className="btn-primary w-full" onClick={() => setOpen(false)}>
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
