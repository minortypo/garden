const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

const locales = ['en'];

const localeConfigs = {
  en: {
    label: 'English',
  },
};

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales,
    localeConfigs,
  },
  title: 'g.arden',
  tagline: `where I keep everything I study and learn`,
  url: 'https://garden.github.io', //wip
  baseUrl: '/garden/',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icons/favicon.png',
  organizationName: 'minortypo',
  projectName: 'g.arden',
  onBrokenLinks: 'log',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-141789564-1',
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [
    require.resolve('./sitePlugin'),
    require.resolve('@cmfcmf/docusaurus-search-local',
    { language: 'pt-BR' }),
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Palhares Zettelkasten',
      logo: {
        alt: 'Palhares Zettelkasten',
        src: 'img/icons/favicon.png',
      },
      items: [
        {
          to: '/docs/tags/',
          position: 'left',
          label: 'Tags',
        },
        {
          label: 'Dev.to',
          href: 'https://dev.to/minortypo',
          position: 'right',
        },
        {
          href: 'https://github.com/minortypo/garden',
          label: 'GitHub',
          position: 'right',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/minortypo/',
          position: 'right',
        },
        {
          href: 'https://twitter.com/minortypo',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Gabriel Palhares`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          gtag: {
            trackingID: process.env.GTAG_ID,
            anonymizeIP: true,
          },
        },
      ],
    ],
  },
};