import Link from '../../components/Link'

import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';


const Home = () => {
  const { t } = useTranslation(['common'])
  return (
    <div>
      <p>{t('h3')}</p>
      <Link href='/'>
        <button
            type='button'
        >
          {t('common:back-to-home')}
        </button>
      </Link>
    </div>
  );
};

export default Home;

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }