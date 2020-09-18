import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import resources from '../locales';

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'ko',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

const useLang = (key: TemplateStringsArray) => {
  const { t } = useTranslation();
  return t(key);
};

export default useLang;
