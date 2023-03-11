// @ts-nocheck
import { useTranslation } from 'next-i18next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Link from '../../components/Link';

const Index = () => {
  // @ts-ignore
  const { t } = useTranslation(['common', 'index']);

  // @ts-ignore
  return (
    <Main
      meta={
        <Meta
          title=""
          description=""
        />
      }
    >
      <h3>{t('index:title')}</h3>
      <Link href="/home">
        <button type="button">{t('common:to-home')}</button>
      </Link>
    </Main>
  );
};

export default Index;

const getStaticProps = makeStaticProps(['common', 'index']);
export { getStaticPaths, getStaticProps };
