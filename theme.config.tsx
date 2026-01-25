import React from 'react'
import {FC} from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CookieConsent from "react-cookie-consent";
import GoogleAnalytics from './components/googleanalytics'
import Link from 'next/link'

declare global {
  interface Window {
    gtag: any;
  }
}

const main = ({ children }: { children: React.ReactNode }) => (
  <>
    <GoogleAnalytics GA_MEASUREMENT_ID='G-0PB9M211PH'/>
    {children}

    <CookieConsent
  location="bottom"
  buttonText="Allow Cookies"
  declineButtonText="Decline"
  enableDeclineButton
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
  onAccept={() => {
    window.gtag("consent", 'update', {
      'analytics_storage': "granted"
    });
  }}
  onDecline={() => {
    window.gtag("consent", 'update', {
      'analytics_storage': "denied"
    });
  }}
>
  This website uses <Link href="/cookies">cookies</Link> to enhance the user experience.{" "}
</CookieConsent>
  </>
);

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
    text: (
      <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link href="/cookies" style={{ marginRight: 'auto' }}>Cookie Policy</Link>
        <div style={{ marginLeft: 'auto' }}>
          <picture>
            <source srcSet="/made-for-esphome-white-on-black.png" media="(prefers-color-scheme: dark)" />
            <img
                src="/made-for-esphome-black-on-white.png"
                alt="Made for ESPHome"
                width="230"
                height="75"
            />
          </picture>
        </div>
      </div>
      </>
    ),
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
      <meta name="robots" content="index,follow" />

      <link rel="canonical" href="https://docs.airlytix.io" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Airlytix Documentation" />
      <meta property="og:description" content="Learn how to set up and use your Airlytix sensor for optimal air quality monitoring in your smart home." />
      <meta property="og:url" content="https://docs.airlytix.io" />
      <meta property="og:image" content="/preview-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1120" />
      <meta property="og:image:height" content="630" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://docs.airlytix.io/" />
      <meta property="twitter:title" content="Airlytix documentation – Airlytix" />
      <meta property="twitter:description" content="Official documentation for Airlytix, the ESPHome-based environmental and air quality sensor for Home Assistant." />
      <meta property="twitter:image" content="/preview-image.png" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "Airlytix",
                "url": "https://docs.airlytix.io",
                "logo": "https://docs.airlytix.io/logo.png"
              },
              {
                "@type": "WebSite",
                "name": "Airlytix Documentation",
                "url": "https://docs.airlytix.io"
              },
              {
                "@type": "Product",
                "name": "Airlytix ES1",
                "brand": "Airlytix",
                "description": "ESPHome-based indoor air quality sensor with CO2, PM, VOC/NOx, sound, light, pressure, temperature and humidity, designed for deep Home Assistant integration.",
                "url": "https://lectronz.com/products/airlytix-es1-esphome-smart-air-quality-sensor",
                "image": "https://docs.airlytix.io/preview-image.png",
                "isAccessoryOrSparePartFor": {
                  "@type": "WebSite",
                  "url": "https://docs.airlytix.io"
                }
              }
            ]
          })
        }}
      />

      <script type="module" src="https://unpkg.com/esp-web-tools@9/dist/web/install-button.js?module"></script>
    </>
  ),
  main: main
}

export default config
