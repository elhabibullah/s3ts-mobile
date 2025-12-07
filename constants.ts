import { NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'S3Ts Pro 3.0', href: '#pro3', hasDropdown: true },
  { label: 'HOLO-Beam', href: '#holographic' },
  { label: 'Neural OS', href: '#ai' },
  { label: 'Solar Tech', href: '#energy' },
  { label: 'Support', href: '#support' },
  { label: 'Community', href: '#community' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "S3Ts Pro 3.0",
    subtitle: "The Holographic Revolution. Unbreakable. Infinite.",
    image: "https://fit-4rce-x.s3.eu-north-1.amazonaws.com/Metaball_liquid_wt_bg.mp4",
    cta: "Pre-Order Now",
    theme: "light"
  }
];

// Reusing Product interface to display features/editions
export const PRODUCTS: Product[] = [
  {
    id: 'titanium',
    name: 'Aerospace Titanium',
    tagline: 'Alpha Alloy Chassis',
    series: 'X',
    image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3TS_hightech.png',
    isNew: true,
  },
  {
    id: 'holo',
    name: 'HOLO-Lens 300MP',
    tagline: 'Quantum Sensor Camera',
    series: 'X',
    image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3TS_hightech.png',
    isNew: true,
  },
  {
    id: 'ai',
    name: 'Neural Core A2X',
    tagline: '48 AI Cores',
    series: 'X',
    image: 'https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3TS_hightech.png',
    isNew: true,
  }
];

export const VIVO_BLUE = '#111111'; // Luxury Black