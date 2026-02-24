import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { WalletModal } from './components/WalletModal';
import { HeroSection } from './components/HeroSection';
import { TrendingCollections } from './components/TrendingCollections';
import { ExploreSection } from './components/ExploreSection';
import { ActivityFeed } from './components/ActivityFeed';
export function App() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const handleConnect = (address: string) => {
    setWalletAddress(address);
  };
  return (
    <div className="min-h-screen font-sans bg-[#0a0f1e] text-white">
      <Navbar
        walletAddress={walletAddress}
        onConnectClick={() => setShowWalletModal(true)} />


      <WalletModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onConnect={handleConnect} />


      <main>
        <HeroSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TrendingCollections />
            </div>
            <div className="lg:col-span-1">
              <ActivityFeed />
            </div>
          </div>
        </div>

        <ExploreSection />
      </main>

      <footer className="border-t border-sky-500/10 py-12 px-4 sm:px-6 lg:px-8 mt-12 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🐧</span>
              <span className="text-xl font-black tracking-tight text-white">
                Penguin
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
                  Vault
                </span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs text-center sm:text-left">
              The premier marketplace for penguin NFTs. All purchases redirect
              to OpenSea for secure transactions.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-4">
            <div className="flex items-center gap-6">
              {[
              {
                label: 'OpenSea',
                url: 'https://opensea.io/collection/pudgypenguins'
              },
              {
                label: 'Twitter',
                url: 'https://twitter.com/pudgypenguins'
              },
              {
                label: 'Discord',
                url: '#'
              }].
              map(({ label, url }) =>
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white text-sm font-bold transition-colors">

                  {label}
                </a>
              )}
            </div>
            <p className="text-gray-600 text-xs">
              © 2024 PenguinVault. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>);

}