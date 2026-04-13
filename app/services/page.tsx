import { ArrowRight, ArrowLeft, Monitor, Code, LineChart, Layers, PenTool, Lock, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { servicesT as t } from '../i18n/services';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Services | Legacy Solutions Digital Agency Herne & Syria',
  description: 'Pro digital services at Legacy Solutions: UX/UI design, custom web development, and SEO marketing for companies in Herne, Germany and Aleppo, Syria.',
};

export default async function Services() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang')?.value as 'en' | 'de' | 'ar') || 'en';

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#fce34d] selection:text-black">
      <section className="relative h-[50vh] min-h-[400px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image src="/images/team-working.avif" alt="Digital marketing specialists at Legacy Solutions Agency collaborating" fill className="object-cover grayscale" priority referrerPolicy="no-referrer" />
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

      <section className="py-24 px-8 max-w-6xl mx-auto overflow-hidden">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[#fce34d] font-bold tracking-widest uppercase text-sm mb-4 block">{t.details.tag[lang]}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{t.details.title[lang]}</h2>
        </ScrollReveal>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <ScrollReveal direction="left" className="md:w-1/2">
              <div className="w-20 h-20 bg-[#050505] flex items-center justify-center mb-6">
                <Monitor size={40} className="text-[#fce34d]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">UI/UX Design</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                {t.details.uiux.desc[lang]}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 size={18} className="text-[#fce34d]" /> {t.details.uiux.li1[lang]}</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 size={18} className="text-[#fce34d]" /> {t.details.uiux.li2[lang]}</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 size={18} className="text-[#fce34d]" /> {t.details.uiux.li3[lang]}</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 size={18} className="text-[#fce34d]" /> {t.details.uiux.li4[lang]}</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right" className="md:w-1/2 relative h-[400px] w-full bg-gray-100">
              <Image src="/images/ui-ux-design.avif" alt="Luxury UI/UX design process for a digital product" fill className="object-cover grayscale" />
            </ScrollReveal>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <ScrollReveal direction="right" className="md:w-1/2">
              <div className="w-20 h-20 bg-[#050505] flex items-center justify-center mb-6">
                <Code size={40} className="text-[#fce34d]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t.details.webdev.title[lang]}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                {t.details.webdev.desc[lang]}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 size={18} className="text-[#fce34d]" /> {t.details.webdev.li1[lang]}</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 size={18} className="text-[#fce34d]" /> {t.details.webdev.li2[lang]}</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 size={18} className="text-[#fce34d]" /> {t.details.webdev.li3[lang]}</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckCircle2 size={18} className="text-[#fce34d]" /> {t.details.webdev.li4[lang]}</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="left" className="md:w-1/2 relative h-[400px] w-full bg-gray-100">
              <Image src="/images/web-development.jpg" alt="Custom web development at Legacy Solutions Digital Agency" fill className="object-cover grayscale" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-[#fce34d] font-bold tracking-widest uppercase text-sm mb-4 block">{t.expertise.tag[lang]}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{t.expertise.title[lang]}</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            <StaggerItem className="group bg-[#050505] p-10 hover:bg-[#fce34d] transition-colors duration-300 cursor-pointer">
              <Monitor size={32} className="text-[#fce34d] group-hover:text-black mb-6 transition-colors duration-300" />
              <h3 className="text-white group-hover:text-black text-xl font-bold mb-3 transition-colors duration-300">UI/UX Design</h3>
              <p className="text-gray-400 group-hover:text-gray-800 text-[13px] leading-relaxed transition-colors duration-300">
                {t.expertise.items.uiux.desc[lang]}
              </p>
            </StaggerItem>
            <StaggerItem className="group bg-[#050505] p-10 hover:bg-[#fce34d] transition-colors duration-300 cursor-pointer">
              <Code size={32} className="text-[#fce34d] group-hover:text-black mb-6 transition-colors duration-300" />
              <h3 className="text-white group-hover:text-black text-xl font-bold mb-3 transition-colors duration-300">{t.expertise.items.webdev.title[lang]}</h3>
              <p className="text-gray-400 group-hover:text-gray-800 text-[13px] leading-relaxed transition-colors duration-300">
                {t.expertise.items.webdev.desc[lang]}
              </p>
            </StaggerItem>
            <StaggerItem className="group bg-[#050505] p-10 hover:bg-[#fce34d] transition-colors duration-300 cursor-pointer">
              <LineChart size={32} className="text-[#fce34d] group-hover:text-black mb-6 transition-colors duration-300" />
              <h3 className="text-white group-hover:text-black text-xl font-bold mb-3 transition-colors duration-300">{t.expertise.items.marketing.title[lang]}</h3>
              <p className="text-gray-400 group-hover:text-gray-800 text-[13px] leading-relaxed transition-colors duration-300">
                {t.expertise.items.marketing.desc[lang]}
              </p>
            </StaggerItem>
            <StaggerItem className="group bg-[#050505] p-10 hover:bg-[#fce34d] transition-colors duration-300 cursor-pointer">
              <Layers size={32} className="text-[#fce34d] group-hover:text-black mb-6 transition-colors duration-300" />
              <h3 className="text-white group-hover:text-black text-xl font-bold mb-3 transition-colors duration-300">{t.expertise.items.brand.title[lang]}</h3>
              <p className="text-gray-400 group-hover:text-gray-800 text-[13px] leading-relaxed transition-colors duration-300">
                {t.expertise.items.brand.desc[lang]}
              </p>
            </StaggerItem>
            <StaggerItem className="group bg-[#050505] p-10 hover:bg-[#fce34d] transition-colors duration-300 cursor-pointer">
              <PenTool size={32} className="text-[#fce34d] group-hover:text-black mb-6 transition-colors duration-300" />
              <h3 className="text-white group-hover:text-black text-xl font-bold mb-3 transition-colors duration-300">{t.expertise.items.seo.title[lang]}</h3>
              <p className="text-gray-400 group-hover:text-gray-800 text-[13px] leading-relaxed transition-colors duration-300">
                {t.expertise.items.seo.desc[lang]}
              </p>
            </StaggerItem>
            <StaggerItem className="group bg-[#050505] p-10 hover:bg-[#fce34d] transition-colors duration-300 cursor-pointer">
              <Lock size={32} className="text-[#fce34d] group-hover:text-black mb-6 transition-colors duration-300" />
              <h3 className="text-white group-hover:text-black text-xl font-bold mb-3 transition-colors duration-300">{t.expertise.items.data.title[lang]}</h3>
              <p className="text-gray-400 group-hover:text-gray-800 text-[13px] leading-relaxed transition-colors duration-300">
                {t.expertise.items.data.desc[lang]}
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-[#fce34d] py-24 px-8 text-center overflow-hidden">
        <ScrollReveal className="max-w-3xl mx-auto" direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
            {t.cta.title[lang]}
          </h2>
          <Link href="/contact" className="bg-black text-white px-10 py-4 text-[12px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:bg-gray-800 transition-colors w-fit">
            {t.cta.btn[lang]} {lang === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
