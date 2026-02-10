import 'nextra-theme-docs/style-prefixed.css'
import './globals.css'

import { ReactNode, Suspense } from 'react'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import Link from 'next/link'
import GoogleAnalytics from '../components/googleanalytics'
import CookieBanner from '../components/cookie-banner'

export const metadata = {
	title: 'Airlytix documentation',
	description:
		'Official documentation for Airlytix, the ESPHome-based environmental and air quality sensor for Home Assistant.'
}

export const viewport = {
	width: 'device-width',
	initialScale: 1
}

const navbar = (
	<Navbar
		logo={
			<Image
				src="/logo.png"
				alt="Airlytix"
				width={186}
				height={32}
			/>
		}
	/>
)

const footer = (
	<Footer>
		<div className="x:flex x:flex-col x:items-center x:gap-3 x:w-full x:md:flex-row x:md:justify-between">
			<Link href="/cookies" className="x:text-sm x:text-gray-600 x:dark:text-gray-400">
				Cookie Policy
			</Link>
			<div className="x:flex x:justify-center x:md:justify-end">
				<picture>
					<source
						srcSet="/made-for-esphome-white-on-black.png"
						media="(prefers-color-scheme: dark)"
					/>
					<img
						src="/made-for-esphome-black-on-white.png"
						alt="Made for ESPHome"
						width={230}
						height={75}
						style={{ maxWidth: '100%', height: 'auto' }}
					/>
				</picture>
			</div>
		</div>
	</Footer>
)

export default async function RootLayout({
	children
}: {
	children: ReactNode
}) {
	const pageMap = await getPageMap()

	return (
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Official documentation for Airlytix, the ESPHome-based environmental and air quality sensor for Home Assistant."
				/>
				<meta
					name="keywords"
					content="Airlytix, air quality, environmental sensor, Home Assistant, ESPHome, smart home, IoT"
				/>
				<meta name="author" content="Airlytix Team" />
				<meta name="robots" content="index,follow" />
				<link rel="canonical" href="https://docs.airlytix.io" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Airlytix Documentation" />
				<meta
					property="og:description"
					content="Learn how to set up and use your Airlytix sensor for optimal air quality monitoring in your smart home."
				/>
				<meta property="og:url" content="https://docs.airlytix.io" />
				<meta property="og:image" content="/preview-image.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1120" />
				<meta property="og:image:height" content="630" />
				<meta
					property="og:see_also"
					content="https://lectronz.com/products/airlytix-es1-esphome-smart-air-quality-sensor"
				/>
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://docs.airlytix.io/" />
				<meta property="twitter:title" content="Airlytix documentation  Airlytix" />
				<meta
					property="twitter:description"
					content="Official documentation for Airlytix, the ESPHome-based environmental and air quality sensor for Home Assistant."
				/>
				<meta property="twitter:image" content="/preview-image.png" />
				<link
					rel="alternate"
					href="https://lectronz.com/products/airlytix-es1-esphome-smart-air-quality-sensor"
					title="Airlytix ES1  ESPHome Smart Air Quality Sensor"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@graph': [
								{
									'@type': 'Organization',
									name: 'Airlytix',
									url: 'https://docs.airlytix.io',
									logo: 'https://docs.airlytix.io/logo.png'
								},
								{
									'@type': 'WebSite',
									name: 'Airlytix Documentation',
									url: 'https://docs.airlytix.io'
								}
							]
						})
					}}
				/>
				<script
					type="module"
					src="https://unpkg.com/esp-web-tools@9/dist/web/install-button.js?module"
				/>
			</Head>
			<body>
				<Suspense fallback={null}>
					<GoogleAnalytics GA_MEASUREMENT_ID="G-0PB9M211PH" />
				</Suspense>
				<CookieBanner />
				<Layout
					navbar={navbar}
					footer={footer}
					pageMap={pageMap}
					docsRepositoryBase="https://github.com/airlytix/docs"
				>
					{children}
				</Layout>
			</body>
		</html>
	)
}
