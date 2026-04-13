import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import FAQAccordion from '../components/FAQAccordion';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { pagesT as t } from '../i18n/pages';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Portfolio & Pricing — Legacy Solutions Digital Agency',
  description: 'View our latest projects, transparent pricing plans, and frequently asked questions. From startups to enterprises, we have a plan for every business.',
};

export default async function Pages() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang')?.value as 'en' | 'de' | 'ar') || 'en';

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#fce34d] selection:text-black">
      <section className="relative h-[50vh] min-h-[400px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image src="/images/team-working.avif" alt="Pages Header" fill className="object-cover grayscale" priority referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <Navbar />

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

      <section className="py-24 px-8 max-w-6xl mx-auto overflow-hidden">
        <ScrollReveal className="text-center mb-16">
          <h4 className="text-[#fce34d] font-bold tracking-widest uppercase text-sm mb-4">{t.work.tag[lang]}</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{t.work.title[lang]}</h2>
          <p className="text-gray-500 text-[14px] max-w-xl mx-auto">
            {t.work.desc[lang]}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          <StaggerItem className="group cursor-pointer">
            <Link href="/work/eco-ecommerce" className="block relative h-full">
              <div className="relative h-[300px] w-full mb-6 overflow-hidden bg-[#050505]">
                <Image src="/images/project-1.jpg" alt="Project 1" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#fce34d] transition-colors">{t.work.p1.title[lang]}</h3>
              <p className="text-gray-500 text-[12px] uppercase tracking-wider font-bold">Web Development</p>
            </Link>
          </StaggerItem>

          <StaggerItem className="group cursor-pointer">
            <Link href="/work/fintech-app" className="block relative h-full">
              <div className="relative h-[300px] w-full mb-6 overflow-hidden bg-[#050505]">
                <Image src="/images/project-2.jpg" alt="Project 2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#fce34d] transition-colors">{t.work.p2.title[lang]}</h3>
              <p className="text-gray-500 text-[12px] uppercase tracking-wider font-bold">{t.work.p2.tag[lang]}</p>
            </Link>
          </StaggerItem>

          <StaggerItem className="group cursor-pointer">
            <Link href="/work/real-estate" className="block relative h-full">
              <div className="relative h-[300px] w-full mb-6 overflow-hidden bg-[#050505]">
                <Image src="/images/project-3.avif" alt="Project 3" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#fce34d] transition-colors">{t.work.p3.title[lang]}</h3>
              <p className="text-gray-500 text-[12px] uppercase tracking-wider font-bold">{t.work.p3.tag[lang]}</p>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </section>

      <section className="bg-[#050505] py-24 px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h4 className="text-[#fce34d] font-bold tracking-widest uppercase text-sm mb-4">{t.process.tag[lang]}</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.process.title[lang]}</h2>
            <p className="text-gray-400 text-[16px] max-w-2xl mx-auto leading-relaxed">
              {t.process.desc[lang]}
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" staggerDelay={0.15}>
            {t.process.steps.map((step, idx) => (
              <StaggerItem key={idx} className="group relative border border-white/10 p-10 hover:border-[#fce34d]/50 transition-colors duration-500 bg-[#111]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fce34d] to-transparent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                <div className="text-[#fce34d] font-mono text-5xl opacity-20 absolute top-8 right-8 font-black group-hover:opacity-40 transition-opacity duration-500">
                  {idx + 1}
                </div>
                <h3 className="text-white text-2xl font-bold mb-4 pr-12 relative z-10">{step.title[lang]}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed relative z-10">
                  {step.desc[lang]}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 px-8 bg-gray-50 overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto" direction="up">
          <div className="text-center mb-16">
            <h4 className="text-[#fce34d] font-bold tracking-widest uppercase text-sm mb-4">FAQ</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{t.faq.title[lang]}</h2>
          </div>

          <FAQAccordion lang={lang} />
        </ScrollReveal>
      </section>

      <section className="bg-[#fce34d] py-24 px-8 text-center overflow-hidden">
        <ScrollReveal className="max-w-3xl mx-auto" direction="up" blur>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">{t.cta.title[lang]}</h2>
          <p className="text-gray-800 text-[14px] leading-relaxed mb-10">
            {t.cta.desc[lang]}
          </p>
          <Link href="/contact" className="bg-black text-white px-10 py-4 text-[12px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:bg-gray-800 transition-colors w-fit">
            {t.cta.btn[lang]} {lang === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
