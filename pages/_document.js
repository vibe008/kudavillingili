import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    const GA_MEASUREMENT_ID = 'G-6B589RW8N9';
    const GA_MEASUREMENT_CODE = 'UA-196062222-1';
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_CODE}`}
          />
          <script dangerouslySetInnerHTML={{
            __html: `
              <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2QHKST');</script>
<!-- End Google Tag Manager -->
            `
          }} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_CODE}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                  var axel = Math.random() + "";
                  var a = axel * 10000000000000;
                  document.write('<iframe src="https://6974167.fls.doubleclick.net/activityi;src=6974167;type=invmedia;cat=kudav0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>')
                `
            }}
          />
          <noscript>
            <iframe src="https://6974167.fls.doubleclick.net/activityi;src=6974167;type=invmedia;cat=kudav0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?" width="1" height="1" frameBorder="0" style={{ "display": "none" }}></iframe>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript dangerouslySetInnerHTML={{
            __html: `
             <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2QHKST"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
            `
          }} />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
