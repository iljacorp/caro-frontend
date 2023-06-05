import { Bot, Wallet } from '@/interfaces';

const MOCKED_BOT_LIST: Bot[] = [
  {
    name: 'Stockfish',
    performance: 15,
    rating: 4,
    signals: [],
    description: 'Lorem upsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Nanobot',
    performance: -4,
    rating: 2,
    signals: [],
    description: 'Lorem upsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Hypesignals',
    performance: 22,
    rating: 5,
    signals: [],
    description: 'Lorem upsum dolor sit amet consectetur adipisicing elit.',
  },
];

function fetchBots() {
  //TODO fetch bots
  return MOCKED_BOT_LIST;
}

const MOCKED_BALANCE: Wallet = {
  address: '0x000',
  balance: [
    { name: 'ETH', amount: 2.5 },
    { name: 'LINK', amount: 101 },
    { name: 'USDT', amount: 1000 },
  ],
};

function fetchWallet() {
  //TODO fetch wallet
  return MOCKED_BALANCE;
}

export { fetchBots, fetchWallet };
