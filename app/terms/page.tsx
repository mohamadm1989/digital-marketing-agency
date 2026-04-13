import { cookies } from 'next/headers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service — Legacy Solutions Digital Agency',
    description: 'Our terms of service and acceptable use policy for accessing and working with Legacy Solutions Digital Agency.',
};

export default async function TermsOfService() {
    const cookieStore = await cookies();
    const lang = (cookieStore.get('lang')?.value as 'en' | 'de' | 'ar') || 'en';

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#fce34d] selection:text-black">


            <main className="max-w-4xl mx-auto px-8 py-32 mt-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    {lang === 'en' ? 'Terms of Service' : 'Nutzungsbedingungen'}
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="text-sm text-gray-500 mb-8">
                        {lang === 'en' ? 'Last Updated: October 2023' : 'Zuletzt aktualisiert: Oktober 2023'}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">
                            {lang === 'en' ? '1. Agreement to Terms' : '1. Zustimmung zu den Bedingungen'}
                        </h2>
                        <p className="mb-4">
                            {lang === 'en'
                                ? 'By viewing or accessing this website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.'
                                : 'Durch das Anzeigen oder Zugreifen auf diese Website stimmen Sie zu, an diese Nutzungsbedingungen gebunden zu sein. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, dürfen Sie nicht auf den Dienst zugreifen.'}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">
                            {lang === 'en' ? '2. Intellectual Property' : '2. Geistiges Eigentum'}
                        </h2>
                        <p className="mb-4">
                            {lang === 'en'
                                ? 'The content, design, and branding on this website are owned by Legacy Solutions Digital Agency and are protected by international copyright and intellectual property laws.'
                                : 'Der Inhalt, das Design und das Branding dieser Website sind Eigentum der Legacy Solutions Digital Agency und durch internationale Urheber- und Gesetze zum geistigen Eigentum geschützt.'}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">
                            {lang === 'en' ? '3. Limitation of Liability' : '3. Haftungsbeschränkung'}
                        </h2>
                        <p className="mb-4">
                            {lang === 'en'
                                ? 'In no event shall Legacy Solutions Digital Agency be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the Website.'
                                : 'In keinem Fall haftet Legacy Solutions Digital Agency für indirekte, zufällige, besondere, Folge- oder Strafschäden, die sich aus Ihrem Zugriff auf die Website oder deren Nutzung ergeben.'}
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">
                            {lang === 'en' ? '4. Governing Law' : '4. Anwendbares Recht'}
                        </h2>
                        <p className="mb-4">
                            {lang === 'en'
                                ? 'These terms shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.'
                                : 'Diese Bedingungen unterliegen den Gesetzen Deutschlands und werden in Übereinstimmung mit diesen ausgelegt, ohne Rücksicht auf die kollisionsrechtlichen Bestimmungen.'}
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
