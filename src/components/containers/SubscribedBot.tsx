import { Bot } from '@/interfaces';
import Button from '../common/Button';
import BotCard from '../common/BotCard';

const MOCKED_BOT: Bot = {
  name: 'Temp bot',
  imgUrl: 'https://via.placeholder.com/150',
  performance: 15,
  rating: 4,
  signals: [],
};

function SubscribedBot() {
  return (
    <div className='mt-10'>
      <h3 className='text-1xl font-semibold mb-5'>Subscribed bot</h3>
      <BotCard {...MOCKED_BOT} />
      <Button onClick={() => console.log('unsubscribe')}>Unsubscribe</Button>
    </div>
  );
}

export default SubscribedBot;
