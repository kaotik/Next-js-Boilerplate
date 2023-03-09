import { Trans, useTranslation } from 'next-i18next';
import pkg from 'next-i18next/package.json';
import type { FC } from 'react';

export const Footer: FC = () => {
  // @ts-ignore
  const { t } = useTranslation('footer');

  return (
    <footer>
      <p>{t('description')}</p>
      <p>next-i18next v{pkg.version}</p>
      <p>
        <Trans i18nKey="helpLocize" t={t}>
          test
        </Trans>
      </p>
    </footer>
  );
};
