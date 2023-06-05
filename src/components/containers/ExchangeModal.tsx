import { useState } from 'react';
import Modal from '../common/Modal';
import { Currency } from '@/interfaces';
import { Signal } from '@/interfaces';
import Button from '../common/Button';
import { useWallet } from '@/context/WalletProvider';

const MOCKED_SIGNALS: Signal[] = [
  { name: 'ETH', amount: 1 },
  { name: 'LINK', amount: 300 },
  { name: 'USDT', amount: 600 },
];

type ExchangeModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const ExchangeDisplay = ({
  currency,
  signal,
}: {
  currency: Currency;
  signal: Signal;
}) => {
  const { amount: currencyAmount } = currency;
  const { amount: signalAmount } = signal;

  const signalGreaterThan = signalAmount > currencyAmount;

  return (
    <tr className='text-xl'>
      <td>
        {currencyAmount} <span className='font-bold'>{currency.name}</span>
      </td>
      <td className='px-5 py-1'>→</td>
      <td className={signalGreaterThan ? 'text-green-500' : 'text-red-500'}>
        {signalAmount} <span className='font-bold'>{currency.name}</span>
        <span className='ml-2'>{signalGreaterThan ? '↑' : '↓'}</span>
      </td>
    </tr>
  );
};

function ExchangeModal({ isOpen, closeModal }: ExchangeModalProps) {
  const [wallet] = useWallet();

  const acceptTrade = () => {
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h2 className='text-3xl text-center font-bold'>Target allocation</h2>
      <div className='flex flex-1 flex-col justify-between'>
        <div className='flex flex-1 flex-col mt-5 justify-center items-center'>
          <table className='table-auto'>
            <tbody>
              {wallet.balance.map((currency, index) => (
                <ExchangeDisplay
                  key={currency.name}
                  currency={currency}
                  signal={MOCKED_SIGNALS[index]}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className='text-right'>
          <Button className='mt-8' onClick={acceptTrade}>
            Accept trade
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ExchangeModal;
