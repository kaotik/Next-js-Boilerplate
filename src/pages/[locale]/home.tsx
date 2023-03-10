// @ts-nocheck
import { useTranslation } from 'next-i18next';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Link from '../../components/Link';

const Home = () => {
  // @ts-ignore
  const { t } = useTranslation(['common']);
  // @ts-ignore
  return (
    <div>
      <p>{t('h3')}</p>
      <Link href="/">
        <button type="button">{t('common:back-to-index')}</button>
      </Link>
    </div>
  );
};

export default Home;

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
