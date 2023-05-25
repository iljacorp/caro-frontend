import Header from '@/components/containers/Header';
import Overview from '@/components/containers/Overview';
import BotsTable from '@/components/containers/BotsTable';
import About from '@/components/containers/About';

function Home() {
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
