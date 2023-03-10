import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

// @ts-ignore
const LinkComponent = ({ children, skipLocaleHandling, ...rest }) => {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || '';

  let href = rest.href || router.asPath;
  // eslint-disable-next-line no-param-reassign
  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale);
  }

  return (
    <>
      <Link href={href} legacyBehavior>
        <a {...rest}>{children}</a>
      </Link>
    </>
  );
};

export default LinkComponent;
