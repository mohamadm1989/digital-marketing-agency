'use client';
import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';
import Logo from '../components/Logo';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function BusinessCard() {
    const [nameEn, setNameEn] = useState('MOHAMAD');
    const [titleEn, setTitleEn] = useState('Founder & CEO');
    const [nameAr, setNameAr] = useState('محمد');
    const [titleAr, setTitleAr] = useState('المؤسس والمدير التنفيذي');

    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    const phone = '+49 0176 41 31 50 59';
    const email = 'hello@legacysolutions-agency.com';
    const website = 'legacysolutions-agency.com';

    const downloadCardsPDF = async () => {
        if (!frontRef.current || !backRef.current) return;
        setIsExporting(true);
        try {
            // Increase pixel ratio for extreme print quality (3.5x2 inches @ 8x = 2688x1536)
            const frontDataUrl = await htmlToImage.toPng(frontRef.current, { quality: 1, pixelRatio: 8 });
            const backDataUrl = await htmlToImage.toPng(backRef.current, { quality: 1, pixelRatio: 8 });

            // Create 3.5 x 2 inch precise PDF
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'in',
                format: [3.5, 2]
            });

            // Page 1: Front
            pdf.addImage(frontDataUrl, 'PNG', 0, 0, 3.5, 2);
            // Page 2: Back
            pdf.addPage([3.5, 2], 'landscape');
            // The Arabic side has #fce34d bg, but htmlToImage handles it perfectly.
            pdf.addImage(backDataUrl, 'PNG', 0, 0, 3.5, 2);

            pdf.save(`Business-Card-${nameEn}.pdf`);
        } catch (err) {
            console.error('Failed to export PDF', err);
            alert('حدث خطأ أثناء تصدير الكرت.');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-24 px-8 font-sans selection:bg-[#fce34d] selection:text-black">

            <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Editor Sidebar */}
                <div className="lg:col-span-4 bg-white p-6 rounded-xl shadow-lg border border-gray-200 font-cairo">
                    <h1 className="text-xl font-black mb-2 tracking-tight">استوديو كرت الفيزيت</h1>
                    <p className="text-gray-500 text-xs mb-4 font-medium">
                        قم بتعديل بياناتك هنا وسيتم تحديث الكرت فوراً.
                    </p>

                    <button
                        onClick={downloadCardsPDF}
                        disabled={isExporting}
                        className="w-full bg-[#fce34d] text-black px-4 py-3 rounded-lg font-bold text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-md disabled:opacity-50 mb-6"
                        dir="rtl"
                    >
                        {isExporting ? 'جاري تحضير الجودة العالية...' : '📄 تحميل الكرتين كملف PDF'}
                    </button>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Name (English)</label>
                            <input
                                type="text"
                                value={nameEn}
                                onChange={(e) => setNameEn(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black transition-colors font-bold"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Title (English)</label>
                            <input
                                type="text"
                                value={titleEn}
                                onChange={(e) => setTitleEn(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                            />
                        </div>
                        <hr className="border-gray-200" />
                        <div dir="rtl">
                            <label className="block text-xs font-bold text-gray-700 mb-1 font-cairo">الاسم (بالعربي)</label>
                            <input
                                type="text"
                                value={nameAr}
                                onChange={(e) => setNameAr(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black transition-colors font-cairo font-bold"
                            />
                        </div>
                        <div dir="rtl">
                            <label className="block text-xs font-bold text-gray-700 mb-1 font-cairo">المنصب (بالعربي)</label>
                            <input
                                type="text"
                                value={titleAr}
                                onChange={(e) => setTitleAr(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black transition-colors font-cairo"
                            />
                        </div>
                    </div>
                </div>

                {/* Card Previews */}
                <div className="lg:col-span-8 flex flex-col items-center gap-10">

                    {/* Front Side (English) - Dark Theme */}
                    <div className="group relative font-cairo">
                        <span className="absolute -top-6 left-0 text-[10px] uppercase tracking-widest text-gray-400 font-bold">الوجه الأمامي (إنجليزي)</span>
                        <div
                            ref={frontRef}
                            className="relative overflow-hidden bg-[#050505] shadow-2xl shrink-0"
                            style={{ width: '3.5in', height: '2in', padding: '0.25in' }}
                        >
                            {/* Subtle Glowing Accent */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#fce34d] opacity-20 blur-3xl rounded-full transition-all group-hover:scale-110"></div>

                            <div className="flex flex-col h-full justify-between relative z-10">
                                {/* Top: Logo & Brand + QR Code */}
                                <div className="flex justify-between items-start w-full">
                                    <img
                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${website}&color=ffffff&bgcolor=050505`}
                                        alt="Scan to visit website"
                                        crossOrigin="anonymous"
                                        className="w-[36px] h-[36px] opacity-80"
                                    />
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col items-end">
                                            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white leading-none mt-1">Legacy Solutions</span>
                                        </div>
                                        <Logo width={28} height={28} className="text-white" />
                                    </div>
                                </div>

                                {/* Middle: Name & Title - Real English Left Alignment */}
                                <div className="mt-4 text-left">
                                    <h2 className="text-white text-lg font-bold tracking-wider">{nameEn}</h2>
                                    <p className="text-[#fce34d] text-[7px] font-bold uppercase tracking-[0.2em] mt-0.5">{titleEn}</p>
                                </div>

                                {/* Bottom: Contact Info */}
                                <div className="mt-auto flex justify-between items-end">
                                    <div className="flex flex-col gap-1.5 items-start">
                                        <div className="flex items-center gap-2 text-gray-400 leading-none text-left">
                                            <MapPin size={10} className="text-[#fce34d] shrink-0" />
                                            <span className="text-[7px] tracking-wider uppercase whitespace-nowrap">Herne, DE | Aleppo, SY</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 leading-none">
                                            <Globe size={10} className="text-[#fce34d] shrink-0" />
                                            <span className="text-[7px] tracking-wider whitespace-nowrap">{website}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1.5">
                                        <div className="flex items-center gap-2 text-gray-400 leading-none">
                                            <span className="text-[7px] tracking-wider whitespace-nowrap">{phone}</span>
                                            <Phone size={10} className="text-[#fce34d] shrink-0" />
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 leading-none">
                                            <span className="text-[7px] tracking-wider whitespace-nowrap">{email}</span>
                                            <Mail size={10} className="text-[#fce34d] shrink-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back Side (Arabic) - Yellow Theme for contrast */}
                    <div className="group relative font-cairo">
                        <span className="absolute -top-6 right-0 text-[10px] uppercase tracking-widest text-gray-400 font-bold">الوجه الخلفي (عربي)</span>
                        <div
                            ref={backRef}
                            className="relative overflow-hidden bg-[#fce34d] shadow-2xl shrink-0"
                            style={{ width: '3.5in', height: '2in', padding: '0.25in' }}
                            dir="rtl"
                        >
                            {/* Subtle Accent */}
                            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white opacity-40 blur-3xl rounded-full transition-all pointer-events-none"></div>
                            <div className="absolute top-0 right-0 w-[0.1in] h-full bg-[#050505]"></div>

                            <div className="flex flex-col h-full justify-between relative z-10 pr-2">
                                {/* Top: Logo & Brand + QR Code */}
                                <div className="flex justify-between items-start w-full" dir="ltr">
                                    <img
                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${website}&color=000000&bgcolor=fce34d`}
                                        alt="Scan to visit website"
                                        crossOrigin="anonymous"
                                        className="w-[36px] h-[36px] opacity-80 mix-blend-darken"
                                    />
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col items-end">
                                            <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-black font-sans leading-none mt-1">LEGACY SOLUTIONS</span>
                                        </div>
                                        <Logo width={28} height={28} className="text-black" />
                                    </div>
                                </div>

                                {/* Middle: Name & Title */}
                                <div className="mt-4 font-cairo text-right">
                                    <h2 className="text-black text-lg font-bold tracking-tight">{nameAr}</h2>
                                    <p className="text-black/70 text-[8px] font-bold uppercase tracking-widest mt-0.5">{titleAr}</p>
                                </div>

                                {/* Bottom: Contact Info */}
                                <div className="mt-auto flex justify-between items-end font-cairo" dir="ltr">
                                    <div className="flex flex-col gap-1.5 items-start">
                                        <div className="flex items-center gap-2 text-black/80 leading-none text-left">
                                            <MapPin size={10} className="text-black shrink-0" />
                                            <span className="text-[7px] font-bold tracking-wider whitespace-nowrap">هيرنه، ألمـانيا | حلــب، سـوريا</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-black/80 leading-none">
                                            <Globe size={10} className="text-black shrink-0" />
                                            <span className="text-[7px] font-sans tracking-wider whitespace-nowrap">{website}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5 items-end">
                                        <div className="flex items-center gap-2 text-black/80 leading-none">
                                            <span className="text-[7px] font-sans tracking-wider whitespace-nowrap">{phone}</span>
                                            <Phone size={10} className="text-black shrink-0" />
                                        </div>
                                        <div className="flex items-center gap-2 text-black/80 leading-none">
                                            <span className="text-[7px] font-sans tracking-wider truncate whitespace-nowrap">{email}</span>
                                            <Mail size={10} className="text-black shrink-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
