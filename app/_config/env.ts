// Configuration values relevant to the environment.
// For configuration values that do not depend on the environment, see ./siteConfig.ts.

export const env = {
  showAppsSection: process.env.SHOW_APPS_SECTION === 'true',
  showBlogSection: process.env.SHOW_BLOG_SECTION === 'true',
} as const;
