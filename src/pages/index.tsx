import Header from '@/components/containers/Header';
import Overview from '@/components/containers/Overview';
import BotsTable from '@/components/containers/BotsTable';
import About from '@/components/containers/About';
import { useBots } from '@/context/BotsProvider';
import { useEffect } from 'react';
import { fetchBots, fetchWallet } from '@/services/fetch';
import { useWallet } from '@/context/WalletProvider';

function Home() {
  const [, setBots] = useBots();
  const [, setWallet] = useWallet();

  useEffect(() => {
    const bots = fetchBots();
    const wallet = fetchWallet();

    setBots(bots);
    setWallet(wallet);
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <Header />
      <Overview />
      <About />
      <BotsTable />
    </main>
  );
}

export default Home;
