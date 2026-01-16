import { createContext, useContext, useMemo, useState } from "react";

export const languages = ["en", "fr"] as const;
export type Lang = (typeof languages)[number];

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  languages: readonly Lang[];
};

const LangContext = createContext<LangContextValue | undefined>(undefined);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");
  const value = useMemo(() => ({ lang, setLang, languages }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }
  return ctx;
}
