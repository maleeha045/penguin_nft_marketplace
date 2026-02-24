export interface PenguinCollection {
  id: string;
  name: string;
  floorPrice: number;
  volume24h: number;
  volumeChange: number;
  totalVolume: number;
  verified: boolean;
  itemCount: number;
  openSeaUrl: string;
  bgGradient: string;
  accentColor: string;
  emoji: string;
}

export interface PenguinNFT {
  id: string;
  name: string;
  collection: string;
  creator: string;
  price: number;
  lastSale?: number;
  likes: number;
  category:
  'Pudgy Penguins' |
  'Lil Pudgys' |
  'Penguin Army' |
  'Spooky Penguins' |
  'Club Penguins' |
  'Ice Penguins';
  openSeaUrl: string;
  tokenId: string;
  contractAddress: string;
  bgColor: string;
  variant:
  'classic' |
  'hoodie' |
  'crown' |
  'pirate' |
  'wizard' |
  'astronaut' |
  'chef' |
  'ninja' |
  'cowboy' |
  'ghost';
  bodyColor: string;
  accentColor: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
}

export const penguinCollections: PenguinCollection[] = [
{
  id: 'pudgy-penguins',
  name: 'Pudgy Penguins',
  floorPrice: 8.5,
  volume24h: 234.6,
  volumeChange: 28.7,
  totalVolume: 234567,
  verified: true,
  itemCount: 8888,
  openSeaUrl: 'https://opensea.io/collection/pudgypenguins',
  bgGradient: 'from-sky-200 to-blue-300',
  accentColor: '#0ea5e9',
  emoji: '🐧'
},
{
  id: 'lil-pudgys',
  name: 'Lil Pudgys',
  floorPrice: 1.2,
  volume24h: 89.3,
  volumeChange: 14.5,
  totalVolume: 67890,
  verified: true,
  itemCount: 22222,
  openSeaUrl: 'https://opensea.io/collection/lil-pudgys',
  bgGradient: 'from-pink-200 to-purple-200',
  accentColor: '#ec4899',
  emoji: '🩷'
},
{
  id: 'penguin-army',
  name: 'Penguin Army',
  floorPrice: 0.08,
  volume24h: 12.4,
  volumeChange: -5.2,
  totalVolume: 8901,
  verified: false,
  itemCount: 10000,
  openSeaUrl: 'https://opensea.io/collection/penguin-army-nft',
  bgGradient: 'from-green-200 to-emerald-300',
  accentColor: '#22c55e',
  emoji: '🪖'
},
{
  id: 'spooky-penguins',
  name: 'Spooky Penguins',
  floorPrice: 0.15,
  volume24h: 8.7,
  volumeChange: 3.1,
  totalVolume: 5432,
  verified: false,
  itemCount: 6666,
  openSeaUrl: 'https://opensea.io/collection/spooky-penguins',
  bgGradient: 'from-purple-900 to-gray-900',
  accentColor: '#a855f7',
  emoji: '👻'
},
{
  id: 'club-penguins',
  name: 'Club Penguins',
  floorPrice: 0.05,
  volume24h: 4.2,
  volumeChange: 8.9,
  totalVolume: 2345,
  verified: false,
  itemCount: 5000,
  openSeaUrl: 'https://opensea.io/collection/club-penguins-nft',
  bgGradient: 'from-yellow-200 to-orange-200',
  accentColor: '#f59e0b',
  emoji: '🎉'
},
{
  id: 'ice-penguins',
  name: 'Ice Penguins',
  floorPrice: 0.32,
  volume24h: 18.9,
  volumeChange: 22.4,
  totalVolume: 14567,
  verified: true,
  itemCount: 9999,
  openSeaUrl: 'https://opensea.io/collection/ice-penguins',
  bgGradient: 'from-cyan-200 to-teal-200',
  accentColor: '#22d3ee',
  emoji: '🧊'
}];


