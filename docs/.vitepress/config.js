module.exports = {
  title: 'VitePress Local Playground',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Nested', link: '/guide/nested/', },
    ],

    sidebar: {
      '/': [
        { text: 'Index', link: '/' },
      ],
      '/guide/': [
        {
          text: 'Prologue',
          children: [
            { text: 'Index', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Guide Second', link: '/guide/guide-second' },
          ]
        },
      ],

      '/guide/nested/': [
        {
          text: 'Nested',
          children: [
            { text: 'Nested Index', link: '/guide/nested/' },
            { text: 'Nested Something', link: '/guide/nested/something' }
          ]
        }
      ],
    },

    locales: {
      '/ja/': {
        editLink: {
          text: '編集する'
        },
      }
    }
  }
}