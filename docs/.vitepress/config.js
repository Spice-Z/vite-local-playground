module.exports = {
  title: 'VitePress Local Playground',
  locales: {
    '/': {
      label: 'English',
      lang: 'en-US',
      title: 'VitePress Playground',
      description: 'Vite-powered Static Site Generator'
    },
    '/zh/': {
      label: '中文',
      lang: 'zh-CN',
      title: 'VitePress 游乐场',
      description: 'Vite 驱动的静态网站生成器'
    },
    '/ja/': {
      label: '日本語',
      lang: 'ja-JP',
      title: 'VitePress プレイグラウンド',
      description: 'Vite 静的サイトジェネレーター！'
    },
  },

  themeConfig: {
    nextLinks: true,
    prevLinks: true,

    nav: [
      { text: 'Guide', items: [
        { text: 'First', link: '/guide/nested/', },
        { text: 'Second', link: '/guide/getting-started', },
        { text: 'Third', link: '/guide/guide-second', },
      ]
      } ,
      { text: 'Nested', link: '/guide/nested/', },
    ],

    sidebar: {
      '/': [
        { text: 'Index', link: 'index' },
      ],

      '/guide/': [
        {
          text: 'Prologue',
          children: [
            { text: 'Index', link: 'guide/index' },
            { text: 'Getting Started', link: 'guide/getting-started' },
            { text: 'Guide Second', link: 'guide/guide-second' },
          ]
        },
      ],

      '/guide/nested/': [
        {
          text: 'Nested',
          children: [
            { text: 'Nested Index', link: 'guide/nested/index' },
            { text: 'Nested Something', link: 'guide/nested/something' }
          ]
        }
      ],
    },

    locales: {
      '/zh/': {
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: 'API', link: '/zh/api/' },
          { text: '更新日志', link: 'https://github.com/vuejs/vuex/releases' },
        ],
        sidebar: [
          {
            text: '指南',
            children: [
              { text: '指南', link: '/zh/guide/' },
              { text: '快速开始', link: '/zh/guide/getting-started' },
              { text: '指南内容', link: '/zh/guide/guide-content' },
              { text: '内容', link: '/zh/guide/content' },
            ],
          },
          {
            text: '内容',
            children: [{ text: '内容', link: '/zh/guide/content' }],
          },
        ],
      },
      '/ja/': {
        nav: [
          { text: 'ガイド', link: '/ja/guide/' },
          { text: 'API', link: '/ja/api/' },
          { text: 'リリースノート', link: 'https://github.com/vuejs/vuex/releases' },
        ],
        sidebar: [
          {
            text: 'ガイド',
            children: [
              { text: 'ガイド', link: '/ja/guide/' },
              { text: 'はじめる', link: '/ja/guide/getting-started' },
              { text: 'ガイドの内容', link: '/ja/guide/guide-content' },
              { text: '内容', link: '/ja/guide/content' },
            ],
          },
          {
            text: '内容',
            children: [{ text: '内容', link: '/ja/guide/content' }],
          },
        ],
      }
    }
  }
}