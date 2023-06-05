import { useWallet } from '@/context/WalletProvider';
import { Currency } from '@/interfaces';

const CurrencyDisplay = ({ name, amount }: Currency) => {
  return (
    <p className='text-lg text-secondary-text'>
      {amount} <span className='font-bold'>{name}</span>
    </p>
  );
};

function Balance() {
  const [wallet] = useWallet();
  const { balance } = wallet;

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Your Balance</h2>
      {balance.map((currency) => (
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
