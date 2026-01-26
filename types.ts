
export interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
  isNew?: boolean;
  price?: string;
  series: 'X' | 'V' | 'Y' | 'Accessory';
  specs?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type Language = 'en' | 'ar';

export type AppView = 'home' | 'store' | 'investors' | 'about' | 'chat-web' | 'fitness' | 'fintech' | 'cv-maker' | 'nova-tax' | 'telecom' | 'foldable' | 'notebook' | 'cart';
