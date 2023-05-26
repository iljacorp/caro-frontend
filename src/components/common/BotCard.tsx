import { Bot } from '@/interfaces';
import Image from 'next/image';

function BotCard({
  name,
  imgUrl,
  description,
  performance,
  rating,
  signals,
}: Bot) {
  return (
    <div className='flex flex-1 flex-row width-full'>
      {imgUrl && <Image src={imgUrl} alt={name} width={50} height={50} />}
      <div className='flex flex-col space-y-2'>
        <div className='flex flex-row justify-between'>
          <p className='text-xl text-'>{name}</p>
          <p>{'⭐️'.repeat(rating)}</p>
        </div>
        <p>Performace {performance}%</p>
      </div>
    </div>
  );
}

export default BotCard;
