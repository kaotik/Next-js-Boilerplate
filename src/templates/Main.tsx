import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </h1>
          <h2 className="text-xl">{AppConfig.description}</h2>
        </div>
        <nav>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/home/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Homepage
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/info/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Info
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/review/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Review
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/confirm/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Confirm
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/blog/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </footer>
    </div>
  </div>
);

export { Main };
