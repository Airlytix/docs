'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import {pageview} from "./gtagHelper"
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
	const pathname = usePathname()

	useEffect(() => {
		const path = pathname ?? ''
		pageview(GA_MEASUREMENT_ID, path)
	}, [pathname, GA_MEASUREMENT_ID])

    useEffect (() => {
        const storedCookieConsent = getCookieConsentValue()
        if (storedCookieConsent === "true"){
            window.gtag("consent", 'update', {
                'analytics_storage': "granted"
            });
        }
    })

    return (
        <>
            <Script strategy="afterInteractive" 
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/>
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
        </>
)}
