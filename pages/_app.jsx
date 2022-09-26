import Layout from '../components/Layout';
import Script from 'next/script';
import { useState } from 'react';
import '../styles/styles.scss';

export default function App({ Component, pageProps }) {
  const [versionState, setVersionState] = useState("global");
  return (
    <>
      {/* <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload" id="g-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
      `}
      </Script> */}
      {/* <Script id="nn-ad-script" strategy='beforeInteractive'>
        {`
          window.AdSlots = window.AdSlots || {cmd: [], disableScripts: ['gpt']};
        `}
      </Script> */}
      <Script
        id="nn-ad-window"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: 
          `window.AdSlots = window.AdSlots || {cmd: [], disableScripts: ['gpt']};`
        }}
      />
      <Script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" strategy='afterInteractive' />
      <Script async src="https://kumo.network-n.com/dist/app.js" site="toweroffantasyinfo" strategy='afterInteractive' />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N68SWH7ZJB"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
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
