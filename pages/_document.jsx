import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://securepubads.g.doubleclick.net/" crossorigin />
                <link rel="preconnect" href="https://cdn.consentmanager.mgr.consensu.org/" crossorigin />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
