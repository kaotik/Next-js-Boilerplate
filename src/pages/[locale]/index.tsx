
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

import Link from '../../components/Link'

const Index = () => {
    const { t } = useTranslation(['common'])

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
        <Link href='/home'>
            <button
                type='button'
            >
                {t('to-second-page')}
            </button>
        </Link>
      <h3>index page</h3>
    </Main>
  );
};

export default Index;

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }