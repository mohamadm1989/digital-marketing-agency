'use client';
import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';
import Logo from '../components/Logo';
import { Mail, Phone, Globe, MapPin, Receipt, FileText, Quote as QuoteIcon } from 'lucide-react';

type DocType = 'invoice' | 'letterhead' | 'quote' | 'receipt';

export default function StationeryStudio() {
    const [docType, setDocType] = useState<DocType>('invoice');

    // Document State
    const [invoiceNo, setInvoiceNo] = useState('INV-2026-001');
    const [quoteNo, setQuoteNo] = useState('QT-2026-042');
    const [receiptNo, setReceiptNo] = useState('REC-2026-015');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [clientName, setClientName] = useState('شركة العميل الدولية');
    const [clientEmail, setClientEmail] = useState('contact@client.com');

    // For Receipt specific State
    const [paymentMethod, setPaymentMethod] = useState('تحويل بنكي / Bank Transfer');
    const [receiptAmount, setReceiptAmount] = useState('2500');

    const [items, setItems] = useState([
        { id: 1, desc: 'تطوير موقع إلكتروني احترافي (Next.js)', qty: 1, price: 2500 },
        { id: 2, desc: 'صناعة هوية بصرية كاملة', qty: 1, price: 1200 },
        { id: 3, desc: 'إدارة حملات جوجل الإعلانية (شهر)', qty: 1, price: 500 },
    ]);

    const docRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    const total = items.reduce((sum, item) => sum + (item.qty * item.price), 0);

    const downloadA4PDF = async () => {
        if (!docRef.current) return;
        setIsExporting(true);
        try {
            const dataUrl = await htmlToImage.toPng(docRef.current, {
                quality: 1,
                pixelRatio: 4, // Ultra-sharp precision
            });

            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            pdf.addImage(dataUrl, 'PNG', 0, 0, 210, 297);
            pdf.save(`Legacy-Solutions-${docType}-${invoiceNo}.pdf`);
        } catch (err) {
            console.error('Failed to export PDF', err);
            alert('حدث خطأ أثناء التصدير.');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-100 flex flex-col items-center py-12 px-4 font-sans text-[#0f1423]">

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Editor Panel */}
                <div className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 sticky top-10">
                    <h1 className="text-2xl font-black mb-1">استوديو الهوية الورقية</h1>
                    <p className="text-gray-400 text-xs mb-8">Agency Business Suite v1.0</p>

                    <div className="grid grid-cols-2 gap-2 mb-8 bg-neutral-50 p-1.5 rounded-xl">
                        <TypeTab active={docType === 'invoice'} onClick={() => setDocType('invoice')} label="فاتورة" icon={<Receipt size={14} />} />
                        <TypeTab active={docType === 'quote'} onClick={() => setDocType('quote')} label="عرض سعر" icon={<QuoteIcon size={14} />} />
                        <TypeTab active={docType === 'receipt'} onClick={() => setDocType('receipt')} label="وصل قبض" icon={<FileText size={14} />} />
                        <TypeTab active={docType === 'letterhead'} onClick={() => setDocType('letterhead')} label="ورق رسمي" icon={<Mail size={14} />} />
                    </div>

                    <button
                        onClick={downloadA4PDF}
                        disabled={isExporting}
                        className="w-full bg-[#fce34d] text-black px-4 py-4 rounded-xl font-black text-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-yellow-200 disabled:opacity-50 mb-8 border-2 border-black/5"
                    >
                        {isExporting ? 'جاري تصدير PDF...' : '📄 تحميل المستند (A4 PDF)'}
                    </button>

                    <div className="space-y-6" dir="rtl">
                        <SectionHeader title="المعلومات الأساسية" />

                        <div className="grid grid-cols-2 gap-4">
                            <Input label="تاريخ المستند" value={date} onChange={setDate} />
                            {docType === 'invoice' && <Input label="رقم الفاتورة" value={invoiceNo} onChange={setInvoiceNo} />}
                            {docType === 'quote' && <Input label="رقم عرض السعر" value={quoteNo} onChange={setQuoteNo} />}
                            {docType === 'receipt' && <Input label="رقم الإيصال" value={receiptNo} onChange={setReceiptNo} />}
                        </div>

                        <Input label="اسم العميل / الشركة" value={clientName} onChange={setClientName} />
                        <Input label="البريد الإلكتروني للعميل" value={clientEmail} onChange={setClientEmail} />

                        {docType === 'receipt' && (
                            <div className="pt-2 space-y-4">
                                <SectionHeader title="تفاصيل السند" />
                                <Input label="المبلغ المستلم" value={receiptAmount} onChange={setReceiptAmount} />
                                <Input label="طريقة الدفع" value={paymentMethod} onChange={setPaymentMethod} />
                            </div>
                        )}

                        {(docType === 'invoice' || docType === 'quote') && (
                            <p className="text-[10px] text-gray-400 mt-4 leading-relaxed italic">
                                * يمكنك إضافة العناصر يدوياً في الكود أو تعديلها هنا برمجياً لسهولة التخصيص.
                            </p>
                        )}
                    </div>
                </div>

                {/* A4 Preview */}
                <div className="lg:col-span-8 flex justify-center overflow-x-auto pb-20">
                    <div className="shadow-[0_40px_80px_rgba(0,0,0,0.2)] bg-white shrink-0 group">
                        <div
                            ref={docRef}
                            className="bg-white relative overflow-hidden"
                            style={{ width: '794px', height: '1123px' }}
                        >
                            {/* Visual Accents */}
                            <div className="h-6 w-full bg-[#0f1423] absolute top-0 left-0"></div>
                            <div className="h-1.5 w-full bg-[#fce34d] absolute top-6 left-0"></div>

                            {/* Precise Header - Forced LTR to keep Branding Right / Contact Left */}
                            <div className="pt-20 pb-12 px-16 flex justify-between items-start border-b border-gray-50 bg-white" dir="ltr">
                                {/* Left Side: Contact Info */}
                                <div className="space-y-6 mt-2 flex flex-col items-start min-w-[200px]">
                                    <div className="flex flex-col items-start space-y-2">
                                        <div className="flex items-center gap-3 justify-start text-black font-black uppercase tracking-widest text-[10px] mb-2 font-sans">
                                            <span className="w-6 h-0.5 bg-[#fce34d]"></span> contact info
                                        </div>
                                        <ContactRow icon={<Globe size={13} />} text="legacysolutions-agency.com" />
                                        <ContactRow icon={<Mail size={13} />} text="hello@legacysolutions-agency.com" />
                                        <ContactRow icon={<Phone size={13} />} text="+49 0176 41 31 50 59" />
                                    </div>
                                </div>

                                {/* Right Side: Branding & Focus */}
                                <div className="flex flex-col items-end gap-6 text-right" dir="ltr">
                                    <div className="flex items-center gap-5 justify-end">
                                        <div className="text-right">
                                            <h1 className="text-[32px] font-black text-[#0f1423] tracking-tighter font-cairo leading-none mb-1" dir="rtl">ليجاسي للحلول الرقمية</h1>
                                            <p className="text-[#cbb210] font-black text-[12px] tracking-[0.2em] uppercase font-sans">L E G A C Y &nbsp; S O L U T I O N S</p>
                                        </div>
                                        <Logo width={52} height={52} className="text-[#0f1423] shrink-0" />
                                    </div>

                                    <div className="flex flex-col items-end text-right mr-1">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 font-sans">Our Focus</span>
                                        <p className="text-[11px] text-gray-600 font-cairo border-r-2 border-[#fce34d] pr-3 leading-relaxed text-right" dir="rtl">التسويق الرقمي وتطوير الأنظمة البرمجية</p>
                                    </div>
                                </div>
                            </div>

                            {/* Document Content */}
                            <div className="px-16 pt-12 flex-1">
                                {docType === 'invoice' || docType === 'quote' ? (
                                    <>
                                        <div className="flex justify-between items-baseline mb-12">
                                            <div className="text-left">
                                                <h2 className="text-[52px] font-black text-[#0f1423] tracking-tighter leading-none mb-1">
                                                    {docType === 'invoice' ? 'INVOICE' : 'QUOTATION'}
                                                </h2>
                                                <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-xs font-cairo">
                                                    {docType === 'invoice' ? 'فاتورة ضريبية رسمية' : 'عرض سعر وخدمات برمجية'}
                                                </p>
                                            </div>
                                            <div className="text-right flex gap-10">
                                                <div>
                                                    <p className="text-[9px] text-gray-400 font-black uppercase mb-1">Issue Date</p>
                                                    <p className="text-sm font-black text-[#0f1423]">{date}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[9px] text-gray-400 font-black uppercase mb-1">Serial No.</p>
                                                    <p className="text-sm font-black text-[#0f1423]">{docType === 'invoice' ? invoiceNo : quoteNo}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-14 grid grid-cols-2 gap-8" dir="rtl">
                                            <div className="p-6 flex flex-col justify-center border-r-2 border-[#fce34d] text-right">
                                                <p className="text-[10px] text-[#0f1423] font-black uppercase mb-1">Legacy Agency Status</p>
                                                <p className="text-[11px] text-gray-500 font-cairo leading-relaxed">
                                                    هذه الوثيقة رسمية ومعتمدة من قبل طاقم الإدارة ومحاسبة الوكالة.
                                                </p>
                                            </div>
                                            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 font-cairo text-right">
                                                <p className="text-[10px] text-gray-400 font-black uppercase mb-3 border-b border-gray-200 pb-2">سند المديونية إلى / Billed To</p>
                                                <h3 className="text-xl font-black text-[#0f1423] mb-1 font-cairo">{clientName}</h3>
                                                <p className="text-xs text-gray-500 font-sans">{clientEmail}</p>
                                            </div>
                                        </div>

                                        {/* Dynamic Table */}
                                        <div className="mb-12" dir="rtl">
                                            <div className="grid grid-cols-12 gap-4 border-b-2 border-[#0f1423] pb-4 mb-4 text-[10px] font-black text-[#0f1423] uppercase tracking-widest">
                                                <div className="col-span-6 font-cairo pr-2">وصف الخدمة (Service Details)</div>
                                                <div className="col-span-2 text-center font-cairo">السعر (Price)</div>
                                                <div className="col-span-2 text-center font-cairo">الكمية (Qty)</div>
                                                <div className="col-span-2 text-left pl-2 font-cairo">المجموع (Total)</div>
                                            </div>

                                            {items.map((item) => (
                                                <div key={item.id} className="grid grid-cols-12 gap-4 py-5 border-b border-neutral-50 text-sm items-center hover:bg-neutral-50 transition-colors">
                                                    <div className="col-span-6 font-bold text-[#0f1423] font-cairo pr-2">{item.desc}</div>
                                                    <div className="col-span-2 text-center font-medium text-gray-600">€{item.price}</div>
                                                    <div className="col-span-2 text-center font-medium text-gray-600">{item.qty}</div>
                                                    <div className="col-span-2 text-left font-black text-[#0f1423] pl-2">€{item.qty * item.price}</div>
                                                </div>
                                            ))}

                                            <div className="grid grid-cols-12 gap-4 mt-8 pt-4">
                                                <div className="col-span-7 pr-2 font-cairo">
                                                    <p className="text-[11px] font-bold text-[#0f1423] mb-2 underline decoration-[#fce34d] decoration-4 underline-offset-4">الملاحظات القانونية والمالية:</p>
                                                    <p className="text-[10px] text-gray-400 leading-relaxed">
                                                        - الأسعار المذكورة أعلاه في {docType === 'quote' ? 'عرض السعر' : 'الفاتورة'} تشمل الدعم الفني لمدة 3 أشهر. <br />
                                                        - يتم تحويل المبالغ المستحقة لخدمات الوكالة عن طريق التحويل البنكي حصراً.
                                                    </p>
                                                </div>
                                                <div className="col-span-5 bg-[#0f1423] text-white p-6 rounded-3xl flex justify-between items-center shadow-2xl relative overflow-hidden group">
                                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#fce34d] opacity-10 rounded-full -mr-12 -mt-12"></div>
                                                    <div className="flex flex-col relative z-10">
                                                        <span className="font-black text-[9px] uppercase tracking-[0.2em] text-[#fce34d]">Final Due Sum</span>
                                                        <span className="font-bold text-[18px] text-white font-cairo mt-1">الإجمالي المستحق</span>
                                                    </div>
                                                    <span className="text-[34px] font-black font-sans text-white relative z-10">€{total}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : docType === 'receipt' ? (
                                    <div className="pt-10" dir="rtl">
                                        <h2 className="text-[42px] font-black text-[#0f1423] mb-1 font-cairo">إيصال استلام نقدية</h2>
                                        <p className="text-gray-400 font-black uppercase text-xs tracking-[0.4em] border-b-2 border-[#fce34d] pb-4 mb-12">Payment Receipt Voucher</p>

                                        <div className="space-y-10 text-[18px] leading-loose text-gray-700 font-cairo">
                                            <p>وصلنا من السيد/السادة: <span className="font-black text-[#0f1423] px-4 border-b-2 border-dashed border-gray-300 mx-2">{clientName}</span> الموقرين.</p>
                                            <p>مبلغاً وقدره: <span className="font-black text-[#0f1423] px-4 border-b-2 border-dashed border-gray-300 mx-2">€{receiptAmount} يورو</span></p>
                                            <p>وذلك عن طريق: <span className="font-black text-[#0f1423] px-4 border-b-2 border-dashed border-gray-300 mx-2">{paymentMethod}</span></p>
                                            <p>لقاء تقديم خدمات: <span className="font-black text-[#0f1423] px-4 border-b-2 border-dashed border-gray-300 mx-2">أعمال برمجية وتسويقية متكاملة كما هو موضح بالتعاقد</span></p>
                                        </div>

                                        <div className="mt-24 flex justify-between items-start">
                                            <div className="text-center w-48 border-t-2 border-gray-100 pt-4">
                                                <p className="text-xs text-gray-400 font-bold uppercase mb-2">Accounting Seal</p>
                                                <div className="w-24 h-24 bg-neutral-50 rounded-full mx-auto flex items-center justify-center border-2 border-dashed border-gray-200">
                                                    <Logo width={40} height={40} className="opacity-10" />
                                                </div>
                                            </div>
                                            <div className="text-center w-64 border-t-2 border-[#fce34d] pt-4">
                                                <p className="text-xs text-[#0f1423] font-black uppercase mb-1">Legacy Solutions CEO</p>
                                                <p className="text-sm font-black text-[#0f1423] mb-6">MOHAMAD</p>
                                                <div className="italic font-serif text-3xl text-gray-300">Mohamad Signature</div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {/* Floating Logo Watermark for Letterhead */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                                            <Logo width={650} height={650} className="text-[#0f1423]" />
                                        </div>
                                        <div className="p-20 text-gray-200 font-cairo text-sm text-center border-2 border-dashed border-gray-100 rounded-[50px] mt-40 font-cairo">
                                            مساحة فارغة مخصصة لمحتوى الكتب الرسمية والعقود...
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Sticky Footer Info - Swapped Columns with Real English Alignment */}
                            <div className="absolute bottom-0 left-0 w-full pt-8 pb-14 px-16 border-t border-neutral-50 text-[10px] text-gray-400 flex justify-between items-end bg-white" dir="rtl">
                                <div className="text-left font-sans space-y-1" dir="ltr">
                                    <p className="font-black text-[#0f1423] mb-2 uppercase tracking-widest text-[9px]">Official Banking details (IBAN):</p>
                                    <p className="font-black text-gray-800">DE12 3456 7890 0000 1234 56</p>
                                    <p className="text-gray-400">BIC: DEUTDED1XXX | BANK: Deutsche Bank AG</p>
                                </div>
                                <div className="font-cairo space-y-1 text-left" dir="ltr">
                                    <p className="font-black text-[#0f1423] mb-2 uppercase tracking-widest text-[9px]">Registered Offices:</p>
                                    <p className="flex items-center gap-2 font-medium justify-start"><MapPin size={10} className="text-[#fce34d]" /> <span className="font-bold">Germany:</span> Westring 124, 44629 Herne. </p>
                                    <p className="flex items-center gap-2 font-medium justify-start"><MapPin size={10} className="text-[#fce34d]" /> <span className="font-bold">Syria:</span> Al-Shahbaa Quarter, Aleppo. </p>
                                </div>
                            </div>

                            {/* Visual Stripe Bottom */}
                            <div className="h-3 w-full bg-[#fce34d] absolute bottom-0 left-0 opacity-40"></div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function TypeTab({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon: React.ReactNode }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${active ? 'bg-white text-[#0f1423] shadow-md ring-1 ring-black/5' : 'text-gray-400 hover:text-black hover:bg-white/50'}`}
        >
            {icon}
            <span className="font-cairo">{label}</span>
        </button>
    );
}

function SectionHeader({ title }: { title: string }) {
    return <h3 className="font-black border-b-2 border-neutral-100 pb-2 mb-4 text-xs text-[#0f1423] font-cairo flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#fce34d] rounded-full"></span> {title}
    </h3>;
}

function Input({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
    return (
        <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-1.5 px-1 font-cairo">{label}</label>
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 px-4 py-2.5 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fce34d] focus:border-transparent transition-all font-medium font-cairo shadow-sm"
            />
        </div>
    );
}

function ContactRow({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <p className="text-[11px] flex items-center gap-2.5 text-gray-600 font-medium">
            <span className="text-[#fce34d]">{icon}</span> <span dir="ltr">{text}</span>
        </p>
    );
}
