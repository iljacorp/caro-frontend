import { Bot } from '@/interfaces';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const BotsContext = createContext<
  [Bot[], Dispatch<SetStateAction<Bot[]>>] | null
>(null);

function BotsProvider(props: PropsWithChildren<{}>) {
  const value = useState<Bot[]>([]);
  return <BotsContext.Provider value={value} {...props} />;
}

function useBots() {
  const context = useContext(BotsContext);
  if (!context) {
    throw new Error('useBots must be used within a BotsProvider');
  }
  return context;
}

export { BotsProvider, useBots };
