module.exports = {
  title: 'VitePress Local Playground',

  themeConfig: {
    nextLinks: true,
    prevLinks: true,

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Nested', link: '/guide/nested/', },
    ],

    sidebar: {
      '/': [
        { text: 'Index', link: '/index' },
      ],

      '/guide/': [
        {
          text: 'Prologue',
          children: [
            { text: 'Index', link: '/guide/index' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Guide Second', link: '/guide/guide-second' },
          ]
        },
      ],

      '/guide/nested/': [
        {
          text: 'Nested',
          children: [
            { text: 'Nested Index', link: '/guide/nested/index' },
            { text: 'Nested Something', link: '/guide/nested/something' }
          ]
        }
      ],
    },
  }
}