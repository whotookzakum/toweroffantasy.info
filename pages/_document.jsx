import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>

            </Head>
            <body>
                <Main />
                <NextScript />
                {/* <Script async src="https://kumo.network-n.com/dist/app.js" site="toweroffantasyinfo" strategy="beforeInteractive" /> */}
            </body>
        </Html>
    )
}
