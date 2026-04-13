'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import { contactT as t } from '../i18n/contact';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export default function Contact() {
  const { lang } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [activeMap, setActiveMap] = useState<'germany' | 'syria'>('germany');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website_url_trap: '', // Honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-Spam Security: Silent rejection for bots that fill the hidden honeypot
    if (formData.website_url_trap) {
      console.warn("Spam bot detected and isolated.");
      return;
    }

    setFormState('sending');

    // Simulate form submission — replace with real API when available
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '', website_url_trap: '' });
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#fce34d] selection:text-black">
      <section className="relative h-[50vh] min-h-[400px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image src="/images/contact-hero.avif" alt="Contact us to start your digital project" fill className="object-cover grayscale" priority referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>



        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4">
          <ScrollReveal direction="up" blur duration={1} distance={40}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              {t.hero.title[lang]} <span className="text-[#fce34d]">{t.hero.titleHighlight[lang]}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3} blur>
            <p className="text-gray-300 mt-6 max-w-xl text-sm leading-relaxed">
              {t.hero.subtitle[lang]}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-8 max-w-6xl mx-auto -mt-20 relative z-20 overflow-hidden">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          <StaggerItem className="bg-[#050505] p-8 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#fce34d] transition-colors duration-300">
              <Phone size={24} className="text-[#fce34d] group-hover:text-black transition-colors duration-300" />
            </div>
            <h3 className="text-white font-bold mb-2">{t.info.phone[lang]}</h3>
            <p className="text-gray-400 text-[14px]">+49 0176 41 31 50 59</p>
          </StaggerItem>

          <StaggerItem className="bg-[#050505] p-8 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#fce34d] transition-colors duration-300">
              <Mail size={24} className="text-[#fce34d] group-hover:text-black transition-colors duration-300" />
            </div>
            <h3 className="text-white font-bold mb-2">{t.info.email[lang]}</h3>
            <p className="text-gray-400 text-[14px]">hello@legacysolutions-agency.com</p>
            <p className="text-gray-400 text-[14px]">support@legacysolutions-agency.com</p>
          </StaggerItem>

          <StaggerItem className="bg-[#050505] p-8 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#fce34d] transition-colors duration-300">
              <MapPin size={24} className="text-[#fce34d] group-hover:text-black transition-colors duration-300" />
            </div>
            <h3 className="text-white font-bold mb-4">{t.info.locations.title[lang]}</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <p className="text-[#fce34d] text-[10px] font-bold uppercase tracking-widest">{t.info.locations.germany.city[lang]}</p>
                  <span className="bg-white/10 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-tighter border border-white/20">HQ</span>
                </div>
                <p className="text-gray-400 text-[13px]">{t.info.locations.germany.address}</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-[#fce34d] text-[10px] font-bold uppercase tracking-widest mb-1">{t.info.locations.syria.city[lang]}</p>
                <p className="text-gray-400 text-[13px]">{t.info.locations.syria.address[lang]}</p>
                <p className="text-gray-500 text-[12px] mt-1" dir="rtl">{t.info.locations.syria.addressAr}</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="bg-[#050505] p-8 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#fce34d] transition-colors duration-300">
              <Clock size={24} className="text-[#fce34d] group-hover:text-black transition-colors duration-300" />
            </div>
            <h3 className="text-white font-bold mb-2">{t.info.hours.title[lang]}</h3>
            <p className="text-gray-400 text-[14px]">{t.info.hours.weekdays[lang]}</p>
            <p className="text-gray-400 text-[14px]">{t.info.hours.weekends[lang]}</p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      <section className="py-12 px-8 max-w-6xl mx-auto mb-24 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-16">
          <ScrollReveal direction="left" className="lg:w-1/2">
            <h4 className="text-[#fce34d] font-bold tracking-widest uppercase text-sm mb-4">{t.form.tag[lang]}</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">{t.form.title[lang]}</h2>
            <p className="text-gray-500 text-[14px] mb-10 leading-relaxed">
              {t.form.desc[lang]}
            </p>

            {formState === 'success' ? (
              <div className="bg-green-50 border border-green-200 p-8 text-center">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">
                  {t.form.success.title[lang]}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t.form.success.desc[lang]}
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-6 text-sm font-bold text-black underline hover:text-gray-600"
                >
                  {t.form.success.btn[lang]}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Security Honeypot: Hidden from screen readers and visual layout */}
                  <input type="text" id="website_url_trap" value={formData.website_url_trap} onChange={handleChange} className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off" />

                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-black uppercase tracking-widest mb-2">{t.form.labels.name[lang]}</label>
                    <input type="text" id="name" maxLength={100} required value={formData.name} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder={t.form.labels.namePlaceholder[lang]} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-black uppercase tracking-widest mb-2">{t.form.labels.email[lang]}</label>
                    <input type="email" id="email" maxLength={100} required value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder={t.form.labels.emailPlaceholder[lang]} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-black uppercase tracking-widest mb-2">{t.form.labels.subject[lang]}</label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>{t.form.labels.subjectPlaceholder[lang]}</option>
                    <option value="web">{t.form.labels.subjectOptions.web[lang]}</option>
                    <option value="seo">{t.form.labels.subjectOptions.seo[lang]}</option>
                    <option value="brand">{t.form.labels.subjectOptions.brand[lang]}</option>
                    <option value="other">{t.form.labels.subjectOptions.other[lang]}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-black uppercase tracking-widest mb-2">{t.form.labels.message[lang]}</label>
                  <textarea id="message" rows={5} maxLength={1500} required value={formData.message} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none" placeholder={t.form.labels.messagePlaceholder[lang]}></textarea>
                </div>

                {formState === 'error' && (
                  <p className="text-red-500 text-sm">
                    {t.form.error[lang]}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="bg-black text-white px-10 py-4 text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#fce34d] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? (
                    <><Loader2 size={16} className="animate-spin" /> {t.form.sending[lang]}</>
                  ) : (
                    <>{t.form.sendMsg[lang]} <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="lg:w-1/2 flex flex-col min-h-[500px]">
            {/* Map Toggles */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveMap('germany')}
                className={`py-3 px-8 text-[12px] font-bold uppercase tracking-widest transition-colors ${activeMap === 'germany' ? 'bg-black text-[#fce34d]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
              >
                {t.info.locations.germany.city[lang]}
              </button>
              <button
                onClick={() => setActiveMap('syria')}
                className={`py-3 px-8 text-[12px] font-bold uppercase tracking-widest transition-colors ${activeMap === 'syria' ? 'bg-black text-[#fce34d]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
              >
                {t.info.locations.syria.city[lang]}
              </button>
            </div>

            <div className="relative flex-grow flex-1 bg-gray-100 overflow-hidden group">
              <iframe
                src={
                  activeMap === 'germany'
                    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.947214643534!2d7.213768276941571!3d51.53250100913861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9213793740001%3A0x6796c9c8e8749e7a!2sWestring%2044%2C%2044623%20Herne%2C%20Germany!5e0!3m2!1sen!2sde!4v1711680000000!5m2!1sen!2sde"
                    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102400.00!2d37.0700!3d36.2000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152559b1dc04d9c7%3A0xb1fed493e87b7a15!2sAleppo%2C%20Syria!5e0!3m2!1sen!2sde!4v1711680000000!5m2!1sen!2sde"
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
