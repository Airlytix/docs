'use client'

import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'

declare global {
	interface Window {
		gtag: any
	}
}

export default function CookieBanner() {
	return (
		<CookieConsent
			location="bottom"
			buttonText="Allow Cookies"
			declineButtonText="Decline"
			enableDeclineButton
			style={{ background: '#2B373B' }}
			buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
			expires={150}
			onAccept={() => {
				if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
					window.gtag('consent', 'update', {
						analytics_storage: 'granted'
					})
				}
			}}
			onDecline={() => {
				if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
					window.gtag('consent', 'update', {
						analytics_storage: 'denied'
					})
				}
			}}
		>
			This website uses <Link href="/cookies">cookies</Link> to enhance the user
			experience.
		</CookieConsent>
	)
}
