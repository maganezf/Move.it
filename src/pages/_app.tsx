import type { AppProps } from 'next/app';
import '../../styles/globalStyles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
