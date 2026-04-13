import { ArrowRight, ArrowLeft, Users, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { aboutT as t } from '../i18n/about';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Us | Legacy Solutions Digital Agency Herne & Syria',
  description: 'Learn about Legacy Solutions, an elite digital agency with 12+ years experience. Custom web design & SEO marketing in Herne, Germany & Aleppo, Syria.',
};

export default async function About() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang')?.value as 'en' | 'de' | 'ar') || 'en';

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#fce34d] selection:text-black">
      <section className="relative h-[50vh] min-h-[400px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image src="/images/team-working.avif" alt="Legacy Solutions agency team collaboration header" fill className="object-cover grayscale" priority referrerPolicy="no-referrer" />
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
        <div className="flex flex-col md:flex-row items-center gap-16">
          <ScrollReveal direction="left" className="md:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-sm overflow-hidden">
              <Image src="/images/our-story.jpg" alt="Strategic meeting at Legacy Solutions Digital Agency office" fill className="object-cover grayscale" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#fce34d] -z-10"></div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2} className="md:w-1/2">
            <span className="text-[#fce34d] font-bold tracking-widest uppercase text-sm mb-4 block">{t.story.tag[lang]}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
              {t.story.title[lang]}
            </h2>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
              {t.story.p1[lang]}
            </p>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-8">
              {t.story.p2[lang]}
            </p>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#050505] rounded-full flex items-center justify-center text-[#fce34d] shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-black text-sm">{t.story.mission.title[lang]}</h5>
                  <p className="text-gray-500 text-[12px]">{t.story.mission.desc[lang]}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#050505] rounded-full flex items-center justify-center text-[#fce34d] shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-black text-sm">{t.story.vision.title[lang]}</h5>
                  <p className="text-gray-500 text-[12px]">{t.story.vision.desc[lang]}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#050505] py-20 px-8">
        <StaggerContainer className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10" staggerDelay={0.1}>
          <StaggerItem className="flex flex-col items-center justify-center">
            <h3 className="text-5xl font-bold text-[#fce34d] mb-2">12+</h3>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{t.stats.years[lang]}</p>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center justify-center">
            <h3 className="text-5xl font-bold text-white mb-2">350</h3>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{t.stats.projects[lang]}</p>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center justify-center">
            <h3 className="text-5xl font-bold text-white mb-2">45</h3>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{t.stats.team[lang]}</p>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center justify-center">
            <h3 className="text-5xl font-bold text-[#fce34d] mb-2">15</h3>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{t.stats.awards[lang]}</p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-[#fce34d] font-bold tracking-widest uppercase text-sm mb-4 block">{t.team.tag[lang]}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{t.team.title[lang]}</h2>
            <p className="text-gray-500 text-[14px] max-w-xl mx-auto">
              {t.team.subtitle[lang]}
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem className="group">
              <div className="relative h-[400px] w-full mb-6 overflow-hidden bg-gray-200">
                <Image src="/images/team-member-1.jpg" alt="David Anderson, CEO of Legacy Solutions Digital Agency" fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-black mb-1">David Anderson</h3>
                <p className="text-[#fce34d] text-xs font-bold uppercase tracking-widest">{t.team.roles.ceo[lang]}</p>
              </div>
            </StaggerItem>
            <StaggerItem className="group">
              <div className="relative h-[400px] w-full mb-6 overflow-hidden bg-gray-200">
                <Image src="/images/team-member-2.jpg" alt="Sarah Jenkins, Creative Director at Legacy Solutions" fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-black mb-1">Sarah Jenkins</h3>
                <p className="text-[#fce34d] text-xs font-bold uppercase tracking-widest">{t.team.roles.creativeDir[lang]}</p>
              </div>
            </StaggerItem>
            <StaggerItem className="group">
              <div className="relative h-[400px] w-full mb-6 overflow-hidden bg-gray-200">
                <Image src="/images/team-member-3.jpg" alt="Michael Chen, Lead Developer at Legacy Solutions Agency" fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-black mb-1">Michael Chen</h3>
                <p className="text-[#fce34d] text-xs font-bold uppercase tracking-widest">{t.team.roles.leadDev[lang]}</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
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
