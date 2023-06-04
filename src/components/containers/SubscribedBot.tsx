import { Bot } from '@/interfaces';
import Button from '../common/Button';
import BotCard from '../common/BotCard';
import ExchangeModal from './ExchangeModal';
import { useState } from 'react';
import { useBots } from '@/context/BotsProvider';

//rudimentary confirmation
const confirmUnsubscription = () => {
  const response = confirm('Are you sure you want to unsubscribe?');

  if (response) {
    alert('You have unsubscribed!');
  } else {
    console.log('Cancel was pressed');
  }
};

function SubscribedBot() {
  const [bots] = useBots();
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className='flex flex-col mt-14 p-5 border border-gray-200 rounded-md '>
        <div className='flex flex-1 justify-between items-center mb-5'>
          <h2 className='text-2xl font-semibold'>Subscribed bot</h2>
          <Button secondary small onClick={confirmUnsubscription}>
            Unsubscribe
          </Button>
        </div>
        <BotCard {...bots[0]} />
        <div className='mt-8'>
          <Button onClick={toggleModal}>✨ View new Signal ✨</Button>
        </div>
      </div>
      <ExchangeModal isOpen={modalOpen} closeModal={toggleModal} />
    </>
  );
}

export default SubscribedBot;
