import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fullup Docs',
  tagline:
    'API and webhook documentation for rental business software at Fullup.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.getfullup.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/lemursman/fullup-docs/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card-docs.png',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Fullup Logo',
        src: 'img/fullup_logo.png',
        srcDark: 'img/fullup_logo_dark.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/lemursman/fullup-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Objects',
              to: '/docs/category/objects',
            },
            {
              label: 'Webhooks',
              to: '/docs/category/webhooks',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support',
              href: 'https://support.getfullup.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/get_fullup',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/getfullup',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/getfullup',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Fullup',
              href: 'https://www.getfullup.com',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lemursman/fullup-docs',
            },
          ],
        },
      ],
      copyright: `©${new Date().getFullYear()} Fullup.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
