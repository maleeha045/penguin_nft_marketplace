import React from 'react';
import { motion } from 'framer-motion';
const activities = [
{
  id: 1,
  type: 'Sale',
  item: 'Pudgy Penguin #777',
  price: 15.0,
  from: '0x8a...4b2',
  to: '0x3c...9d1',
  time: '1 min ago',
  emoji: '🐧'
},
{
  id: 2,
  type: 'List',
  item: 'Pudgy Penguin #42',
  price: 9.2,
  from: '0x1f...2a4',
  to: null,
  time: '4 mins ago',
  emoji: '🐧'
},
{
  id: 3,
  type: 'Bid',
  item: 'Lil Pudgy #100',
  price: 1.6,
  from: '0x7e...1c3',
  to: null,
  time: '11 mins ago',
  emoji: '🩷'
},
{
  id: 4,
  type: 'Sale',
  item: 'Pudgy Penguin #1',
  price: 8.5,
  from: '0x9b...3f5',
  to: '0x2a...8e4',
  time: '22 mins ago',
  emoji: '🐧'
},
{
  id: 5,
  type: 'List',
  item: 'Lil Pudgy #1000',
  price: 1.35,
  from: '0x4d...6c7',
  to: null,
  time: '38 mins ago',
  emoji: '🩷'
},
{
  id: 6,
  type: 'Sale',
  item: 'Ice Penguin #1',
  price: 0.32,
  from: '0x6a...2b8',
  to: '0x5c...7d3',
  time: '1 hr ago',
  emoji: '🧊'
}];

const TYPE_COLORS: Record<string, string> = {
  Sale: 'text-green-400',
  List: 'text-sky-400',
  Bid: 'text-orange-400'
};
export function ActivityFeed() {
  return (
    <div className="bg-[#0f1929] border border-sky-500/10 rounded-3xl p-6 h-full">
      <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Live Activity
      </h3>

      <div className="space-y-3">
        {activities.map((activity, i) =>
        <motion.div
          key={activity.id}
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: i * 0.08
          }}
          className="flex items-center justify-between border-b border-gray-800/50 pb-3 last:border-0 last:pb-0">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0a0f1e] flex items-center justify-center text-lg border border-gray-800 flex-shrink-0">
                {activity.emoji}
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">
                  {activity.item}
                </div>
                <div className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                  <span className={TYPE_COLORS[activity.type]}>
                    {activity.type}
                  </span>
                  <span>by {activity.from}</span>
                </div>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-white font-bold text-sm">
                {activity.price} ETH
              </div>
              <div className="text-gray-600 text-xs">{activity.time}</div>
            </div>
          </motion.div>
        )}
      </div>

      <button
        className="mt-5 w-full py-2.5 rounded-xl border border-sky-500/20 text-sky-400 text-sm font-bold hover:bg-sky-500/10 transition-colors"
        onClick={() => window.open('https://opensea.io/activity', '_blank')}>

        View All Activity on OpenSea →
      </button>
    </div>);

}