import Layout from '../components/Layout';
import Script from 'next/script';
import { useState } from 'react';
import '../styles/styles.scss';

export default function App({ Component, pageProps }) {
  const [versionState, setVersionState] = useState("global");
  return (
    <>
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy='lazyOnload'
      />
      <Script
        src="https://kumo.network-n.com/dist/app.js"
        site="toweroffantasyinfo" strategy='lazyOnload'
      />
      <Script
        id="nn-ad-window"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html:
            `window.AdSlots = window.AdSlots || {cmd: [], disableScripts: ['gpt']}`
        }}
      />
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
