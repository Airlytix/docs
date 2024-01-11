const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
})

module.exports = withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
})
