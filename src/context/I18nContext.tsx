"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import pt from "../locales/pt.json";
import en from "../locales/en.json";

type Language = "pt" | "en";

interface I18nContextType {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "pt" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const getTranslation = (key: string): string => {
    const keys = key.split(".");
    let current: any = language === "pt" ? pt : en;
    
    for (const k of keys) {
      if (current[k] === undefined) {
        return key; // return key if not found
      }
      current = current[k];
    }
    
    return current;
  };

  // Avoid hydration mismatch by not rendering translations until mounted
  // or return an un-translated app initially (Next.js SSR vs client)
  // For a purely client context, we could wait, but we'll return as is.
  
  return (
    <I18nContext.Provider value={{ language, t: getTranslation, setLanguage: handleSetLanguage }}>
      <div className={!mounted ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
