import { Wallet } from '@/interfaces';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const WalletContext = createContext<
  [Wallet, Dispatch<SetStateAction<Wallet>>] | null
>(null);

function WalletProvider(props: PropsWithChildren<{}>) {
  const value = useState<Wallet>({ address: '', balance: [] });
  return <WalletContext.Provider value={value} {...props} />;
}

function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}

export { WalletProvider, useWallet };
