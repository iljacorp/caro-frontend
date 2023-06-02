import { Bot } from '@/interfaces';
import Button from '../common/Button';
import BotCard from '../common/BotCard';
import ExchangeModal from './ExchangeModal';
import { useState } from 'react';

const MOCKED_BOT: Bot = {
  name: 'Stockfish',
  imgUrl: 'https://via.placeholder.com/150',
  performance: 15,
  rating: 4,
  signals: [],
  description: 'Lorem upsum dolor sit amet consectetur adipisicing elit.',
};

function SubscribedBot() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className='flex flex-col mt-14 p-5 border border-gray-200 rounded-md '>
        <div className='flex flex-1 justify-between items-center mb-5'>
          <h2 className='text-2xl font-semibold'>Subscribed bot</h2>
          <Button secondary small onClick={() => console.log('unsubscribe')}>
            Unsubscribe
          </Button>
        </div>
        <BotCard {...MOCKED_BOT} />
        <div className='mt-5'>
          <Button className='mt-3' onClick={toggleModal}>
            ✨ View new Signals ✨
          </Button>
        </div>
      </div>
      <ExchangeModal isOpen={modalOpen} closeModal={toggleModal} />
    </>
  );
}

export default SubscribedBot;
