// @ts-nocheck
import { useTranslation } from 'next-i18next';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Link from '../../components/Link';
import {Main} from "@/templates/Main";
import {Meta} from "@/layouts/Meta";

const Home = () => {
  // @ts-ignore
  const { t } = useTranslation(['common']);
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
          <h3>{t('common:home-title')}</h3>
          <Link href="/">
              <button type="button">{t('common:go-to-index')}</button>
          </Link>
      </Main>
  );
};

export default Home;

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
