import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { featuredPenguin } from '../data/mockData';
import { PenguinNFTCard } from './NFTCard';
export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-sky-500/30 rounded-full bg-sky-500/10 backdrop-blur-sm">
              <span className="text-lg">🐧</span>
              <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">
                The #1 Penguin NFT Marketplace
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Own the Rarest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400">
                Penguins on Chain
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Discover, buy, and sell the most iconic penguin NFTs on Ethereum.
              Pudgy Penguins, Lil Pudgys, and more — all linking directly to
              OpenSea.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="text-black font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
                  border: 'none',
                  color: '#fff'
                }}>

                Explore Penguins
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sky-500/50 text-white hover:bg-sky-500/10 font-bold rounded-xl">

                View on OpenSea
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <span className="block text-3xl font-black text-white mb-1">
                  8,888
                </span>
                <span className="text-gray-500 text-sm font-bold">
                  Pudgy Penguins
                </span>
              </div>
              <div className="w-px h-10 bg-gray-800" />
              <div>
                <span className="block text-3xl font-black text-white mb-1">
                  22,222
                </span>
                <span className="text-gray-500 text-sm font-bold">
                  Lil Pudgys
                </span>
              </div>
              <div className="w-px h-10 bg-gray-800" />
              <div>
                <span className="block text-3xl font-black text-white mb-1">
                  234k+
                </span>
                <span className="text-gray-500 text-sm font-bold">
                  Volume (ETH)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Featured Card */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: 5
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: 'spring'
            }}
            className="relative max-w-md mx-auto lg:ml-auto">

            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-[2rem] opacity-25 blur-2xl animate-pulse" />

            <div className="relative transform transition-transform hover:-translate-y-2 duration-300">
              <div className="absolute -top-6 -right-6 z-20 bg-white text-black px-4 py-2 rounded-xl font-black shadow-xl transform rotate-12 border-2 border-black text-sm">
                🧊 FEATURED!
              </div>
              <PenguinNFTCard nft={featuredPenguin} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}