import Layout from '../components/Layout';
import Script from 'next/script';
import { useState } from 'react';
import '../styles/styles.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const [versionState, setVersionState] = useState("global");
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://securepubads.g.doubleclick.net/" crossOrigin />
        <link rel="preconnect" href="https://cdn.consentmanager.mgr.consensu.org/" crossOrigin />
      </Head>
      <Script id="nn-ad-window">
        {`window.AdSlots = window.AdSlots || {cmd: [], disableScripts: ['gpt']}`}
      </Script>
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      />
      <Script
        src="https://kumo.network-n.com/dist/app.js"
        site="toweroffantasyinfo"
      />
      {/* <Script
        id="nn-ad-window"
        dangerouslySetInnerHTML={{
          __html:
            `window.AdSlots = window.AdSlots || {cmd: [], disableScripts: ['gpt']}`
        }}
      /> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N68SWH7ZJB"
        crossOrigin='anonymous'
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N68SWH7ZJB');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} version={versionState} setVersion={setVersionState} />
      </Layout>
    </>
  );
}
