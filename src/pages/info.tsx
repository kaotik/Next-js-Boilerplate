import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { Footer } from '../components/Footer';

type Props = {
    // Add custom props here
}

const Info = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const router = useRouter();
  // @ts-ignore
  const { t } = useTranslation('common');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onToggleLanguageClick = (newLocale: string) => {
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    const changeTo = router.locale === 'en_us' ? 'fr_ca' : 'en_us';

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <p>Info</p>
        <Trans i18nKey="blog.appDir.answer">
            Then check out
            <a href={t('blog.optimized.link')}>this blog post</a>.
        </Trans>
        <h3>{t('blog.appDir.question')}</h3>
        <div>

            <Link href="/info" locale={changeTo}>
                <button>{t('change-locale', { changeTo })}</button>
            </Link>

            <br/><br/>

          <button onClick={() => onToggleLanguageClick(changeTo)}>
            {t('change-locale', { changeTo })}
          </button>

            <br/><br/>

            <Link href="/second-page">
                <button type="button">{t('to-second-page')}</button>
            </Link>
        </div>
        <Footer />
    </Main>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({
                                                                locale,
                                                            }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en_us', [
            'common',
            'footer',
        ])),
    },
})

export default Info;