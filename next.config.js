const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  images: {
    unoptimized: true,
  },
})

module.exports = withNextra()
