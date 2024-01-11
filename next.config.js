const withNextra = require('nextra')({
  output: 'export',
  distDir: 'out',
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  images: {
    unoptimized: true,
  },
})

module.exports = withNextra()
