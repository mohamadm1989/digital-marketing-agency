'use client';
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const NAV_LINKS = {
  en: { home: 'Home', about: 'About', services: 'Services', portfolio: 'Portfolio', contact: 'Contact' },
  de: { home: 'Startseite', about: 'Über uns', services: 'Leistungen', portfolio: 'Portfolio', contact: 'Kontakt' },
  ar: { home: 'الرئيسية', about: 'من نحن', services: 'خدماتنا', portfolio: 'أعمالنا', contact: 'تواصل معنا' }
} as const;

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const t = NAV_LINKS[lang as 'en' | 'de' | 'ar'];

  const links = [
    { href: '/', label: t.home },
    { href: '/services', label: t.services },
    { href: '/pages', label: t.portfolio },
    { href: '/about', label: t.about },
    { href: '/contact', label: t.contact },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-8 py-4 flex justify-between items-center text-white transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-black/20 py-3' : 'bg-transparent py-6'}`}>
        <Link href="/" className="flex items-center gap-3 z-50">
          <Logo width={28} height={28} className="text-white" />
          <span className="text-xl tracking-wider uppercase hidden sm:block">
            <span className="font-bold">legacy</span> <span className="font-light text-[#fce34d]">solutions</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-[12px] font-bold tracking-widest uppercase items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? 'text-[#fce34d]' : 'hover:text-[#fce34d] transition-colors'}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <div className="flex items-center gap-2 mr-4 bg-white/10 px-3 py-1 rounded-full">
            <Globe size={14} />
            <button onClick={() => setLang('en')} aria-label="Switch to English" className={`text-[10px] font-bold ${lang === 'en' ? 'text-[#fce34d]' : 'text-white hover:text-gray-300'}`}>EN</button>
            <span className="text-white/30">|</span>
            <button onClick={() => setLang('de')} aria-label="Auf Deutsch umschalten" className={`text-[10px] font-bold ${lang === 'de' ? 'text-[#fce34d]' : 'text-white hover:text-gray-300'}`}>DE</button>
            <span className="text-white/30">|</span>
            <button onClick={() => setLang('ar')} aria-label="التبديل للعربية" className={`text-[10px] font-bold ${lang === 'ar' ? 'text-[#fce34d]' : 'text-white hover:text-gray-300'}`}>AR</button>
          </div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#fce34d] transition-colors"><Facebook size={16} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#fce34d] transition-colors"><Twitter size={16} /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#fce34d] transition-colors"><Youtube size={16} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#fce34d] transition-colors"><Instagram size={16} /></a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay - Outside nav to avoid filter/transition effects */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center md:hidden animate-fadeIn">
          <button
            className="absolute top-6 right-8 text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-center gap-8 text-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-bold uppercase tracking-widest ${pathname === link.href ? 'text-[#fce34d]' : 'text-white hover:text-[#fce34d] transition-colors'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => { setLang('en'); setMobileMenuOpen(false); }}
                aria-label="Switch to English"
                className={`text-sm font-bold ${lang === 'en' ? 'text-[#fce34d]' : 'text-white'}`}
              >
                English
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => { setLang('de'); setMobileMenuOpen(false); }}
                aria-label="Auf Deutsch umschalten"
                className={`text-sm font-bold ${lang === 'de' ? 'text-[#fce34d]' : 'text-white'}`}
              >
                Deutsch
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => { setLang('ar'); setMobileMenuOpen(false); }}
                aria-label="التبديل للعربية"
                className={`text-sm font-bold ${lang === 'ar' ? 'text-[#fce34d]' : 'text-white'}`}
              >
                العربية
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-[#fce34d] transition-colors"><Facebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-[#fce34d] transition-colors"><Twitter size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-[#fce34d] transition-colors"><Youtube size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[#fce34d] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
