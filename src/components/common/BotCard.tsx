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
    <div className='flex flex-row flex-1'>
      {imgUrl && (
        <div className='mr-3'>
          <Image src={imgUrl} alt={name} width={50} height={50} />
        </div>
      )}
      <div className='flex flex-col flex-1'>
        <div className='flex flex-row justify-between'>
          <p className='text-xl text-'>{name}</p>
          <p>{'⭐️'.repeat(rating)}</p>
        </div>
        <p className=''>{description}</p>
      </div>
    </div>
  );
}

export default BotCard;
