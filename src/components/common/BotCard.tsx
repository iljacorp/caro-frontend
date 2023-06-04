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
        <div className='flex flex-row'>
          <p className='text-xl'>
            {name}
            <span className='text-yellow-400 text-base'>{` ${'★'.repeat(
              rating
            )}${'☆'.repeat(5 - rating)}`}</span>
          </p>
        </div>
        <p className=''>{description}</p>
      </div>
    </div>
  );
}

export default BotCard;
