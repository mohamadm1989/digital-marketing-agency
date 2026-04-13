'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, ShieldCheck, X, Check } from 'lucide-react';
import { cookiesT as t } from '../i18n/cookies';

interface CookieConsentProps {
    lang: 'en' | 'de' | 'ar';
}

export default function CookieConsent({ lang }: CookieConsentProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem('ls_cookie_consent');
        if (!consent) {
            // Delay showing the banner for a premium feel
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const finalPrefs = { necessary: true, analytics: true, marketing: true };
        saveConsent(finalPrefs);
    };

    const handleAcceptNecessary = () => {
        const finalPrefs = { necessary: true, analytics: false, marketing: false };
        saveConsent(finalPrefs);
    };

    const handleSavePreferences = () => {
        saveConsent(preferences);
    };

    const saveConsent = (prefs: typeof preferences) => {
        localStorage.setItem('ls_cookie_consent', JSON.stringify({
            ...prefs,
            timestamp: new Date().toISOString()
        }));
        setIsVisible(false);
    };

    const isRTL = lang === 'ar';

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[9999]"
                >
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#fce34d]/10 rounded-full flex items-center justify-center">
                                    <Cookie className="text-[#fce34d]" size={20} />
                                </div>
                                <h3 className="text-white font-bold text-lg">{t.title[lang]}</h3>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-gray-500 hover:text-white transition-colors"
                                aria-label="Dismiss"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {!showSettings ? (
                                <>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                        {t.desc[lang]}
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <button
                                            onClick={handleAcceptAll}
                                            className="w-full bg-[#fce34d] text-black font-bold py-3 px-6 rounded-xl hover:bg-[#fbd900] transition-colors text-sm uppercase tracking-wide"
                                        >
                                            {t.acceptAll[lang]}
                                        </button>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={handleAcceptNecessary}
                                                className="flex-1 bg-white/5 text-white font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-[13px]"
                                            >
                                                {t.reject[lang]}
                                            </button>
                                            <button
                                                onClick={() => setShowSettings(true)}
                                                className="flex items-center justify-center gap-2 bg-white/5 text-white font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-[13px]"
                                            >
                                                <Settings size={14} />
                                                {t.settings[lang]}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-6">
                                    {/* Category: Necessary */}
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <div className="w-5 h-5 border-2 border-[#fce34d] rounded flex items-center justify-center bg-[#fce34d]/20 opacity-50 cursor-not-allowed">
                                                <Check className="text-[#fce34d]" size={12} strokeWidth={4} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1">{t.categories.necessary.title[lang]}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed">{t.categories.necessary.desc[lang]}</p>
                                        </div>
                                    </div>

                                    {/* Category: Analytics */}
                                    <label className="flex items-start gap-4 cursor-pointer group">
                                        <div className="mt-1 relative">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={preferences.analytics}
                                                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                            />
                                            <div className="w-5 h-5 border-2 border-white/20 rounded flex items-center justify-center transition-all peer-checked:bg-[#fce34d] peer-checked:border-[#fce34d] group-hover:border-[#fce34d]/50">
                                                {preferences.analytics && <Check className="text-black" size={12} strokeWidth={4} />}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1 group-hover:text-[#fce34d] transition-colors">{t.categories.analytics.title[lang]}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed">{t.categories.analytics.desc[lang]}</p>
                                        </div>
                                    </label>

                                    {/* Category: Marketing */}
                                    <label className="flex items-start gap-4 cursor-pointer group">
                                        <div className="mt-1 relative">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={preferences.marketing}
                                                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                            />
                                            <div className="w-5 h-5 border-2 border-white/20 rounded flex items-center justify-center transition-all peer-checked:bg-[#fce34d] peer-checked:border-[#fce34d] group-hover:border-[#fce34d]/50">
                                                {preferences.marketing && <Check className="text-black" size={12} strokeWidth={4} />}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1 group-hover:text-[#fce34d] transition-colors">{t.categories.marketing.title[lang]}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed">{t.categories.marketing.desc[lang]}</p>
                                        </div>
                                    </label>

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            onClick={() => setShowSettings(false)}
                                            className="flex-1 bg-white/5 text-white font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-sm"
                                        >
                                            {isRTL ? 'عودة' : 'Back'}
                                        </button>
                                        <button
                                            onClick={handleSavePreferences}
                                            className="flex-1 bg-[#fce34d] text-black font-bold py-3 px-4 rounded-xl hover:bg-[#fbd900] transition-colors text-sm"
                                        >
                                            {t.save[lang]}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Tag */}
                        <div className="px-6 py-4 bg-white/[0.02] flex items-center gap-2">
                            <ShieldCheck className="text-[#fce34d]/40" size={12} />
                            <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                                {isRTL ? 'Legacy Solutions حماية الخصوصية' : 'Legacy Solutions Privacy Protection'}
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
