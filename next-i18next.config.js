// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en_us',
    locales: ['en_us', 'en_ca', 'fr_ca'],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  // eslint-disable-next-line global-require
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}