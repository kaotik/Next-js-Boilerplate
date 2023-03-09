import Document, { Head, Html, Main, NextScript } from 'next/document';
import i18nextConfig from '../../next-i18next.config';
import { AppConfig } from '@/utils/AppConfig';
import type { DocumentProps } from 'next/document';

type Props = DocumentProps & {
    // add custom document props
};

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document<Props> {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;



    return (
      <Html lang={currentLocale}>
        <Head />
        <body>
          {AppConfig.locale}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
