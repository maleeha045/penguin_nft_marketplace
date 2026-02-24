import React from 'react';
import { BadgeCheck, TrendingUp, TrendingDown } from 'lucide-react';
import { Collection } from '../data/mockData';
interface CollectionCardProps {
  collection: Collection;
  rank: number;
}
export function CollectionCard({ collection, rank }: CollectionCardProps) {
  const isPositive = collection.volumeChange >= 0;
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#12121f] border border-white/5 hover:bg-[#1a1a2e] hover:border-purple-500/30 transition-all cursor-pointer group">
      <span className="text-lg font-mono font-bold text-gray-500 w-6">
        {rank}
      </span>

      <div className="relative">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-14 h-14 rounded-lg object-cover group-hover:scale-105 transition-transform" />

        {collection.verified &&
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
            <BadgeCheck size={14} className="text-blue-500 fill-blue-500/20" />
          </div>
        }
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-white truncate group-hover:text-purple-400 transition-colors">
          {collection.name}
        </h3>
        <div className="flex items-center gap-4 mt-1">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase">Floor</span>
            <span className="text-xs font-mono text-gray-300">
              {collection.floorPrice} ETH
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase">Volume</span>
            <div
              className={`flex items-center gap-1 text-xs font-mono ${isPositive ? 'text-green-400' : 'text-red-400'}`}>

              {isPositive ?
              <TrendingUp size={12} /> :

              <TrendingDown size={12} />
              }
              <span>{Math.abs(collection.volumeChange)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>);

}