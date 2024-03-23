import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fullup Docs',
  tagline:
    'API and webhook documentation for rental business software at Fullup.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.getfullup.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/lemursman/fullup-docs/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    defaultMode: 'dark',
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
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
      copyright: `©${new Date().getFullYear()} lemursman, LLC.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
