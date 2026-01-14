import {
    createI18nApi,
    declareComponentKeys
} from "i18nifty";
import { fallbackLanguage, languages } from "./types";
import { ComponentKey } from "./types";
export { declareComponentKeys };

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    $lang,
    useResolveLocalizedString,
    I18nFetchingSuspense,
    getTranslation,
    $readyLang
} = createI18nApi<ComponentKey>()(
    {
        languages,
        fallbackLanguage
    },
    {
        "en": () => import("./resources/en.json").then(m => m.default),
        "fr": () => import("./resources/fr.json").then(m => m.default),
    }
);