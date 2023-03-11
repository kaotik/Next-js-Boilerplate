// @ts-nocheck
import { useTranslation } from 'next-i18next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Link from '../../components/Link';
import {Footer} from "../../components/Footer";

const Index = () => {
  // @ts-ignore
  const { t } = useTranslation(['common', 'footer']);

  // @ts-ignore
  return (
    <Main
      meta={
        <Meta
          title="Activate OnStar"
          description="Activate OnStar"
        />
      }
    >
      <h3>{t('common:title-404')}</h3>
      <Link href="/">
        <button type="button">{t('common:go-to-index')}</button>
      </Link>
        <Footer />
    </Main>
  );
};

export default Index;

const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPaths, getStaticProps };
