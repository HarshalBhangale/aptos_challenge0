export interface User {
  address: string;
  clicks: number;
}

declare global {
  interface Window { aptos: any; }
}