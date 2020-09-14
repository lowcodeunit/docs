module.exports = {
  title: 'Fathym Framework',
  tagline: 'Deliver cloud-native applications reliably across hybrid-clouds',
  url: 'https://www.fathym.com',
  baseUrl: '/framework/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'lowcodeunit', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'Fathym Framework',
      logo: {
        alt: 'Fathym Framework',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Framework',
          position: 'left',
        },
        // { to: 'blog', label: 'Learning', position: 'left' },
        {
          href: 'https://github.com/lowcodeunit/docs',
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
              label: 'Style Guide',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/lcu',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/lcu',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lcu',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lowcodeunit/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/lowcodeunit/docs/edit/master/docs/',
          // routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/lowcodeunit/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