export const penguinNFTs: PenguinNFT[] = [
{
  id: 'p1',
  name: 'Pudgy Penguin #1',
  collection: 'Pudgy Penguins',
  creator: 'Pudgy Penguins',
  price: 8.5,
  lastSale: 7.8,
  likes: 2341,
  category: 'Pudgy Penguins',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/1',
  tokenId: '1',
  contractAddress: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
  bgColor: '#e0f2fe',
  variant: 'classic',
  bodyColor: '#0ea5e9',
  accentColor: '#fbbf24',
  rarity: 'Legendary'
},
{
  id: 'p2',
  name: 'Pudgy Penguin #42',
  collection: 'Pudgy Penguins',
  creator: 'Pudgy Penguins',
  price: 9.2,
  lastSale: 8.1,
  likes: 1876,
  category: 'Pudgy Penguins',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/42',
  tokenId: '42',
  contractAddress: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
  bgColor: '#bfdbfe',
  variant: 'crown',
  bodyColor: '#60a5fa',
  accentColor: '#fbbf24',
  rarity: 'Legendary'
},
{
  id: 'p3',
  name: 'Pudgy Penguin #100',
  collection: 'Pudgy Penguins',
  creator: 'Pudgy Penguins',
  price: 11.5,
  lastSale: 10.2,
  likes: 3102,
  category: 'Pudgy Penguins',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/100',
  tokenId: '100',
  contractAddress: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
  bgColor: '#dbeafe',
  variant: 'hoodie',
  bodyColor: '#3b82f6',
  accentColor: '#ec4899',
  rarity: 'Epic'
},
{
  id: 'p4',
  name: 'Pudgy Penguin #777',
  collection: 'Pudgy Penguins',
  creator: 'Pudgy Penguins',
  price: 15.0,
  lastSale: 13.5,
  likes: 4521,
  category: 'Pudgy Penguins',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/777',
  tokenId: '777',
  contractAddress: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
  bgColor: '#ede9fe',
  variant: 'wizard',
  bodyColor: '#7c3aed',
  accentColor: '#fbbf24',
  rarity: 'Legendary'
},
{
  id: 'p5',
  name: 'Pudgy Penguin #1234',
  collection: 'Pudgy Penguins',
  creator: 'Pudgy Penguins',
  price: 7.8,
  likes: 1234,
  category: 'Pudgy Penguins',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/1234',
  tokenId: '1234',
  contractAddress: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
  bgColor: '#fce7f3',
  variant: 'pirate',
  bodyColor: '#ec4899',
  accentColor: '#000',
  rarity: 'Rare'
},
{
  id: 'p6',
  name: 'Pudgy Penguin #3333',
  collection: 'Pudgy Penguins',
  creator: 'Pudgy Penguins',
  price: 8.9,
  lastSale: 8.0,
  likes: 1567,
  category: 'Pudgy Penguins',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/3333',
  tokenId: '3333',
  contractAddress: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
  bgColor: '#dcfce7',
  variant: 'astronaut',
  bodyColor: '#22c55e',
  accentColor: '#fff',
  rarity: 'Epic'
},
{
  id: 'p7',
  name: 'Lil Pudgy #1',
  collection: 'Lil Pudgys',
  creator: 'Pudgy Penguins',
  price: 1.2,
  lastSale: 1.05,
  likes: 987,
  category: 'Lil Pudgys',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0x524cab2ec69124574082676e6f654a18df49a048/1',
  tokenId: '1',
  contractAddress: '0x524cab2ec69124574082676e6f654a18df49a048',
  bgColor: '#fce7f3',
  variant: 'classic',
  bodyColor: '#ec4899',
  accentColor: '#fbbf24',
  rarity: 'Common'
},
{
  id: 'p8',
  name: 'Lil Pudgy #42',
  collection: 'Lil Pudgys',
  creator: 'Pudgy Penguins',
  price: 1.45,
  likes: 765,
  category: 'Lil Pudgys',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0x524cab2ec69124574082676e6f654a18df49a048/42',
  tokenId: '42',
  contractAddress: '0x524cab2ec69124574082676e6f654a18df49a048',
  bgColor: '#ede9fe',
  variant: 'chef',
  bodyColor: '#a855f7',
  accentColor: '#fff',
  rarity: 'Uncommon'
},
{
  id: 'p9',
  name: 'Lil Pudgy #100',
  collection: 'Lil Pudgys',
  creator: 'Pudgy Penguins',
  price: 1.8,
  lastSale: 1.6,
  likes: 1102,
  category: 'Lil Pudgys',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0x524cab2ec69124574082676e6f654a18df49a048/100',
  tokenId: '100',
  contractAddress: '0x524cab2ec69124574082676e6f654a18df49a048',
  bgColor: '#fef3c7',
  variant: 'ninja',
  bodyColor: '#f59e0b',
  accentColor: '#000',
  rarity: 'Rare'
},
{
  id: 'p10',
  name: 'Lil Pudgy #500',
  collection: 'Lil Pudgys',
  creator: 'Pudgy Penguins',
  price: 1.1,
  likes: 543,
  category: 'Lil Pudgys',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0x524cab2ec69124574082676e6f654a18df49a048/500',
  tokenId: '500',
  contractAddress: '0x524cab2ec69124574082676e6f654a18df49a048',
  bgColor: '#dcfce7',
  variant: 'cowboy',
  bodyColor: '#22c55e',
  accentColor: '#92400e',
  rarity: 'Uncommon'
},
{
  id: 'p11',
  name: 'Penguin Army #1',
  collection: 'Penguin Army',
  creator: 'Penguin Army',
  price: 0.08,
  likes: 234,
  category: 'Penguin Army',
  openSeaUrl: 'https://opensea.io/collection/penguin-army-nft',
  tokenId: '1',
  contractAddress: '0x0000000000000000000000000000000000000001',
  bgColor: '#dcfce7',
  variant: 'classic',
  bodyColor: '#16a34a',
  accentColor: '#fbbf24',
  rarity: 'Common'
},
{
  id: 'p12',
  name: 'Spooky Penguin #1',
  collection: 'Spooky Penguins',
  creator: 'Spooky Penguins',
  price: 0.15,
  likes: 456,
  category: 'Spooky Penguins',
  openSeaUrl: 'https://opensea.io/collection/spooky-penguins',
  tokenId: '1',
  contractAddress: '0x0000000000000000000000000000000000000002',
  bgColor: '#1e1b4b',
  variant: 'ghost',
  bodyColor: '#a855f7',
  accentColor: '#e879f9',
  rarity: 'Rare'
},
{
  id: 'p13',
  name: 'Club Penguin #1',
  collection: 'Club Penguins',
  creator: 'Club Penguins',
  price: 0.05,
  likes: 189,
  category: 'Club Penguins',
  openSeaUrl: 'https://opensea.io/collection/club-penguins-nft',
  tokenId: '1',
  contractAddress: '0x0000000000000000000000000000000000000003',
  bgColor: '#fef3c7',
  variant: 'classic',
  bodyColor: '#f59e0b',
  accentColor: '#dc2626',
  rarity: 'Common'
},
{
  id: 'p14',
  name: 'Ice Penguin #1',
  collection: 'Ice Penguins',
  creator: 'Ice Penguins',
  price: 0.32,
  lastSale: 0.28,
  likes: 678,
  category: 'Ice Penguins',
  openSeaUrl: 'https://opensea.io/collection/ice-penguins',
  tokenId: '1',
  contractAddress: '0x0000000000000000000000000000000000000004',
  bgColor: '#cffafe',
  variant: 'classic',
  bodyColor: '#22d3ee',
  accentColor: '#fff',
  rarity: 'Uncommon'
},
{
  id: 'p15',
  name: 'Pudgy Penguin #5000',
  collection: 'Pudgy Penguins',
  creator: 'Pudgy Penguins',
  price: 8.2,
  likes: 1432,
  category: 'Pudgy Penguins',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/5000',
  tokenId: '5000',
  contractAddress: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
  bgColor: '#fff7ed',
  variant: 'hoodie',
  bodyColor: '#f97316',
  accentColor: '#fff',
  rarity: 'Rare'
},
{
  id: 'p16',
  name: 'Lil Pudgy #1000',
  collection: 'Lil Pudgys',
  creator: 'Pudgy Penguins',
  price: 1.35,
  likes: 876,
  category: 'Lil Pudgys',
  openSeaUrl:
  'https://opensea.io/assets/ethereum/0x524cab2ec69124574082676e6f654a18df49a048/1000',
  tokenId: '1000',
  contractAddress: '0x524cab2ec69124574082676e6f654a18df49a048',
  bgColor: '#e0f2fe',
  variant: 'crown',
  bodyColor: '#0ea5e9',
  accentColor: '#fbbf24',
  rarity: 'Epic'
}];


export type PenguinCategory =
'All' |
'Pudgy Penguins' |
'Lil Pudgys' |
'Penguin Army' |
'Spooky Penguins' |
'Club Penguins' |
'Ice Penguins';

export const penguinCategories: PenguinCategory[] = [
'All',
'Pudgy Penguins',
'Lil Pudgys',
'Penguin Army',
'Spooky Penguins',
'Club Penguins',
'Ice Penguins'];


export const featuredPenguin = penguinNFTs[3]; // Pudgy Penguin #777 - Wizard