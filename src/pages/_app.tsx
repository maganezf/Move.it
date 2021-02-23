import type { AppProps } from 'next/app';
import '../styles/components/GlobalStyles/globalStyles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
