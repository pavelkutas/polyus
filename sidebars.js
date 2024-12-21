const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // document ID from intro.md
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        {
          type: 'doc',
          id: 'tutorial/getting-started',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          id: 'tutorial/advanced-guide',
          label: 'Advanced Guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'doc',
          id: 'guides/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'guides/installation',
          label: 'Installation',
        },
      ],
    },
  ],
};

module.exports = sidebars;
