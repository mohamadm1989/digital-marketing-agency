import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Search,
  Target,
  Play,
  PenTool,
  Settings,
  Layers,
  Lock,
  Megaphone,
  Monitor
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ParallaxImage from './components/ParallaxImage';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { homeT as t } from './i18n/home';

// Lazy-load animation components to reduce initial JS bundle
const ScrollReveal = dynamic(() => import('./components/ScrollReveal'));
const StaggerContainer = dynamic(() => import('./components/ScrollReveal').then(mod => ({ default: mod.StaggerContainer })));
const StaggerItem = dynamic(() => import('./components/ScrollReveal').then(mod => ({ default: mod.StaggerItem })));
const TextReveal = dynamic(() => import('./components/TextReveal'));

export const metadata: Metadata = {
  title: 'Legacy Solutions | Premium Digital Agency Herne & Aleppo',
  description: 'Legacy Solutions is a luxury digital agency providing expert web design, branding, and SEO marketing in Herne, Germany and Aleppo, Syria.',
  openGraph: {
    title: 'Legacy Solutions — Creative Digital Agency Herne & Aleppo',
    description: 'Bespoke digital solutions for growing businesses in Europe and the Middle East.',
    type: 'website',
  },
};

type LocalizedString = Record<'en' | 'de' | 'ar' | string, string>;

