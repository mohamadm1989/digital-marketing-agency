import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../components/ScrollReveal';
import ParallaxImage from '../../components/ParallaxImage';
import { projectsData, caseStudyT, LocalizedString } from '../../i18n/projects';

export async function generateStaticParams() {
    return Object.keys(projectsData).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata(
    props: any
): Promise<Metadata> {
    const { slug } = await props.params;
    const project = projectsData[slug];

    if (!project) {
        return { title: 'Project Not Found' };
    }

    // Next.js metadata doesn't easily support dynamic i18n without route segments,
    // so we'll fallback to english for the meta title.
    const titleString = typeof project.title.en === 'string' ? project.title.en : 'Project';

    return {
        title: `${titleString} — Legacy Solutions Case Study`,
        description: typeof project.challenge.text.en === 'string' ? project.challenge.text.en : '',
    };
}

export default async function ProjectCaseStudy(
    props: any
) {
    const { slug } = await props.params;
    const project = projectsData[slug];

    if (!project) {
        notFound();
    }

    const cookieStore = await cookies();
    const lang = (cookieStore.get('lang')?.value as 'en' | 'de' | 'ar') || 'en';

    const t = (str: LocalizedString) => str[lang];

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#fce34d] selection:text-black">

            {/* Cinematic Hero */}
            <section className="relative h-[90vh] min-h-[600px] flex flex-col justify-end pb-24 px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ParallaxImage
                        src={project.heroImage}
                        alt={typeof t(project.title) === 'string' ? (t(project.title) as string) : 'Hero'}
                        priority
                        sizes="100vw"
                        className="grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <ScrollReveal direction="up" distance={40}>
                        <Link
                            href="/pages"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-[#fce34d] text-xs font-bold uppercase tracking-widest transition-colors mb-12"
                        >
                            {lang === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />} {t(caseStudyT.back)}
                        </Link>
                    </ScrollReveal>

                    <StaggerContainer staggerDelay={0.15}>
                        <StaggerItem>
                            <p className="text-[#fce34d] text-sm font-bold uppercase tracking-widest mb-4">
                                {t(project.category)}
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight max-w-5xl">
                                {t(project.title)}
                            </h1>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Meta & Challenge (Sticky scrolling context) */}
            <section className="py-24 px-8 md:py-32">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Sticky Meta Sidebar */}
                    <div className="w-full lg:w-1/3">
                        <div className="lg:sticky lg:top-32 space-y-10">
                            <ScrollReveal direction="up">
                                <h4 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Client</h4>
                                <p className="text-xl font-medium">{project.client}</p>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.1}>
                                <h4 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Role</h4>
                                <p className="text-xl font-medium">{t(project.role)}</p>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.2}>
                                <h4 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Year</h4>
                                <p className="text-xl font-medium">{project.year}</p>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Scrolling Content */}
                    <div className="w-full lg:w-2/3 max-w-3xl">
                        <ScrollReveal direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                                {t(project.challenge.title)}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                {t(project.challenge.text)}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Cinematic Full-width Transition Image */}
            {project.gallery.length > 0 && (
                <section className="h-[70vh] w-full relative overflow-hidden my-12">
                    <ParallaxImage
                        src={project.gallery[0].src}
                        alt={typeof t(project.gallery[0].alt) === 'string' ? (t(project.gallery[0].alt) as string) : 'Gallery Image'}
                        sizes="100vw"
                    />
                </section>
            )}

            {/* The Solution */}
            <section className="py-24 px-8 md:py-32 bg-[#050505] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal direction="up" blur>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                            {t(project.solution.title)}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-16">
                            {t(project.solution.text)}
                        </p>
                    </ScrollReveal>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left" staggerDelay={0.1}>
                        {project.solution.features.map((feature, i) => (
                            <StaggerItem key={i} className="border-t border-white/10 pt-6">
                                <div className="text-[#fce34d] text-sm font-bold tracking-widest mb-4">0{i + 1}</div>
                                <h3 className="text-lg font-medium">{t(feature)}</h3>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Results / Climax */}
            <section className="py-24 px-8 md:py-32 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal className="text-center mb-20 relative px-4">
                        {/* Background huge text for texture */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-gray-50 whitespace-nowrap -z-10 pointer-events-none select-none overflow-hidden max-w-full">
                            {t(project.results.title)}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight inline-block bg-white px-8 py-4">
                            {t(project.results.title)}
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center" staggerDelay={0.2}>
                        {project.results.metrics.map((metric, i) => (
                            <StaggerItem key={i}>
                                <div className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
                                    {metric.value}
                                </div>
                                <div className="text-sm uppercase tracking-widest font-bold text-gray-500">
                                    {t(metric.label)}
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Additional Story Image */}
            {project.gallery.length > 1 && (
                <section className="py-12 px-8 max-w-6xl mx-auto">
                    <ScrollReveal direction="up" blur distance={60}>
                        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-gray-100">
                            <Image
                                src={project.gallery[1].src}
                                alt={typeof t(project.gallery[1].alt) === 'string' ? (t(project.gallery[1].alt) as string) : 'Gallery Image 2'}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1200px) 100vw, 1200px"
                            />
                        </div>
                    </ScrollReveal>
                </section>
            )}

            {/* Next Project Resolution */}
            <section className="group relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-black flex flex-col justify-center items-center text-center cursor-pointer mt-24">
                <Image
                    src={project.nextProject.image}
                    fill
                    alt="Next Project"
                    className="object-cover opacity-40 group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 grayscale group-hover:grayscale-0"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-1000 pointer-events-none"></div>

                <Link href={`/work/${project.nextProject.slug}`} className="relative z-10 w-full h-full flex flex-col justify-center items-center p-8">
                    <span className="text-white/60 text-sm font-bold tracking-widest uppercase mb-4 transition-colors group-hover:text-white">Next Project</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight transition-transform duration-700 transform group-hover:-translate-y-2">
                        {t(project.nextProject.title)}
                    </h2>
                    <div className="mt-8 overflow-hidden">
                        <span className="inline-flex items-center gap-2 text-[#fce34d] text-sm font-bold uppercase tracking-widest transform translate-y-[200%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            {lang === 'ar' ? 'عرض دراسة الحالة' : 'View Case Study'} {lang === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                        </span>
                    </div>
                </Link>
            </section>
        </main>
    );
}
