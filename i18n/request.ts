import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {

  let locale: string = (await requestLocale) ?? '';
 
  if (!locale || !routing.locales.includes(locale as "en" | "ka")) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});