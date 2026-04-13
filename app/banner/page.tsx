'use client';
import { useRef, useState, forwardRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';
import Logo from '../components/Logo';
import { Globe, Mail, Phone } from 'lucide-react';

export default function Banner() {
    const bannerRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    const downloadBannerPDF = async () => {
        if (!bannerRef.current) return;
        setIsExporting(true);
        try {
            // pixelRatio 2 makes it 3000x1600 (Super High Res Print Ready)
            const dataUrl = await htmlToImage.toPng(bannerRef.current, {
                quality: 1,
                pixelRatio: 2,
                backgroundColor: '#0f1423'
            });

            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [1500, 800]
            });

            pdf.addImage(dataUrl, 'PNG', 0, 0, 1500, 800);
            pdf.save('Legacy-Solutions-Aleppo-Banner.pdf');
        } catch (err) {
            console.error('Failed to export PDF', err);
            alert('حدث خطأ أثناء تصدير الـ PDF.');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center py-12 px-8 font-sans">

            {/* Tools Panel */}
            <div className="text-center mb-10 max-w-2xl bg-white p-8 rounded-2xl shadow-xl w-full">
                <h1 className="text-3xl font-bold mb-4">أداة تصدير اللافتة (PDF)</h1>
                <p className="text-gray-600 text-base mb-6">
                    انقر أدناه وسيقوم النظام بتصدير اللافتة (بمقاساتها الحقيقية الدقيقة 150×80 وتتضمن أرقام التواصل) كملف <b>PDF</b> فائق الدقة بضغطة زر واحدة!
                </p>
                <button
                    onClick={downloadBannerPDF}
                    disabled={isExporting}
                    className="bg-[#fce34d] text-black px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto shadow-xl disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
                >
                    {isExporting ? 'جاري تحويل ومعالجة الـ PDF...' : '📄 تحميل ملف اللافتة (PDF)'}
                </button>
            </div>

            {/* Browser Preview */}
            <div className="overflow-x-auto w-full flex justify-center custom-scrollbar pb-8">
                <div className="shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-md overflow-hidden bg-[#0f1423]">
                    <BannerContent ref={bannerRef} />
                </div>
            </div>

        </div>
    );
}

const BannerContent = forwardRef<HTMLDivElement, { className?: string }>(
    function BannerContentInner({ className = "" }, ref) {
        return (
            <div
                ref={ref}
                className={`relative shrink-0 flex flex-col items-center justify-center overflow-hidden bg-[#0f1423] ${className}`}
                style={{ width: '1500px', height: '800px' }}
            >
                {/* Subtle Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

                {/* Ambient Glow behind Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fce34d] opacity-[0.04] blur-[150px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-16 pb-16 pt-8">

                    {/* Massive Logo Top Centered */}
                    <Logo width={220} height={220} className="text-white drop-shadow-2xl mb-8" />

                    {/* English Title */}
                    <div className="flex justify-center gap-6 mb-6">
                        <span className="text-[85px] font-black tracking-widest text-[#fce34d] leading-none uppercase font-sans drop-shadow-lg">
                            LEGACY
                        </span>
                        <span className="text-[85px] font-black tracking-widest text-white leading-none uppercase font-sans drop-shadow-lg">
                            SOLUTIONS
                        </span>
                    </div>

                    {/* Arabic Title */}
                    <div className="mb-10 flex justify-center text-center drop-shadow-xl" dir="rtl">
                        <span className="text-[140px] font-black text-white leading-[1] font-cairo tracking-tight">
                            ليجاسي للحلول الرقمية
                        </span>
                    </div>

                    {/* Services List */}
                    <div className="flex justify-center items-center gap-10 w-full px-12 mx-auto border-t border-white/10 pt-10 mt-4 overflow-hidden" dir="rtl">
                        <Service text="تسويق رقمي" />
                        <Dot />
                        <Service text="تطوير مواقع" />
                        <Dot />
                        <Service text="إدارة محتوى" />
                        <Dot />
                        <Service text="تصميم واجهات" />
                    </div>
                </div>

                {/* Floating Contact Info at the absolute bottom edge */}
                <div className="absolute bottom-8 left-16 right-16 flex justify-between items-center text-white/80 font-sans tracking-widest text-[24px]" dir="rtl">

                    {/* Right side in Arabic context: Phone */}
                    <div className="flex items-center gap-4 bg-[#0f1423]/50 px-5 py-3 rounded" dir="ltr">
                        <span dir="ltr">+49 0176 41 31 50 59</span>
                        <Phone className="text-[#fce34d] w-7 h-7 shrink-0" />
                    </div>

                    {/* Middle: Email */}
                    <div className="flex items-center gap-4 bg-[#0f1423]/50 px-5 py-3 rounded" dir="ltr">
                        <span dir="ltr">hello@legacysolutions-agency.com</span>
                        <Mail className="text-[#fce34d] w-7 h-7 shrink-0" />
                    </div>

                    {/* Left side in Arabic context: Website */}
                    <div className="flex items-center gap-4 bg-[#0f1423]/50 px-5 py-3 rounded" dir="ltr">
                        <Globe className="text-[#fce34d] w-7 h-7 shrink-0" />
                        <span dir="ltr">legacysolutions-agency.com</span>
                    </div>

                </div>

            </div>
        );
    }
);

function Service({ text }: { text: string }) {
    return <span className="text-[34px] font-bold text-white/90 font-cairo tracking-wide drop-shadow-sm whitespace-nowrap shrink-0">{text}</span>;
}

function Dot() {
    return <span className="text-[#fce34d] text-4xl font-bold px-1 leading-none mt-2 drop-shadow-md shrink-0">•</span>;
}
