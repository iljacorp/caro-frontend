import { Bot } from '@/interfaces';
import { MouseEventHandler, PropsWithChildren, useState } from 'react';
import Image from 'next/image';
import Button from '../common/Button';

const MOCKED_BOT_LIST: Bot[] = [
  {
    name: 'Stockfish',
    imgUrl: 'https://via.placeholder.com/150',
    performance: 15,
    rating: 4,
    signals: [],
    description: 'Lorem upsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Nanobot',
    imgUrl: 'https://via.placeholder.com/150',
    performance: -4,
    rating: 3,
    signals: [],
    description: 'Lorem upsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Hypesignals',
    imgUrl: 'https://via.placeholder.com/150',
    performance: 22,
    rating: 4,
    signals: [],
    description: 'Lorem upsum dolor sit amet consectetur adipisicing elit.',
  },
];

const TableHeader = ({
  children,
  onClick,
}: PropsWithChildren<{ onClick?: MouseEventHandler }>) => (
  <th className={`px-4 py-4 ${onClick && 'cursor-pointer'}`} onClick={onClick}>
    {children}
  </th>
);

const TableData = ({ children }: PropsWithChildren) => (
  <td className='px-4 py-1'>{children}</td>
);

//rudimentary confirmation
const confirmSubscription = () => {
  const response = confirm('Are you sure you want to subscribe?');

  if (response) {
    alert('You have subscribed!');
  } else {
    console.log('Cancel was pressed');
  }
};

function BotsTable() {
  const [sortedBots, setSortedBots] = useState(MOCKED_BOT_LIST);
  const [sortedBy, setSortedBy] = useState<'performance' | 'rating' | ''>('');
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = (value: 'performance' | 'rating') => {
    if (sortedBy === value) {
      setIsAscending(!isAscending);
      setSortedBots((prev) => [...prev].reverse());
    } else {
      setIsAscending(true);
      setSortedBy(value);

      const sorted = [...sortedBots].sort((a, b) => b[value] - a[value]);
      setSortedBots(sorted);
    }
  };

  return (
    <div className='mt-56 h-screen'>
      <h1 className='text-6xl mb-14 font-semibold text-center'>
        Bots Table 🤖
      </h1>

      <table className='table-auto w-full'>
        <thead>
          <tr>
            <TableHeader>Image</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader onClick={() => handleSort('performance')}>
              Performance
            </TableHeader>
            <TableHeader onClick={() => handleSort('rating')}>
              Rating
            </TableHeader>
            <TableHeader>Description</TableHeader>
          </tr>
        </thead>
        <tbody>
          {sortedBots.map((bot, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <TableData>
                {bot.imgUrl && (
                  <Image
                    src={bot.imgUrl}
                    alt={bot.name}
                    width={75}
                    height={75}
                    className='rounded'
                  />
                )}
              </TableData>
              <TableData>{bot.name}</TableData>
              <TableData>{bot.performance}%</TableData>
              <TableData>{bot.rating}</TableData>
              <TableData>{bot.description}</TableData>
              <TableData>
                <Button onClick={confirmSubscription}>Subscribe</Button>
              </TableData>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BotsTable;
