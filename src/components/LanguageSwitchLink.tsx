// @ts-nocheck
/* tslint:disable */
import Link from 'next/link';
import { useRouter } from 'next/router';

import languageDetector from '../../lib/languageDetector';

// @ts-ignore
const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    // @ts-ignore
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  // @ts-ignore
  return (
    <Link href={href}>
      <button onClick={() => languageDetector.cache(locale)}>{locale}</button>
    </Link>
  );
};

export default LanguageSwitchLink;
