import React from 'react';
import { motion } from 'framer-motion';
import { penguinCollections } from '../data/mockData';
export function TrendingCollections() {
  const handleCollectionClick = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <section className="bg-[#0f1929] rounded-3xl p-8 border border-sky-500/10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-2">
          <span className="text-2xl">🔥</span> Trending Collections
        </h2>
        <button
          className="text-sky-400 hover:text-sky-300 text-sm font-bold transition-colors"
          onClick={() => window.open('https://opensea.io/rankings', '_blank')}>

          View All on OpenSea →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {penguinCollections.map((collection, index) =>
        <motion.div
          key={collection.id}
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: index * 0.05
          }}
          onClick={() => handleCollectionClick(collection.openSeaUrl)}
          className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a0f1e] border border-gray-800 hover:border-sky-500/40 cursor-pointer transition-all hover:scale-[1.02] group">

            <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${collection.accentColor}22, ${collection.accentColor}44)`,
              border: `1px solid ${collection.accentColor}33`
            }}>

              {collection.emoji}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="text-white font-bold truncate text-sm">
                  {collection.name}
                </h3>
                {collection.verified &&
              <span className="text-blue-400 text-xs bg-blue-400/10 px-1 rounded">
                    ✓
                  </span>
              }
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block">Floor</span>
                  <span className="text-white font-bold">
                    {collection.floorPrice} ETH
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">24h Vol</span>
                  <span className="text-white font-bold">
                    {collection.volume24h} ETH
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Items</span>
                  <span className="text-white font-bold">
                    {collection.itemCount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div
            className={`text-xs font-bold flex-shrink-0 ${collection.volumeChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>

              {collection.volumeChange >= 0 ? '+' : ''}
              {collection.volumeChange}%
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}