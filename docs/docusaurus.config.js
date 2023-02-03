// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZUSTAND',
  url: 'https://awesomedevin.github.io',
  baseUrl: '/zustand-vue/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AwesomeDevin', // Usually your GitHub org/user name.
  projectName: 'zustand-vue', // Usually your repo name.
  deploymentBranch: 'deploy-static',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: [
      'en',
      'zh-Hans'
    ],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      "zh-Hans": {
        htmlLang: 'zh-Hans',
      },

    },
  },

  themes: [[
    require.resolve("@easyops-cn/docusaurus-search-local"),
    ({
      // ... Your options.
      // `hashed` is recommended as long-term-cache of index file is possible.
      hashed: true,
      // For Docs using Chinese, The `language` is recommended to set to:
      // ```
      language: ["zh","en"],
      // ```
    }),
  ],],

  // plugins: ['@docusaurus/plugin-content-pages'],
  // plugins: [
  //   [
  //     require.resolve("@cmfcmf/docusaurus-search-local"),
  //     {
  //       // Options here
  //     },
  //   ],
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AwesomeDevin/zustand-vue/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AwesomeDevin/zustand-vue/tree/main/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'introduce',
        content: `⭐️ 如果对你有帮助，请给它一个 star 吧 ~  <a target="_blank" rel="noopener noreferrer" href="https://github.com/AwesomeDevin/zustand-vue"> GitHub </a> ⭐️`,
        // backgroundColor: '#fafbfc',
        // textColor: '#091E42',
      },
      navbar: {
        title: 'ZUSTAND',
        logo: {
          alt: 'ZUSTAND',
          src: 'img/bear.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'introduce/what-is-zustand',
            position: 'left',
            label: '教程',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            items: [
              {
                href: 'https://github.com/pmndrs/zustand',
                label: 'zustand',
              },
              {
                href: 'https://github.com/AwesomeDevin/zustand-vue',
                label: 'zustand-vue',
              },
              {
                href: 'https://github.com/AwesomeDevin/zustand-pub',
                label: 'zustand-pub',
              },
            ],
            position: 'right',
            label: '生态',
          },
          {
            href: 'https://github.com/AwesomeDevin/zustand-vue',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '教程',
                to: '/docs/introduce/what-is-zustand',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                href: 'https://github.com/pmndrs/zustand',
                label: 'zustand',
              },
              {
                href: 'https://github.com/AwesomeDevin/zustand-vue',
                label: 'zustand-vue',
              },
              {
                href: 'https://github.com/AwesomeDevin/zustand-pub',
                label: 'zustand-pub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} zustand, Inc. Built by AwesomeDevin.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
