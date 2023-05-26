export interface Currency {
  // TODO: add more currencies
  name: 'ETH' | 'LINK' | 'DOGE' | 'USDT';
  amount?: number;
  symbol?: string;
}

//TODO: Wallet interface

export interface Signal {
  currency: Currency;
  amount: number;
}

export interface Bot {
  name: string;
  imgUrl?: string;
  description?: string;
  performance: number;
  rating: number;
  signals: Signal[];
}
