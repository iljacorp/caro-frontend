import { Bot } from '@/interfaces';
import {
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import { useBots } from '@/context/BotsProvider';

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
  const [bots] = useBots();
  const [sortedBots, setSortedBots] = useState(bots);
  const [sortedBy, setSortedBy] = useState<'performance' | 'rating' | ''>('');
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    setSortedBots(bots);
    setSortedBy('');
    setIsAscending(true);
  }, [bots]);

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
              <TableData>{bot.name}</TableData>
              <TableData>{bot.performance}%</TableData>
              <TableData>
                <p className='text-yellow-400'>{`${'★'.repeat(
                  bot.rating
                )}${'☆'.repeat(5 - bot.rating)}`}</p>
              </TableData>
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
