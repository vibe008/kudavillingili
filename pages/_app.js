import '../styles/globals.css'
import * as Fathom from 'fathom-client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load('VJGZDDAB',{
        url:"https://bandicoot.mohit.dev/script.js",
        excludedDomains:["localhost"]
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [ router ]);

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('4923380837699610') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
  return (
    <>
      <meta name="google-site-verification" content="lc_7NaMK9jSl1ab2CPNvwqRlELjez9h4hmTer53olIY" />
      <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
