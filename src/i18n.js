import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';

import langEN from "./lang/en.json"
import langAr from "./lang/ar.json"
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
  
    resources: {
      en: {
        translation: langEN
      },
      ar: {
        translation: langAr
      }
    },
    fallbackLng: "en",

 detection:{
    order: [
        'htmlTag', 
         'cookie', 
         'localStorage', 
         'sessionStorage',
          'navigator',
           'path',
            'subdomain'],
    caches: ['localStorage', 'cookie'],
}
  });


