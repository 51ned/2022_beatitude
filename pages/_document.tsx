import Document, { Html, Head, Main, NextScript } from 'next/document'


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
              src={`https://www.googletagmanager.com/ns.html?id=GTM-MBMKKSS`}
              style={{ display: 'none', visibility: 'hidden' }}
              width='0'
            />
          </noscript>
        </body>
      </Html>
    )
  }
}
