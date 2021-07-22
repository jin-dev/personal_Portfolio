import Theme from '../styles/theme';
import { NextIntlProvider } from 'next-intl';
export default function App({ Component, pageProps }) {
  return (
    <>

      <Theme>
        <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
        </NextIntlProvider>
      </Theme>
    </>
  );
}
 