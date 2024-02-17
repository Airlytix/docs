import React from 'react'
import {FC} from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CookieConsent from "react-cookie-consent";
import GoogleAnalytics from './components/googleanalytics'

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
  This website uses cookies to enhance the user experience.{" "}
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
  ),
  main: main
}

export default config