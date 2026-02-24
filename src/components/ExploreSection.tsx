import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenguinNFTCard } from './NFTCard';
import { NFTDetailModal } from './NFTDetailModal';
import {
  penguinNFTs,
  penguinCategories,
  PenguinCategory,
  PenguinNFT } from
'../data/mockData';
import { Search, SlidersHorizontal } from 'lucide-react';
const SORT_OPTIONS = [
'Price: Low to High',
'Price: High to Low',
'Most Liked',
'Rarity'];

export function ExploreSection() {
  const [selectedCategory, setSelectedCategory] =
  useState<PenguinCategory>('All');
  const [selectedNFT, setSelectedNFT] = useState<PenguinNFT | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Price: Low to High');
  const filteredNFTs = penguinNFTs.
  filter((nft) => {
    const matchesCategory =
    selectedCategory === 'All' || nft.category === selectedCategory;
    const matchesSearch =
    nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    nft.collection.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).
  sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    if (sortBy === 'Most Liked') return b.likes - a.likes;
    return 0;
  });
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-3">
              <span>🐧</span> Explore Penguins
            </h2>
            <p className="text-gray-400">
              Click any penguin to view details — buy directly on OpenSea
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 md:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search penguins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0f1929] border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors text-sm" />

            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#0f1929] border border-gray-800 rounded-xl py-2.5 pl-4 pr-8 text-white text-sm focus:outline-none focus:border-sky-500 cursor-pointer">

                {SORT_OPTIONS.map((opt) =>
                <option key={opt} value={opt}>
                    {opt}
                  </option>
                )}
              </select>
              <SlidersHorizontal className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 w-3.5 h-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {penguinCategories.map((category) =>
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${selectedCategory === category ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-105' : 'bg-[#0f1929] text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'}`}>

              {category}
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-6">
          Showing{' '}
          <span className="text-white font-bold">{filteredNFTs.length}</span>{' '}
          penguins
        </p>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          <AnimatePresence mode="popLayout">
            {filteredNFTs.map((nft) =>
            <motion.div
              key={nft.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3
              }}>

                <PenguinNFTCard nft={nft} onClick={() => setSelectedNFT(nft)} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {filteredNFTs.length === 0 &&
        <div className="text-center py-20 bg-[#0f1929] rounded-3xl border border-dashed border-gray-800">
            <div className="text-5xl mb-4">🐧</div>
            <p className="text-gray-500 text-lg">No penguins found.</p>
            <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 text-sky-400 hover:text-sky-300 font-bold">

              Clear filters
            </button>
          </div>
        }
      </div>

      {/* Detail Modal */}
      <NFTDetailModal
        nft={selectedNFT}
        isOpen={!!selectedNFT}
        onClose={() => setSelectedNFT(null)} />

    </section>);

}