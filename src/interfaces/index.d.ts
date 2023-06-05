type Tokens = 'ETH' | 'LINK' | 'DOGE' | 'USDT';

export interface Currency {
  // TODO: add more currencies
  name: Tokens;
  amount: number;
  symbol?: string;
}

export interface Wallet {
  address: string;
  balance: Currency[];
}

export interface Signal {
  name: Tokens;
  amount: number;
}

export interface Bot {
  name: string;
  description?: string;
  performance: number;
  rating: number;
  signals: Signal[];
}
