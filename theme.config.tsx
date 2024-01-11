import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src="/logo.png"
        alt="Airlytix"
        width={186}
        height={32}
      />
    </>
  ),
  project: {
    link: 'https://github.com/airlytix/configuration',
  },
  docsRepositoryBase: 'https://github.com/airlytix/docs',
  footer: {
    text: 'Airlytix Docs',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Airlytix'
      }
    }
  },
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <meta name="description" content="Official documentation for Airlytix, the ESPHome-based environmental and air quality sensor for Home Assistant." />
      <meta name="keywords" content="Airlytix, air quality, environmental sensor, Home Assistant, ESPHome, smart home, IoT" />
      <meta name="author" content="Airlytix Team" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Airlytix Documentation" />
      <meta property="og:description" content="Learn how to set up and use your Airlytix sensor for optimal air quality monitoring in your smart home." />
      <meta property="og:url" content="https://docs.airlytix.io" />
      
      <script type="module" src="https://unpkg.com/esp-web-tools@9/dist/web/install-button.js?module"></script>
    </>
  )
}

export default config
