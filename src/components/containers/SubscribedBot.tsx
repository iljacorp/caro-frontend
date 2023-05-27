import { Bot } from '@/interfaces';
import Button from '../common/Button';
import BotCard from '../common/BotCard';

const MOCKED_BOT: Bot = {
  name: 'Stockfish',
  imgUrl: 'https://via.placeholder.com/150',
  performance: 15,
  rating: 4,
  signals: [],
  description: 'Lorem upsum dolor sit amet consectetur adipisicing elit.',
};

function SubscribedBot() {
  return (
    <div className='flex flex-col mt-14 p-5 border border-gray-200 rounded-md '>
      <div className='flex flex-1 justify-between items-center mb-5'>
        <h3 className='text-2xl font-semibold'>Subscribed bot</h3>
        <Button secondary small onClick={() => console.log('unsubscribe')}>
          Unsubscribe
        </Button>
      </div>
      <BotCard {...MOCKED_BOT} />
      <div className='mt-5'>
        <p className=''>TODO Current signals</p>
      </div>
    </div>
  );
}

export default SubscribedBot;