interface WorkItem {
  image: string;
  category: LocalizedString;
  title: LocalizedString;
  desc: LocalizedString;
}

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang')?.value as 'en' | 'de' | 'ar') || 'en';

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#fce34d] selection:text-black">
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-48 flex flex-col justify-center min-h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/team-working.avif"
            alt="Legacy Solutions digital marketing team collaborating on a luxury project strategy"
            speed={0.5}
            className="grayscale"
            sizes="100vw"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>



        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <ScrollReveal direction="up" blur duration={1} distance={40}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2] max-w-4xl mx-auto">
              {t.hero.title[lang]}
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3} blur>
            <p className="text-gray-300 mt-6 max-w-2xl text-sm leading-relaxed mx-auto">
              {t.hero.subtitle[lang]}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5}>
            <Link href="/contact" className="mt-8 bg-[#fce34d] text-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mx-auto hover:bg-white transition-colors">
              {t.hero.cta[lang]} {lang === 'ar' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* --- 3 Overlapping Cards Section --- */}
      <section className="relative z-20 px-8 max-w-5xl mx-auto -mt-24 mb-24 overflow-visible">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 bg-[#050505] shadow-2xl" staggerDelay={0.15}>
          {/* Card 1 */}
          <StaggerItem className="bg-[#0a0a0a] p-12 text-center text-white flex flex-col items-center hover:-translate-y-4 transition-all duration-500 ease-out shadow-xl hover:shadow-2xl">
            <Globe size={32} className="text-[#fce34d] mb-6" />
            <h2 className="text-lg font-bold mb-4">{t.cards.websites.title[lang]}</h2>
            <p className="text-gray-400 text-xs leading-relaxed mb-8">
              {t.cards.websites.desc[lang]}
            </p>
            <Link href="/services" className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-[#fce34d] transition-colors mt-auto">
              {t.cards.readMore[lang]} {lang === 'ar' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </Link>
          </StaggerItem>
          {/* Card 2 */}
          <StaggerItem className="bg-[#050505] p-12 text-center text-white flex flex-col items-center hover:-translate-y-4 transition-all duration-500 ease-out shadow-xl hover:shadow-2xl">
            <Search size={32} className="text-[#fce34d] mb-6" />
            <h2 className="text-lg font-bold mb-4">{t.cards.brands.title[lang]}</h2>
            <p className="text-gray-400 text-xs leading-relaxed mb-8">
              {t.cards.brands.desc[lang]}
            </p>
            <Link href="/services" className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-[#fce34d] transition-colors mt-auto">
              {t.cards.readMore[lang]} {lang === 'ar' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </Link>
          </StaggerItem>
          {/* Card 3 */}
          <StaggerItem className="bg-[#fce34d] p-12 text-center text-black flex flex-col items-center hover:-translate-y-4 transition-all duration-500 ease-out shadow-xl hover:shadow-2xl">
            <Target size={32} className="text-black mb-6" />
            <h2 className="text-lg font-bold mb-4">{t.cards.google.title[lang]}</h2>
            <p className="text-gray-800 text-xs leading-relaxed mb-8">
              {t.cards.google.desc[lang]}
            </p>
            <Link href="/services" className="text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-gray-600 transition-colors mt-auto">
              {t.cards.readMore[lang]} {lang === 'ar' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </section>



      {/* --- About Section --- */}
      <section className="py-24 px-8 max-w-6xl mx-auto bg-white mb-24 overflow-visible">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <ScrollReveal direction="left" className="md:w-1/2 z-10 md:pt-20">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#fce34d] mb-8 block">{t.about.tagline[lang]}</span>
            <TextReveal
              text={t.about.title[lang]}
              className="text-black"
            />
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 mt-10 font-medium max-w-md">
              {t.about.desc[lang]}
            </p>
            <Link href="/about" className="bg-black text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#fce34d] hover:text-black transition-all duration-300 w-fit">
              {t.about.cta[lang]} {lang === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="md:w-1/2 relative w-full mt-16 md:mt-0">
            <div className="relative aspect-[4/5] w-full max-w-[450px] ml-auto group">
              {/* Decorative Accent */}
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#fce34d] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>

              <div className="relative h-full w-full bg-gray-200 overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-working.avif"
                  alt="Modern web design and development team at Legacy Solutions Agency"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                    <Play size={24} className="text-black ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Featured Work Section --- */}
      <section className="bg-black py-32 overflow-hidden">
        <div className="px-8 mb-24 max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {t.work.title[lang]}
            </h2>
            <div className="w-24 h-1 bg-[#fce34d]"></div>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" staggerDelay={0.15}>
            {t.work.items.map((item: WorkItem, i: number) => (
              <StaggerItem key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-8">
                  <Image
                    src={item.image}
                    alt={item.title[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <div>
                  <span className="text-[#fce34d] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">{item.category[lang]}</span>
                  <h3 className="text-white text-3xl font-bold mb-4 group-hover:text-[#fce34d] transition-colors">{item.title[lang]}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-sm">{item.desc[lang]}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section >

      {/* --- Services Section --- */}
      < section className="bg-black py-24 px-8" >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.services.title[lang]}
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              {t.services.desc[lang]}
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {/* Service 1 */}
            <StaggerItem><Link href="/services" className="shimmer-card-wrapper group block h-full">
              <div className="p-10 bg-[#000] h-full relative z-10 flex flex-col">
                <div className="shimmer-shine-layer"></div>
                <PenTool size={28} className="text-gray-400 group-hover:text-[#fce34d] mb-6 transition-colors" />
                <h3 className="text-white text-lg font-bold mb-3">{t.services.items.design.title[lang]}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 flex-grow">
                  {t.services.items.design.desc[lang]}
                </p>
                <span className="text-gray-400 group-hover:text-[#fce34d] text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
                  {t.cards.readMore[lang]} {lang === 'ar' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </span>
              </div>
            </Link></StaggerItem>
            {/* Service 2 */}
            <StaggerItem><Link href="/services" className="shimmer-card-wrapper group block h-full">
              <div className="p-10 bg-[#000] h-full relative z-10 flex flex-col">
                <div className="shimmer-shine-layer"></div>
                <Settings size={28} className="text-gray-400 group-hover:text-[#fce34d] mb-6 transition-colors" />
                <h3 className="text-white text-lg font-bold mb-3">{t.services.items.code.title[lang]}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 flex-grow">
                  {t.services.items.code.desc[lang]}
                </p>
                <span className="text-gray-400 group-hover:text-[#fce34d] text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
                  {t.cards.readMore[lang]} {lang === 'ar' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </span>
              </div>
            </Link></StaggerItem>
            {/* Service 3 */}
            <StaggerItem><Link href="/services" className="shimmer-card-wrapper group block h-full">
              <div className="p-10 bg-[#000] h-full relative z-10 flex flex-col">
                <div className="shimmer-shine-layer"></div>
                <Layers size={28} className="text-gray-400 group-hover:text-[#fce34d] mb-6 transition-colors" />
                <h3 className="text-white text-lg font-bold mb-3">{t.services.items.visual.title[lang]}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 flex-grow">
                  {t.services.items.visual.desc[lang]}
                </p>
                <span className="text-gray-400 group-hover:text-[#fce34d] text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
                  {t.cards.readMore[lang]} {lang === 'ar' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </span>
              </div>
            </Link></StaggerItem>
            {/* Service 4 */}
            <StaggerItem><Link href="/services" className="shimmer-card-wrapper group block h-full">
              <div className="p-10 bg-[#000] h-full relative z-10 flex flex-col">
                <div className="shimmer-shine-layer"></div>
                <Lock size={28} className="text-gray-400 group-hover:text-[#fce34d] mb-6 transition-colors" />
                <h3 className="text-white text-lg font-bold mb-3">{t.services.items.ux.title[lang]}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 flex-grow">
                  {t.services.items.ux.desc[lang]}
                </p>
                <span className="text-gray-400 group-hover:text-[#fce34d] text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
                  {t.cards.readMore[lang]} {lang === 'ar' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </span>
              </div>
            </Link></StaggerItem>
            {/* Service 5 */}
            <StaggerItem><Link href="/services" className="shimmer-card-wrapper group block h-full">
              <div className="p-10 bg-[#000] h-full relative z-10 flex flex-col">
                <div className="shimmer-shine-layer"></div>
                <Megaphone size={28} className="text-gray-400 group-hover:text-[#fce34d] mb-6 transition-colors" />
                <h3 className="text-white text-lg font-bold mb-3">{t.services.items.growth.title[lang]}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 flex-grow">
                  {t.services.items.growth.desc[lang]}
                </p>
                <span className="text-gray-400 group-hover:text-[#fce34d] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
                  {t.cards.readMore[lang]} {lang === 'ar' ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
                </span>
              </div>
            </Link></StaggerItem>
            {/* Service 6 */}
            <StaggerItem><Link href="/services" className="shimmer-card-wrapper group block h-full">
              <div className="p-10 bg-[#000] h-full relative z-10 flex flex-col">
                <div className="shimmer-shine-layer"></div>
                <Monitor size={28} className="text-gray-400 group-hover:text-[#fce34d] mb-6 transition-colors" />
                <h3 className="text-white text-lg font-bold mb-3">{t.services.items.fullstack.title[lang]}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 flex-grow">
                  {t.services.items.fullstack.desc[lang]}
                </p>
                <span className="text-gray-400 group-hover:text-[#fce34d] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
                  {t.cards.readMore[lang]} {lang === 'ar' ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
                </span>
              </div>
            </Link></StaggerItem>
          </StaggerContainer>
        </div>
      </section >
    </div >
  );
}
