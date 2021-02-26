import type { AppProps } from 'next/app';
import { ChallengesProvider } from '../contexts/ChallengeContext';

import '../styles/components/GlobalStyles/globalStyles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
