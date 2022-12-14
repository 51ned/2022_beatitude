import { useEffect } from 'react'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useRouter } from 'next/router'

import { pageView } from 'lib'

import '../public/styles/global.css'


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageView)

    return () => {
      router.events.off('routeChangeComplete', pageView)
    }
  }, [router.events])

  return (
    <>
      <Script
        id='gtag-base'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-MBMKKSS');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  )
}
