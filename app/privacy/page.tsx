import { cookies } from 'next/headers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy — Legacy Solutions Digital Agency',
    description: 'Our privacy policy detailing how we handle, process, and protect your personal data in compliance with standard regulations.',
};

export default async function PrivacyPolicy() {
    const cookieStore = await cookies();
    const lang = (cookieStore.get('lang')?.value as 'en' | 'de' | 'ar') || 'en';

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#fce34d] selection:text-black">


            <main className="max-w-4xl mx-auto px-8 py-32 mt-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    {lang === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'}
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="text-sm text-gray-500 mb-8">
                        {lang === 'en' ? 'Last Updated: October 2023' : 'Zuletzt aktualisiert: Oktober 2023'}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">
                            {lang === 'en' ? '1. Information We Collect' : '1. Informationen, die wir sammeln'}
                        </h2>
                        <p className="mb-4">
                            {lang === 'en'
                                ? 'We collect information you provide directly to us when you fill out a form, request customer support, or otherwise communicate with us. The types of information we may collect include your name, email address, phone number, and any other information you choose to provide.'
                                : 'Wir erfassen Informationen, die Sie uns direkt zur Verfügung stellen, wenn Sie ein Formular ausfüllen, Kundensupport anfordern oder anderweitig mit uns kommunizieren. Zu den Arten von Informationen, die wir erfassen können, gehören Ihr Name, Ihre E-Mail-Adresse, Ihre Telefonnummer und alle anderen Informationen, die Sie uns mitteilen.'}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">
                            {lang === 'en' ? '2. How We Use Information' : '2. Wie wir Informationen verwenden'}
                        </h2>
                        <p className="mb-4">
                            {lang === 'en'
                                ? 'We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience. We do not sell or rent your personal information to third parties.'
                                : 'Wir verwenden die von uns erfassten Informationen, um unsere Dienste bereitzustellen, zu warten und zu verbessern, mit Ihnen zu kommunizieren und Ihr Erlebnis zu personalisieren. Wir verkaufen oder vermieten Ihre persönlichen Daten nicht an Dritte.'}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">
                            {lang === 'en' ? '3. Data Security' : '3. Datensicherheit'}
                        </h2>
                        <p className="mb-4">
                            {lang === 'en'
                                ? 'We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.'
                                : 'Wir ergreifen angemessene Maßnahmen, um Informationen über Sie vor Verlust, Diebstahl, Missbrauch und unbefugtem Zugriff, Offenlegung, Änderung und Zerstörung zu schützen.'}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">
                            {lang === 'en' ? '4. Contact Us' : '4. Kontaktieren Sie uns'}
                        </h2>
                        <p className="mb-4">
                            {lang === 'en'
                                ? 'If you have any questions about this Privacy Policy, please contact us at info@legacysolutions-agency.com.'
                                : 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter info@legacysolutions-agency.com.'}
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
