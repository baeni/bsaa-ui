// Configuration values not relevant to the environment.
// For configuration values that depend on the environment, see ./env.ts.

export const siteConfig = {
  // general
  pageTitle: 'bsaa',
  pageTitleLong: 'bsaa — Fullstack developer',
  pageDescription:
    'Fullstack developer crafting code – with a passion for design.',
  apiBaseUrl: 'https://cms.bsaa.dev',
  nickname: 'Benny',
  contactUrl: 'mailto:hello@bsaa.dev?subject=Hello%20Benny',
  fadeBlurInitVal: 10,

  // legal notice
  legal: {
    fullName: 'Benjamin Saalfeld',
    address: 'Charlotte-Temming-Str. 3',
    city: '44135 Dortmund',
    phone: 'auf Anfrage',
    email: 'legal@bsaa.dev',
  },
} as const;
