'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Language = 'en' | 'de' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, initialLang }: { children: React.ReactNode, initialLang: Language }) => {
  const [lang, setLangState] = useState<Language>(initialLang);
  const router = useRouter();

  useEffect(() => {
    // Sync state if initialLang changes from server
    setLangState(initialLang);
  }, [initialLang]);

  const handleSetLang = (newLang: Language) => {
    setLangState(newLang);
    document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    router.refresh();
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
