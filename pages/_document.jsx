import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://securepubads.g.doubleclick.net/" crossOrigin />
                <link rel="preconnect" href="https://cdn.consentmanager.mgr.consensu.org/" crossOrigin />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
