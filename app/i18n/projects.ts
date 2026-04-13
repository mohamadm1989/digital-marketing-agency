import { ReactNode } from 'react';

export type LocalizedString = {
    en: string | ReactNode;
    de: string | ReactNode;
    ar: string | ReactNode;
};

export type ProjectContent = {
    slug: string;
    title: LocalizedString;
    category: LocalizedString;
    client: string;
    year: string;
    role: LocalizedString;
    heroImage: string;
    challenge: {
        title: LocalizedString;
        text: LocalizedString;
    };
    solution: {
        title: LocalizedString;
        text: LocalizedString;
        features: LocalizedString[];
    };
    results: {
        title: LocalizedString;
        metrics: {
            value: string;
            label: LocalizedString;
        }[];
    };
    gallery: { src: string; alt: LocalizedString }[];
    nextProject: {
        slug: string;
        title: LocalizedString;
        image: string;
    };
};

export const projectsData: Record<string, ProjectContent> = {
    'eco-ecommerce': {
        slug: 'eco-ecommerce',
        title: { en: 'Eco-Friendly E-commerce', de: 'Umweltfreundlicher E-Commerce', ar: 'تجارة إلكترونية صديقة للبيئة' },
        category: { en: 'Web Development', de: 'Webentwicklung', ar: 'تطوير الويب' },
        client: 'Lumina Naturals',
        year: '2023',
        role: { en: 'Full-Stack Development & Strategy', de: 'Full-Stack-Entwicklung & Strategie', ar: 'تطوير شامل واستراتيجيات' },
        heroImage: '/images/project-1.jpg',
        challenge: {
            title: { en: 'The Challenge', de: 'Die Herausforderung', ar: 'التحدي' },
            text: {
                en: 'Lumina Naturals had a growing social media presence but a conversion rate of under 1%. Their existing Shopify theme was too slow, resulting in mobile abandonment, and the brand\'s premium sustainable message was lost in a noisy layout.',
                de: 'Lumina Naturals verzeichnete ein wachsendes Social-Media-Publikum, aber eine Conversion-Rate von unter 1 %. Das bestehende Shopify-Theme war zu langsam, was zu hohen Abbruchraten auf Mobilgeräten führte, und die Premium-Botschaft der Marke ging in einem unruhigen Layout unter.',
                ar: 'كان لدى Lumina Naturals حضور متزايد على وسائل التواصل الاجتماعي ولكن بمعدل تحويل يقل عن 1٪. كان قالب Shopify الحالي بطيئاً جداً، مما أدى إلى تخلي المستخدمين عن الموقع عبر الهواتف، وضاعت رسالة العلامة التجارية المتميزة والمستدامة في تخطيط فوضوي.'
            }
        },
        solution: {
            title: { en: 'The Solution', de: 'Die Lösung', ar: 'الحل' },
            text: {
                en: 'We architected a custom headless e-commerce experience. By decoupling the frontend from Shopify, we achieved near-instant page loads. We implemented a minimalist, editorial-inspired design system that highlighted their product photography and simplified the checkout flow into just three steps.',
                de: 'Wir haben ein maßgeschneidertes Headless-E-Commerce-Erlebnis konzipiert. Durch die Entkopplung des Frontends von Shopify erreichten wir nahezu sofortige Ladezeiten. Wir implementierten ein minimalistisches, redaktionell inspiriertes Designsystem, das ihre Produktfotografie hervorhob und den Checkout-Prozess auf nur drei Schritte vereinfachte.',
                ar: 'لقد صممنا تجربة تجارة إلكترونية سلسة (headless) مخصصة. من خلال فصل الواجهة الأمامية عن Shopify، حققنا تحميل شبه فوري للصفحات. قمنا بتنفيذ نظام تصميم بسيط مستوحى من المجلات التحريرية، سلط الضوء على صور منتجاتهم وبسّط عملية الدفع لثلاث خطوات فقط.'
            },
            features: [
                { en: 'Headless Next.js Frontend', de: 'Headless Next.js Frontend', ar: 'واجهة أمامية (Headless) باستخدام Next.js' },
                { en: 'Sub-second Page Transitions', de: 'Seitenübergänge in Sekundenbruchteilen', ar: 'تنقل بين الصفحات في أجزاء من الثانية' },
                { en: 'Editorial Photography Focus', de: 'Redaktioneller Fotografie-Fokus', ar: 'تركيز على صور المنتجات بأسلوب تحريري' }
            ]
        },
        results: {
            title: { en: 'Impact', de: 'Wirkung', ar: 'التأثير' },
            metrics: [
                { value: '+140%', label: { en: 'Conversion Rate', de: 'Conversion-Rate', ar: 'معدل التحويل' } },
                { value: '0.8s', label: { en: 'Avg. Load Time', de: 'Durchschn. Ladezeit', ar: 'متوسط وقت التحميل' } },
                { value: '4.5x', label: { en: 'Mobile ROI', de: 'Mobiler ROI', ar: 'عائد الاستثمار للهواتف المحمولة' } }
            ]
        },
        gallery: [
            { src: '/images/web-development.jpg', alt: { en: 'Mockup 1', de: 'Mockup 1', ar: 'نموذج تصميم 1' } },
            { src: '/images/team-working.avif', alt: { en: 'Team Process', de: 'Teamprozess', ar: 'عملية الفريق' } }
        ],
        nextProject: {
            slug: 'fintech-app',
            title: { en: 'Modern FinTech App', de: 'Moderne FinTech-App', ar: 'تطبيق تكنولوجيا مالية حديث' },
            image: '/images/project-2.jpg'
        }
    },
    'fintech-app': {
        slug: 'fintech-app',
        title: { en: 'Modern FinTech App', de: 'Moderne FinTech-App', ar: 'تطبيق تكنولوجيا مالية حديث' },
        category: { en: 'UI/UX Design', de: 'UI/UX Design', ar: 'تصميم واجهة وتجربة المستخدم' },
        client: 'Vault Financial',
        year: '2024',
        role: { en: 'Product Design & Prototyping', de: 'Produktdesign & Prototyping', ar: 'تصميم المنتج والنماذج الأولية' },
        heroImage: '/images/project-2.jpg',
        challenge: {
            title: { en: 'The Challenge', de: 'Die Herausforderung', ar: 'التحدي' },
            text: {
                en: 'Vault wanted to build an investment tracking app for a younger demographic, but complex financial terminology and overwhelming dashboards were creating friction. Users were dropping off during the onboarding process because the app felt "too much like a spreadsheet."',
                de: 'Vault wollte eine Investment-Tracking-App für eine jüngere Zielgruppe entwickeln, aber komplexe Finanzterminologie und überladene Dashboards verursachten Reibungsverluste. Nutzer sprangen während des Onboardings ab, weil sich die App "zu sehr wie eine Tabellenkalkulation" anfühlte.',
                ar: 'أرادت Vault إنشاء تطبيق تتبع استثمارات لفئة شبابية، لكن المصطلحات المالية المعقدة ولوحات المعلومات المزدحمة كانت تخلق احتكاكاً. كان المستخدمون يتخلون عن التطبيق أثناء عملية التوجيه لأنه بدا لهم "مثل جدول بيانات معقد".'
            }
        },
        solution: {
            title: { en: 'The Solution', de: 'Die Lösung', ar: 'الحل' },
            text: {
                en: 'We stripped the interface down to its essentials. We created a "Cards" UI system that breaks complex financial data into bite-sized, swipeable insights, combined with bold, cinematic typography and soothing micro-interactions that make investing feel engaging rather than stressful.',
                de: 'Wir haben das Interface auf das Wesentliche reduziert. Wir entwickelten ein "Cards"-UI-System, das komplexe Finanzdaten in handliche, wischbare Erkenntnisse unterteilt. Kombiniert mit kräftiger Typografie und beruhigenden Mikrointeraktionen fühlt sich das Investieren weniger stressig an.',
                ar: 'قمنا بتجريد واجهة المستخدم إلى أساسياتها. ابتكرنا نظام بطاقات يقسم البيانات المالية المعقدة إلى رؤى بسيطة وسهلة القراءة والسحب، مصحوبة بخطوط سينمائية جريئة وتفاعلات دقيقة تجعل الاستثمار جذاباً بدلاً من كونه مرهقاً.'
            },
            features: [
                { en: 'Progressive Disclosure UX', de: 'Progressive Informationsfreigabe (UX)', ar: 'تجربة مستخدم تعتمد على الإفصاح التدريجي' },
                { en: 'Gamified Onboarding Flow', de: 'Gamifizierter Onboarding-Prozess', ar: 'مراحل توجيهية مدعمة بأسلوب الألعاب' },
                { en: 'Custom Financial Data viz', de: 'Individuelle Finanzdaten-Visualisierung', ar: 'عرض مرئي متخصص للبيانات المالية' }
            ]
        },
        results: {
            title: { en: 'Impact', de: 'Wirkung', ar: 'التأثير' },
            metrics: [
                { value: '3x', label: { en: 'Onboarding Completion', de: 'Onboarding-Abschluss', ar: 'اكتمال خطوات التوجيه' } },
                { value: '1.2M', label: { en: 'Active Users', de: 'Aktive Nutzer', ar: 'المستخدمين النشطين' } },
                { value: '#1', label: { en: 'App Store Finance', de: 'App Store Finanzen', ar: 'في متجر التطبيقات لقسم المالية' } }
            ]
        },
        gallery: [
            { src: '/images/ui-ux-design.avif', alt: { en: 'Interface Details', de: 'Interface-Details', ar: 'تفاصيل الواجهة' } },
            { src: '/images/team-member-2.jpg', alt: { en: 'User Testing', de: 'Nutzertests', ar: 'اختبار المستخدم' } }
        ],
        nextProject: {
            slug: 'real-estate',
            title: { en: 'Premium Real Estate', de: 'Premium-Immobilien', ar: 'عقارات فاخرة' },
            image: '/images/project-3.avif'
        }
    },
    'real-estate': {
        slug: 'real-estate',
        title: { en: 'Premium Real Estate Portfolio', de: 'Premium-Immobilienportfolio', ar: 'محفظة عقارات فاخرة' },
        category: { en: 'Digital Strategy', de: 'Digitale Strategie', ar: 'استراتيجية رقمية' },
        client: 'Aura Residences',
        year: '2024',
        role: { en: 'Creative Direction & Development', de: 'Kreativdirektion & Entwicklung', ar: 'الرؤية الإبداعية والتطوير' },
        heroImage: '/images/project-3.avif',
        challenge: {
            title: { en: 'The Challenge', de: 'Die Herausforderung', ar: 'التحدي' },
            text: {
                en: 'Selling $5M+ properties off-plan requires immense trust and vision. Aura Residences needed a digital presence that felt as luxurious and expansive as the physical architecture they were building. Standard property listings wouldn\'t suffice.',
                de: 'Der Verkauf von Immobilien im Wert von 5 Mio. USD+ vor Baubeginn erfordert immenses Vertrauen. Aura Residences benötigte eine digitale Präsenz, die so luxuriös ist wie ihre Architektur. Standard-Immobilienanzeigen reichten nicht aus.',
                ar: 'إن بيع عقارات تزيد قيمتها عن 5 ملايين دولار على الورق يتطلب ثقة ورؤية كبيرتين. كانت Aura Residences بحاجة إلى حضور رقمي يمنح إحساساً بالفخامة والاتساع المعماري للمشاريع التي يبنونها. لم تكن القوائم العقارية التقليدية كافية.'
            }
        },
        solution: {
            title: { en: 'The Solution', de: 'Die Lösung', ar: 'الحل' },
            text: {
                en: 'An immersive, WebGL-powered scroll experience. We used high-resolution architectural renders with deep parallax effects to create a sense of physical space. The typography and pacing mimicking a high-end editorial magazine, allowing the visuals to breathe.',
                de: 'Ein immersives, WebGL-gestütztes Scroll-Erlebnis. Wir nutzten hochauflösende Architektur-Renderings mit tiefen Parallax-Effekten, um ein Gefühl von Raum zu schaffen. Die Typografie und Rhythmus ahmen ein High-End-Magazin nach.',
                ar: 'تجربة تمرير غامرة مدعومة بتقنية WebGL. استخدمنا تصاميم معمارية عالية الدقة مع تأثيرات اختلاف المنظر (Parallax) لخلق إحساس بالمساحة المادية الفِعلية. حازت الطباعة وإيقاع العرض على نمط المجلات التحريرية الراقية، مما يتيح للصور أن تتحدث عن نفسها.'
            },
            features: [
                { en: 'WebGL Interactive Spaces', de: 'Interaktive WebGL-Räume', ar: 'مساحات تفاعلية بتقنية WebGL' },
                { en: 'Cinematic Scroll Routing', de: 'Kinoreifes Scroll-Routing', ar: 'تنقل سينمائي عبر التمرير' },
                { en: 'High-Fidelity Asset Pipeline', de: 'High-Fidelity Asset-Pipeline', ar: 'نظام أصول بدقة عالية' }
            ]
        },
        results: {
            title: { en: 'Impact', de: 'Wirkung', ar: 'التأثير' },
            metrics: [
                { value: '100%', label: { en: 'Units Pre-sold', de: 'Einheiten vorab verkauft', ar: 'الوحدات المبيعة مسبقاً' } },
                { value: '4m', label: { en: 'Avg. Time on Site', de: 'Durchschn. Verweildauer', ar: 'متوسط وقت التصفح' } },
                { value: '2', label: { en: 'Awwwards Won', de: 'Awwwards gewonnen', ar: 'حاز على جهازي Awwwards' } }
            ]
        },
        gallery: [
            { src: '/images/our-story.jpg', alt: { en: 'Property Render', de: 'Immobilien-Rendering', ar: 'تصميم عقاري' } },
            { src: '/images/contact-hero.avif', alt: { en: 'Location Shot', de: 'Standortaufnahme', ar: 'لقطة الموقع' } }
        ],
        nextProject: {
            slug: 'eco-ecommerce',
            title: { en: 'Eco-Friendly E-commerce', de: 'Umweltfreundlicher E-Commerce', ar: 'تجارة إلكترونية صديقة للبيئة' },
            image: '/images/project-1.jpg'
        }
    }
};

export const caseStudyT = {
    back: {
        en: 'Back to Work',
        de: 'Zurück zur Arbeit',
        ar: 'العودة إلى الأعمال'
    }
};
