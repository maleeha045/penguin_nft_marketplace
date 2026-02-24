import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenguinNFT } from '../data/mockData';
import { PenguinCharacter } from './NFTCard';
import { ExternalLink, Heart, Share2, X } from 'lucide-react';
interface NFTDetailModalProps {
  nft: PenguinNFT | null;
  isOpen: boolean;
  onClose: () => void;
}
const RARITY_COLORS: Record<PenguinNFT['rarity'], string> = {
  Common: '#94a3b8',
  Uncommon: '#22c55e',
  Rare: '#3b82f6',
  Epic: '#a855f7',
  Legendary: '#f59e0b'
};
export function NFTDetailModal({ nft, isOpen, onClose }: NFTDetailModalProps) {
  if (!nft) return null;
  const rarityColor = RARITY_COLORS[nft.rarity];
  const handleOpenSea = () => window.open(nft.openSeaUrl, '_blank');
  const handleViewCollection = () =>
  window.open(
    `https://opensea.io/collection/${nft.collection.toLowerCase().replace(/\s+/g, '-')}`,
    '_blank'
  );
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
          onClick={onClose} />


          <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">

            <div className="w-full max-w-5xl bg-[#0a0f1e] border border-sky-500/20 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row max-h-[90vh]">
              {/* Left: Image */}
              <div
              className="w-full md:w-1/2 relative flex items-center justify-center p-10"
              style={{
                background: nft.bgColor
              }}>

                <div className="aspect-square w-full max-w-xs relative">
                  <svg
                  className="w-full h-full drop-shadow-2xl"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg">

                    <PenguinCharacter
                    variant={nft.variant}
                    bodyColor={nft.bodyColor}
                    accentColor={nft.accentColor} />

                  </svg>
                </div>

                <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors">

                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Rarity badge */}
                <div
                className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider"
                style={{
                  background: `${rarityColor}22`,
                  color: rarityColor,
                  border: `1px solid ${rarityColor}55`
                }}>

                  {nft.rarity}
                </div>
              </div>

              {/* Right: Info */}
              <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto bg-[#0a0f1e]">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sky-400 font-bold text-sm tracking-wide uppercase">
                        {nft.collection}
                      </span>
                      <span className="bg-blue-500/20 text-blue-400 text-[10px] px-1.5 py-0.5 rounded font-bold">
                        VERIFIED
                      </span>
                    </div>
                    <h2 className="text-3xl font-black text-white mb-1">
                      {nft.name}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      Token #{nft.tokenId} · by{' '}
                      <span className="text-white font-bold">
                        {nft.creator}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 border border-gray-800 rounded-xl hover:bg-gray-800 text-gray-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 border border-gray-800 rounded-xl hover:bg-gray-800 text-gray-400 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Price Box */}
                <div className="bg-[#0f1929] border border-sky-500/20 rounded-2xl p-6 mb-6">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                    Current Price
                  </p>
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-4xl font-black text-white">
                      {nft.price} ETH
                    </span>
                    <span className="text-gray-500 text-base font-medium">
                      (${(nft.price * 3200).toLocaleString()})
                    </span>
                  </div>
                  {nft.lastSale &&
                <p className="text-gray-600 text-xs mb-4">
                      Last sale:{' '}
                      <span className="text-gray-400">{nft.lastSale} ETH</span>
                    </p>
                }

                  <div className="flex flex-col gap-3">
                    <button
                    onClick={handleOpenSea}
                    className="w-full py-4 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95"
                    style={{
                      background: 'linear-gradient(135deg, #2081e2, #1868b7)'
                    }}>

                      <span>Buy on OpenSea</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button
                    onClick={handleOpenSea}
                    className="w-full py-3.5 border border-gray-700 hover:border-sky-500/50 text-white font-bold rounded-xl transition-colors text-sm">

                      Make Offer on OpenSea
                    </button>
                  </div>
                </div>

                {/* Traits */}
                <div>
                  <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">
                    Traits
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                  {
                    label: 'Variant',
                    value: nft.variant
                  },
                  {
                    label: 'Rarity',
                    value: nft.rarity
                  },
                  {
                    label: 'Body Color',
                    value: nft.bodyColor
                  },
                  {
                    label: 'Token ID',
                    value: `#${nft.tokenId}`
                  },
                  {
                    label: 'Collection',
                    value: nft.collection
                  },
                  {
                    label: 'Likes',
                    value: nft.likes.toLocaleString()
                  }].
                  map(({ label, value }) =>
                  <div
                    key={label}
                    className="bg-[#0f1929] p-3 rounded-xl border border-gray-800">

                        <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-1">
                          {label}
                        </span>
                        <span className="text-white font-bold text-sm capitalize truncate block">
                          {value}
                        </span>
                      </div>
                  )}
                  </div>
                </div>

                {/* View Collection */}
                <button
                onClick={handleViewCollection}
                className="mt-5 w-full py-3 rounded-xl border border-sky-500/20 text-sky-400 text-sm font-bold hover:bg-sky-500/10 transition-colors flex items-center justify-center gap-2">

                  View Full Collection on OpenSea
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}