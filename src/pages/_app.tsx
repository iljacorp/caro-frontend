import { BotsProvider } from '@/context/BotsProvider';
import { WalletProvider } from '@/context/WalletProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <BotsProvider>
        <Component {...pageProps} />
      </BotsProvider>
    </WalletProvider>
  );
}
