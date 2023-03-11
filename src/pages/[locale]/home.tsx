// @ts-nocheck
import { useTranslation } from 'next-i18next';

import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import Link from '../../components/Link';

const Home = () => {
  // @ts-ignore
  const { t } = useTranslation(['common', 'home']);
  // @ts-ignore
  return (
    <div>
      <p>{t('home:title')}</p>
      <Link href="/">
        <button type="button">{t('common:to-index')}</button>
      </Link>
    </div>
  );
};

export default Home;

const getStaticProps = makeStaticProps(['common', 'home']);
export { getStaticPaths, getStaticProps };
