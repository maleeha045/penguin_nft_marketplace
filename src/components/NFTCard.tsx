import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenguinNFT } from '../data/mockData';
interface NFTCardProps {
  nft: PenguinNFT;
  onClick?: () => void;
}
const RARITY_COLORS: Record<PenguinNFT['rarity'], string> = {
  Common: '#94a3b8',
  Uncommon: '#22c55e',
  Rare: '#3b82f6',
  Epic: '#a855f7',
  Legendary: '#f59e0b'
};
export function PenguinCharacter({
  variant,
  bodyColor,
  accentColor




}: {variant: PenguinNFT['variant'];bodyColor: string;accentColor: string;}) {
  const baseElements =
  <>
      <ellipse
      cx="100"
      cy="118"
      rx="50"
      ry="55"
      fill={bodyColor}
      stroke="#1a1a1a"
      strokeWidth="2.5" />

      <ellipse
      cx="100"
      cy="130"
      rx="32"
      ry="38"
      fill="#fff"
      stroke="#1a1a1a"
      strokeWidth="1.5" />

      <circle
      cx="100"
      cy="70"
      r="34"
      fill={bodyColor}
      stroke="#1a1a1a"
      strokeWidth="2.5" />

      <circle
      cx="88"
      cy="64"
      r="7"
      fill="#fff"
      stroke="#1a1a1a"
      strokeWidth="1.5" />

      <circle
      cx="112"
      cy="64"
      r="7"
      fill="#fff"
      stroke="#1a1a1a"
      strokeWidth="1.5" />

      <circle cx="90" cy="65" r="3.5" fill="#1a1a1a" />
      <circle cx="114" cy="65" r="3.5" fill="#1a1a1a" />
      <circle cx="91" cy="63" r="1.2" fill="#fff" />
      <circle cx="115" cy="63" r="1.2" fill="#fff" />
      <path
      d="M93 76 L107 76 L100 84 Z"
      fill="#fbbf24"
      stroke="#1a1a1a"
      strokeWidth="1.5" />

      <ellipse
      cx="58"
      cy="120"
      rx="12"
      ry="26"
      fill={bodyColor}
      stroke="#1a1a1a"
      strokeWidth="2"
      transform="rotate(-12 58 120)" />

      <ellipse
      cx="142"
      cy="120"
      rx="12"
      ry="26"
      fill={bodyColor}
      stroke="#1a1a1a"
      strokeWidth="2"
      transform="rotate(12 142 120)" />

      <ellipse
      cx="86"
      cy="168"
      rx="14"
      ry="7"
      fill="#fbbf24"
      stroke="#1a1a1a"
      strokeWidth="1.5" />

      <ellipse
      cx="114"
      cy="168"
      rx="14"
      ry="7"
      fill="#fbbf24"
      stroke="#1a1a1a"
      strokeWidth="1.5" />

    </>;

  if (variant === 'classic') {
    return <g>{baseElements}</g>;
  }
  if (variant === 'crown') {
    return (
      <g>
        {baseElements}
        <path
          d="M74 42 L74 26 L83 35 L100 20 L117 35 L126 26 L126 42 Z"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="2" />

        <circle cx="83" cy="34" r="3.5" fill="#ef4444" />
        <circle cx="100" cy="22" r="3.5" fill="#ef4444" />
        <circle cx="117" cy="34" r="3.5" fill="#ef4444" />
      </g>);

  }
  if (variant === 'hoodie') {
    return (
      <g>
        {baseElements}
        <path
          d="M62 92 Q100 78 138 92 L142 148 L58 148 Z"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="2"
          fillOpacity="0.9" />

        <path
          d="M74 70 Q100 58 126 70 Q126 48 100 43 Q74 48 74 70"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="2"
          fillOpacity="0.9" />

        <rect
          x="88"
          y="120"
          width="24"
          height="16"
          rx="4"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="1.5"
          fillOpacity="0.7" />

      </g>);

  }
  if (variant === 'wizard') {
    return (
      <g>
        {baseElements}
        <path
          d="M100 12 L82 50 L118 50 Z"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="2" />

        <rect
          x="74"
          y="48"
          width="52"
          height="9"
          rx="4"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="2" />

        <circle cx="92" cy="34" r="3" fill="#fbbf24" />
        <circle cx="106" cy="26" r="2.5" fill="#fbbf24" />
        <line
          x1="148"
          y1="102"
          x2="163"
          y2="80"
          stroke="#92400e"
          strokeWidth="4"
          strokeLinecap="round" />

        <circle
          cx="163"
          cy="78"
          r="5.5"
          fill="#fbbf24"
          stroke="#1a1a1a"
          strokeWidth="1.5" />

      </g>);

  }
  if (variant === 'pirate') {
    return (
      <g>
        {baseElements}
        <path
          d="M70 52 L130 52 L126 38 L100 32 L74 38 Z"
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeWidth="2" />

        <rect x="70" y="50" width="60" height="7" rx="2" fill="#1a1a1a" />
        <circle cx="100" cy="43" r="5.5" fill="#fff" />
        <circle cx="97.5" cy="42" r="1.5" fill="#1a1a1a" />
        <circle cx="102.5" cy="42" r="1.5" fill="#1a1a1a" />
        <path d="M97 46 L103 46" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="88" cy="64" r="8.5" fill="#1a1a1a" />
        <path d="M80 58 L96 58" stroke="#1a1a1a" strokeWidth="2" />
      </g>);

  }
  if (variant === 'astronaut') {
    return (
      <g>
        <ellipse
          cx="100"
          cy="118"
          rx="54"
          ry="58"
          fill="#e2e8f0"
          stroke="#1a1a1a"
          strokeWidth="2.5" />

        <circle
          cx="100"
          cy="70"
          r="38"
          fill="#94a3b8"
          stroke="#1a1a1a"
          strokeWidth="2.5" />

        <ellipse
          cx="100"
          cy="67"
          rx="24"
          ry="20"
          fill={accentColor}
          fillOpacity="0.75"
          stroke="#1a1a1a"
          strokeWidth="1.5" />

        <circle cx="90" cy="62" r="4.5" fill="#1a1a1a" />
        <circle cx="110" cy="62" r="4.5" fill="#1a1a1a" />
        <path d="M94 74 L106 74 L100 80 Z" fill="#fbbf24" />
        <rect
          x="86"
          y="122"
          width="28"
          height="18"
          rx="4"
          fill="#cbd5e1"
          stroke="#1a1a1a"
          strokeWidth="1.5" />

        <circle
          cx="100"
          cy="131"
          r="5.5"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="1" />

        <ellipse
          cx="86"
          cy="168"
          rx="14"
          ry="7"
          fill="#94a3b8"
          stroke="#1a1a1a"
          strokeWidth="1.5" />

        <ellipse
          cx="114"
          cy="168"
          rx="14"
          ry="7"
          fill="#94a3b8"
          stroke="#1a1a1a"
          strokeWidth="1.5" />

      </g>);

  }
  if (variant === 'chef') {
    return (
      <g>
        {baseElements}
        <rect
          x="80"
          y="32"
          width="40"
          height="9"
          rx="3"
          fill="#fff"
          stroke="#1a1a1a"
          strokeWidth="2" />

        <ellipse
          cx="100"
          cy="24"
          rx="20"
          ry="16"
          fill="#fff"
          stroke="#1a1a1a"
          strokeWidth="2" />

        <path
          d="M72 96 Q100 86 128 96 L130 152 L70 152 Z"
          fill="#fff"
          stroke="#1a1a1a"
          strokeWidth="1.5" />

        <rect
          x="88"
          y="112"
          width="24"
          height="28"
          rx="3"
          fill="#e5e7eb"
          stroke="#1a1a1a"
          strokeWidth="1" />

      </g>);

  }
  if (variant === 'ninja') {
    return (
      <g>
        {baseElements}
        <path
          d="M70 60 Q100 50 130 60 L130 80 Q100 90 70 80 Z"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="2" />

        <circle cx="88" cy="65" r="6.5" fill="#fff" />
        <circle cx="112" cy="65" r="6.5" fill="#fff" />
        <circle cx="89" cy="66" r="3.5" fill="#1a1a1a" />
        <circle cx="113" cy="66" r="3.5" fill="#1a1a1a" />
        <rect
          x="68"
          y="46"
          width="64"
          height="9"
          rx="4"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="1.5" />

        <path
          d="M124 46 L136 40 M124 54 L136 60"
          stroke={accentColor}
          strokeWidth="4"
          strokeLinecap="round" />

      </g>);

  }
  if (variant === 'cowboy') {
    return (
      <g>
        {baseElements}
        <ellipse
          cx="100"
          cy="48"
          rx="36"
          ry="7.5"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="2" />

        <path
          d="M80 48 L84 24 L100 19 L116 24 L120 48 Z"
          fill={accentColor}
          stroke="#1a1a1a"
          strokeWidth="2" />

        <rect
          x="80"
          y="44"
          width="40"
          height="6"
          rx="2"
          fill="#92400e"
          stroke="#1a1a1a"
          strokeWidth="1" />

        <text x="93" y="136" fontSize="14" fill="#fbbf24">
          ★
        </text>
      </g>);

  }
  if (variant === 'ghost') {
    return (
      <g>
        <path
          d="M56 82 Q56 42 100 37 Q144 42 144 82 L144 155 Q130 146 115 155 Q100 146 85 155 Q70 146 56 155 Z"
          fill={bodyColor}
          stroke="#1a1a1a"
          strokeWidth="2"
          fillOpacity="0.92" />

        <ellipse cx="86" cy="92" rx="11" ry="13" fill="#1a1a1a" />
        <ellipse cx="114" cy="92" rx="11" ry="13" fill="#1a1a1a" />
        <circle cx="89" cy="89" r="3.5" fill="#fff" />
        <circle cx="117" cy="89" r="3.5" fill="#fff" />
        <path
          d="M86 116 Q100 126 114 116"
          stroke="#1a1a1a"
          strokeWidth="2"
          fill="none" />

        <ellipse
          cx="100"
          cy="100"
          rx="52"
          ry="62"
          fill={accentColor}
          fillOpacity="0.08" />

      </g>);

  }
  // default fallback
  return (
    <g>
      <ellipse
        cx="100"
        cy="118"
        rx="50"
        ry="55"
        fill={bodyColor}
        stroke="#1a1a1a"
        strokeWidth="2.5" />

      <circle
        cx="100"
        cy="70"
        r="34"
        fill={bodyColor}
        stroke="#1a1a1a"
        strokeWidth="2.5" />

    </g>);

}
export function PenguinNFTCard({ nft, onClick }: NFTCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(nft.likes);
  const [hovered, setHovered] = useState(false);
  const rarityColor = RARITY_COLORS[nft.rarity];
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount((c) => liked ? c - 1 : c + 1);
  };
  const handleBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(nft.openSeaUrl, '_blank');
  };
  return (
    <motion.div
      className="rounded-2xl overflow-hidden cursor-pointer border transition-colors duration-300"
      style={{
        background: '#0f1929',
        borderColor: hovered ? nft.accentColor : 'rgba(14, 165, 233, 0.2)',
        boxShadow: hovered ? `0 8px 32px ${nft.accentColor}28` : 'none'
      }}
      whileHover={{
        y: -6,
        scale: 1.02
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}>

      {/* Image */}
      <div
        className="aspect-square relative overflow-hidden flex items-center justify-center"
        style={{
          background: nft.bgColor
        }}>

        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg">

          <PenguinCharacter
            variant={nft.variant}
            bodyColor={nft.bodyColor}
            accentColor={nft.accentColor} />

        </svg>

        {/* Like button */}
        <motion.button
          onClick={handleLike}
          className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold bg-white/30 hover:bg-white/50 text-black backdrop-blur-sm"
          whileTap={{
            scale: 0.9
          }}>

          <motion.span
            animate={{
              scale: liked ? [1, 1.4, 1] : 1
            }}
            transition={{
              duration: 0.3
            }}
            className={liked ? 'text-red-500' : 'text-gray-700'}>

            {liked ? '♥' : '♡'}
          </motion.span>
          {likeCount}
        </motion.button>

        {/* Rarity badge */}
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider"
          style={{
            background: `${rarityColor}22`,
            color: rarityColor,
            border: `1px solid ${rarityColor}55`
          }}>

          {nft.rarity}
        </div>

        {/* Buy overlay on hover */}
        <AnimatePresence>
          {hovered &&
          <motion.div
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: 10
            }}
            className="absolute bottom-4 left-4 right-4">

              <button
              onClick={handleBuy}
              className="w-full py-3 rounded-xl text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
              style={{
                background: 'linear-gradient(135deg, #2081e2, #1868b7)'
              }}>

                Buy on OpenSea
              </button>
            </motion.div>
          }
        </AnimatePresence>
      </div>

      {/* Card info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-white font-bold text-sm leading-tight truncate">
            {nft.name}
          </h3>
        </div>
        <p className="text-gray-500 text-xs mb-3 truncate">{nft.collection}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-[10px] uppercase tracking-wider mb-0.5">
              Price
            </p>
            <p className="text-white font-black text-base">{nft.price} ETH</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 text-[10px] uppercase tracking-wider mb-0.5">
              Last Sale
            </p>
            <p className="text-gray-400 text-sm font-bold">
              {nft.lastSale ?? '—'} ETH
            </p>
          </div>
        </div>
      </div>
    </motion.div>);

}