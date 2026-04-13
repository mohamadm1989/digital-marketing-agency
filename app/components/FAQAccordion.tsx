'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQAccordionProps {
    lang: 'en' | 'de' | 'ar';
}

export default function FAQAccordion({ lang }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: {
                en: 'How long does a typical web design project take?',
                de: 'Wie lange dauert ein typisches Webdesign-Projekt?',
                ar: 'كم يستغرق مشروع تصميم الويب النموذجي؟'
            },
            answer: {
                en: 'A professional custom web design project typically takes between 4 to 8 weeks from initial strategy to final launch. The exact timeline depends on the project scope, custom animation requirements, and CMS integrations. Our digital agency ensures rapid development without sacrificing premium quality or search engine optimization standards.',
                de: 'Ein professionelles Webdesign-Projekt dauert in der Regel 4 bis 8 Wochen von der ersten Strategie bis zum finalen Launch. Der genaue Zeitplan hängt vom Projektumfang, individuellen Animationen und CMS-Integrationen ab. Unsere Digitalagentur gewährleistet schnelle Entwicklung ohne Einbußen bei Premium-Qualität oder SEO-Standards.',
                ar: 'يستغرق مشروع تصميم الويب المخصص والاحترافي عادةً ما بين 4 إلى 8 أسابيع من الإستراتيجية الأولية حتى الإطلاق النهائي. يعتمد الإطار الزمني الدقيق على نطاق المشروع، ومتطلبات الرسوم المتحركة المخصصة، وتكاملات نظام إدارة المحتوى (CMS). تضمن وكالتنا الرقمية تطويراً سريعاً دون التضحية بالجودة الممتازة أو معايير تحسين محركات البحث.'
            }
        },
        {
            question: {
                en: 'Do you provide ongoing support after launch?',
                de: 'Bieten Sie nach dem Start fortlaufenden Support an?',
                ar: 'هل تقدمون دعماً مستمراً بعد الإطلاق؟'
            },
            answer: {
                en: 'Yes, Legacy Solutions provides comprehensive post-launch support, proactive security monitoring, and continuous SEO maintenance. Our dedicated maintenance packages ensure your digital platform remains secure, fully updated, and performs optimally in search rankings. We handle all technical updates so you can focus entirely on scaling your business.',
                de: 'Ja, Legacy Solutions bietet umfassenden Post-Launch-Support, proaktives Sicherheitsmonitoring und kontinuierliche SEO-Wartung. Unsere maßgeschneiderten Wartungspakete stellen sicher, dass Ihre digitale Plattform sicher, aktuell und in den Suchrankings optimal performt. Wir kümmern uns um alle technischen Updates, damit Sie sich voll auf Ihr Geschäftswachstum konzentrieren können.',
                ar: 'نعم، تقدم Legacy Solutions دعماً شاملاً بعد الإطلاق، ومراقبة استباقية للأمان، وصيانة مستمرة لتحسين محركات البحث. تضمن باقات الصيانة المخصصة لدينا بقاء منصتك الرقمية آمنة ومحدثة بالكامل وتؤدي بشكل مثالي في تصنيفات البحث. نحن نتولى جميع التحديثات الفنية لتتمكن من التركيز كلياً على تنمية أعمالك.'
            }
        },
        {
            question: {
                en: 'What is your digital design and development process?',
                de: 'Wie sieht Ihr digitaler Design- und Entwicklungsprozess aus?',
                ar: 'ما هي عملية التصميم والتطوير الرقمي لديكم؟'
            },
            answer: {
                en: 'Our elite digital design process follows five strategic steps: comprehensive market discovery, high-fidelity wireframing, custom UI/UX design, full-stack development, and rigorous QA testing. By combining premium aesthetics with technical SEO best practices, we guarantee the final product drives conversions and elevates your brand authority globally.',
                de: 'Unser elitärer Designprozess folgt fünf strategischen Schritten: umfassende Marktanalyse, hochauflösendes Wireframing, individuelles UI/UX-Design, Full-Stack-Entwicklung und strenges QA-Testing. Durch die Kombination von Premium-Ästhetik mit technischen SEO-Best-Practices garantieren wir ein Endprodukt, das Conversions steigert und Ihre Markenautorität weltweit stärkt.',
                ar: 'تتبع عملية التصميم الرقمي لدينا خمس خطوات استراتيجية: اكتشاف شامل للسوق، التخطيط السلكي عالي الدقة، تصميم واجهة المستخدم وتجربة المستخدم المخصص، تطوير متكامل، واختبارات ضمان جودة صارمة. من خلال الجمع بين الجماليات الفائقة وأفضل الممارسات التقنية لتحسين محركات البحث، نضمن أن المنتج النهائي سيزيد من التحويلات ويرفع من مكانة علامتك التجارية عالمياً.'
            }
        },
        {
            question: {
                en: 'Can you help with SEO and digital marketing?',
                de: 'Können Sie bei SEO und digitalem Marketing helfen?',
                ar: 'هل يمكنكم المساعدة في تحسين محركات البحث والتسويق الرقمي؟'
            },
            answer: {
                en: 'Yes, technical SEO and data-driven digital marketing are core pillars of our agency. Every website we build includes advanced Schema.org structured data, Core Web Vitals optimization, and generative engine readiness (GEO). We launch targeted marketing campaigns designed to exponentially increase your organic traffic and B2B lead generation.',
                de: 'Ja, technisches SEO und datengetriebenes digitales Marketing sind Kernsäulen unserer Agentur. Jede von uns erstellte Website beinhaltet fortschrittliche Schema.org-Daten, Core Web Vitals-Optimierung und Generative Engine Readiness (GEO). Wir starten zielgerichtete Marketingkampagnen, die darauf ausgelegt sind, Ihren organischen Traffic und Ihre B2B-Lead-Generierung exponentiell zu steigern.',
                ar: 'نعم، يعد تحسين محركات البحث الفني والتسويق الرقمي القائم على البيانات من الركائز الأساسية لوكالتنا. يتضمن كل موقع نبنيه بيانات منظمة متقدمة من Schema.org، وتحسين مؤشرات أداء الويب الأساسية، والجاهزية لمحركات البحث التوليدية (GEO). نحن نطلق حملات تسويقية مستهدفة مصممة لزيادة حركة الزيارات العضوية وتوليد عملاء محتملين للشركات بشكل مضاعف.'
            }
        }
    ];

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index} className="space-y-0">
                        <button
                            type="button"
                            className={`w-full text-left bg-white p-6 border cursor-pointer transition-colors ${isOpen ? 'border-[#fce34d]' : 'border-gray-200 hover:border-[#fce34d]'}`}
                            onClick={() => toggleOpen(index)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-black text-sm md:text-base pr-8">
                                    {faq.question[lang]}
                                </h3>
                                <div className="text-gray-400 flex-shrink-0 transition-transform duration-300">
                                    {isOpen ? <Minus size={20} className="text-[#fce34d]" /> : <Plus size={20} />}
                                </div>
                            </div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    id={`faq-answer-${index}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-gray-500 text-[14px] mt-4 mb-6 px-6 leading-relaxed">
                                        {faq.answer[lang]}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
