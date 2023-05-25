const MOCKED_BALANCE = [
  { name: 'ETH', amount: 2.5 },
  { name: 'LINK', amount: 101 },
  { name: 'USDT', amount: 1000 },
];

const CurrencyDisplay = (props: { currency: string; amount: number }) => {
  const { currency, amount } = props;
  return (
    <p className='text-lg text-secondary-text'>
      {currency}: <span className='font-bold'>{amount}</span>
    </p>
  );
};

function Balance() {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4 text-primary-text'>
        Your Balance
      </h2>
      {MOCKED_BALANCE.map((currency) => (
        <CurrencyDisplay
          key={currency.name}
          currency={currency.name}
          amount={currency.amount}
        />
      ))}
    </div>
  );
}

export default Balance;
