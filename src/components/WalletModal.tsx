import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (address: string) => void;
}
const walletOptions = [
{
  id: 'metamask',
  name: 'MetaMask',
  description: 'Connect using browser wallet',
  icon: '🦊'
},
{
  id: 'walletconnect',
  name: 'WalletConnect',
  description: 'Scan with mobile wallet',
  icon: '🔗'
},
{
  id: 'coinbase',
  name: 'Coinbase Wallet',
  description: 'Connect with Coinbase',
  icon: '🔵'
}];

function generateMockAddress(): string {
  const chars = '0123456789abcdef';
  let addr = '0x';
  for (let i = 0; i < 40; i++)
  addr += chars[Math.floor(Math.random() * chars.length)];
  return addr;
}
export function WalletModal({ isOpen, onClose, onConnect }: WalletModalProps) {
  const [connecting, setConnecting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const handleConnect = async (walletId: string) => {
    setConnecting(walletId);
    setError(null);
    try {
      if (walletId === 'metamask') {
        if (typeof window.ethereum !== 'undefined') {
          try {
            const accounts = await window.ethereum.request({
              method: 'eth_requestAccounts'
            });
            if (accounts && accounts.length > 0) {
              onConnect(accounts[0]);
              onClose();
            } else {
              setError('No accounts found');
            }
          } catch (err: any) {
            if (err.code === 4001) setError('User rejected connection');else
            setError('Failed to connect to MetaMask');
          }
        } else {
          setError(
            'MetaMask is not installed. Please install it from metamask.io'
          );
        }
      } else {
        await new Promise((r) => setTimeout(r, 1500));
        onConnect(generateMockAddress());
        onClose();
      }
    } catch (err) {
      setError('Connection failed');
    } finally {
      setConnecting(null);
    }
  };
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
          onClick={onClose} />


          <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
            y: 20
          }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">

            <div
            className="w-full max-w-md rounded-2xl p-6 pointer-events-auto relative overflow-hidden"
            style={{
              background: '#0a0f1e',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              boxShadow: '0 0 60px rgba(14, 165, 233, 0.1)'
            }}>

              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500" />

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">🐧</span>
                    <h2 className="text-xl font-black text-white">
                      Connect Wallet
                    </h2>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Select your wallet to explore PenguinVault
                  </p>
                </div>
                <motion.button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.9
                }}>

                  ✕
                </motion.button>
              </div>

              {/* Error */}
              {error &&
            <div className="mb-4 p-3 bg-red-900/20 border border-red-900/50 rounded-xl text-red-400 text-sm">
                  {error}
                </div>
            }

              {/* Wallet Options */}
              <div className="flex flex-col gap-3">
                {walletOptions.map((wallet, i) =>
              <motion.button
                key={wallet.id}
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
                onClick={() => handleConnect(wallet.id)}
                disabled={connecting !== null}
                className="flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 group border border-gray-800 hover:border-sky-500/40 bg-[#0f1929] hover:bg-[#0f1929]"
                whileTap={{
                  scale: 0.98
                }}>

                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-[#0a0f1e] border border-gray-800">
                      {connecting === wallet.id ?
                  <motion.div
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className="w-5 h-5 border-2 border-sky-500 border-t-transparent rounded-full" /> :


                  wallet.icon
                  }
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">
                        {wallet.name}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">
                        {wallet.description}
                      </div>
                    </div>
                    <span className="text-gray-600 group-hover:text-sky-400 transition-colors text-lg">
                      {connecting === wallet.id ? '' : '→'}
                    </span>
                  </motion.button>
              )}
              </div>

              <p className="text-center text-gray-600 text-xs mt-6">
                By connecting, you agree to our{' '}
                <span className="text-sky-500 cursor-pointer hover:text-sky-400">
                  Terms of Service
                </span>
              </p>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}
declare global {
  interface Window {
    ethereum?: {
      request: (args: {method: string;params?: any[];}) => Promise<any>;
    };
  }
}