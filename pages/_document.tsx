import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GTM_ID } from 'lib'


export default class MyDocument extends Document {
  render() {
    return (
      <Html dir='ltr' lang='ru'>
        <Head />

        <body>
          <Main />
          <NextScript />

          <noscript>
            <iframe
              height='0'
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              style={{ display: 'none', visibility: 'hidden' }}
              width='0'
            />
          </noscript>
        </body>
      </Html>
    )
  }
}
