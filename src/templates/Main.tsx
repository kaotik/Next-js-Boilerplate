import type { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}
    <div>
      <div>
        <h1>
          {AppConfig.title}
        </h1>
        <h2>
          {AppConfig.description}
        </h2>
      </div>
      <main className="content py-5 text-xl">{props.children}</main>
      <Footer />
    </div>
  </div>
);

export { Main };
