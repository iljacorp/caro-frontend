import { Currency } from '@/interfaces';

const MOCKED_BALANCE: Currency[] = [
  { name: 'ETH', amount: 2.5 },
  { name: 'LINK', amount: 101 },
  { name: 'USDT', amount: 1000 },
];

const CurrencyDisplay = ({ name, amount }: Currency) => {
  return (
    <p className='text-lg text-secondary-text'>
      {name}: <span className='font-bold'>{amount}</span>
    </p>
  );
};

function Balance() {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Your Balance</h2>
      {MOCKED_BALANCE.map((currency) => (
        <CurrencyDisplay
          key={currency.name}
          name={currency.name}
          amount={currency.amount}
        />
      ))}
    </div>
  );
}

export default Balance;
