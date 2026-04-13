import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ lang }: { lang: 'en' | 'de' | 'ar' }) {
  const content = {
    en: {
      desc: 'We build digital experiences that drive growth and innovation.',
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      pages: 'Pages',
      contact: 'Contact',
      contactUs: 'Contact Us',
      address: 'Germany: Westring 44, 44623 Herne | Syria: Aleppo',
      rights: '© 2026 Legacy Solutions. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    de: {
      desc: 'Wir schaffen digitale Erlebnisse, die Wachstum und Innovation fördern.',
      quickLinks: 'Schnelllinks',
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      pages: 'Seiten',
      contact: 'Kontakt',
      contactUs: 'Kontaktiere uns',
      address: 'DE: Westring 44, 44623 Herne | SY: Aleppo',
      rights: '© 2026 Legacy Solutions. Alle Rechte vorbehalten.',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen'
    },
    ar: {
      desc: 'نبني تجارب رقمية تدفع عجلة النمو والابتكار.',
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      about: 'عن الشركة',
      services: 'خدماتنا',
      pages: 'صفحات',
      contact: 'اتصل بنا',
      contactUs: 'تواصل معنا',
      address: 'ألمانيا: Westring 44, 44623 Herne | سوريا: حلب',
      rights: '© 2026 Legacy Solutions. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة'
    }
  };

  const t = content[lang];

  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <Logo width={32} height={32} className="text-white" />
            <span className="text-2xl font-bold tracking-wider uppercase text-white">legacy solutions</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {t.desc}
          </p>
          <div className="flex gap-4 text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#fce34d] transition-colors"><Facebook size={18} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#fce34d] transition-colors"><Twitter size={18} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#fce34d] transition-colors"><Youtube size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#fce34d] transition-colors"><Instagram size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">{t.quickLinks}</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-[#fce34d] transition-colors">{t.home}</Link></li>
            <li><Link href="/about" className="hover:text-[#fce34d] transition-colors">{t.about}</Link></li>
            <li><Link href="/services" className="hover:text-[#fce34d] transition-colors">{t.services}</Link></li>
            <li><Link href="/pages" className="hover:text-[#fce34d] transition-colors">{t.pages}</Link></li>
            <li><Link href="/contact" className="hover:text-[#fce34d] transition-colors">{t.contact}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">{t.contactUs}</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#fce34d] shrink-0 mt-0.5" />
              <span>{t.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#fce34d] shrink-0" />
              <span dir="ltr">+49 0176 41 31 50 59</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#fce34d] shrink-0" />
              <span>hello@legacysolutions-agency.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-xs">{t.rights}</p>
        <div className="flex gap-6 text-gray-400 text-xs">
          <Link href="/privacy" className="hover:text-white transition-colors">{t.privacy}</Link>
          <Link href="/terms" className="hover:text-white transition-colors">{t.terms}</Link>
        </div>
      </div>
    </footer>
  );
}
