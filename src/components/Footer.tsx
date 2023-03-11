import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import i18nextConfig from '../../next-i18next.config';
import LanguageSwitchLink from './LanguageSwitchLink';

export const Footer = () => {
  const router = useRouter();
  // @ts-ignore
  const { t } = useTranslation('footer');
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

  return (
    <footer>
      <p>{t('description')}</p>
      <p>
        {t('change-locale')}
        {i18nextConfig.i18n.locales.map((locale) => {
          if (locale === currentLocale) return null;
          return <LanguageSwitchLink locale={locale} key={locale} />;
        })}
      </p>
    </footer>
  );
};
