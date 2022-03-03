import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../data/state/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
