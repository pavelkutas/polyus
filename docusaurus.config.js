// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'Polyus Documentation',
  tagline: 'Documentation for Polyus Project',
  url: 'https://pavelkutas.github.io',
  baseUrl: '/polyus/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'static/img/favicon.ico',
  organizationName: 'pavelkutas', // Usually your GitHub org/user name.
  projectName: 'polyus', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Specify the branch to deploy to

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pavelkutas/polyus/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pavelkutas/polyus/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: 'Polyus Documentation',
      logo: {
        alt: 'Polyus Logo',
        src: 'static/img/logo.svg',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pavelkutas/polyus',
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
              label: 'Introduction',
              to: 'docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
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
              href: 'https://github.com/pavelkutas/polyus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Polyus Project. Built with Docusaurus.`,
    },
  }),
};

module.exports = config;
