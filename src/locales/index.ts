import en from './en';
import ko from './ko';

export default {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

export type Keys = keyof typeof ko;

export const keys = Object.fromEntries(
  Object.entries(ko).map(([key, _]) => {
    const k = key as Keys;
    return [k, k];
  }),
) as Record<Keys, Keys>;
