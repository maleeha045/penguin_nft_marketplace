import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface NavbarProps {
  walletAddress: string | null;
  onConnectClick: () => void;
}
export function Navbar({ walletAddress, onConnectClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const truncateAddress = (addr: string) =>
  `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  const navLinks = ['Explore', 'Collections', 'Activity', 'Stats'];
  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut'
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1e]/90 backdrop-blur-md border-b border-sky-500/20' : 'bg-transparent'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2.5 cursor-pointer"
            whileHover={{
              scale: 1.05
            }}>

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-sky-500/30 text-xl">
              🐧
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Penguin
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
                Vault
              </span>
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <motion.a
              key={link}
              href="#"
              className="text-gray-300 hover:text-white text-sm font-bold transition-colors relative group"
              whileHover={{
                y: -1
              }}>

                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            )}
          </div>

          {/* Wallet Button */}
          <div className="hidden md:flex items-center gap-3">
            {walletAddress ?
            <motion.button
              initial={{
                scale: 0.9,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm font-bold hover:bg-sky-500/20 transition-all">

                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {truncateAddress(walletAddress)}
              </motion.button> :

            <motion.button
              onClick={onConnectClick}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)'
              }}>

                Connect Wallet
              </motion.button>
            }
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}>

            <div className="w-6 h-0.5 bg-current mb-1.5 rounded-full" />
            <div className="w-6 h-0.5 bg-current mb-1.5 rounded-full" />
            <div className="w-6 h-0.5 bg-current rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-[#0a0f1e] border-t border-sky-500/20">

            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link}
              href="#"
              className="text-gray-300 hover:text-white py-2 text-sm font-bold">

                  {link}
                </a>
            )}
              <button
              onClick={onConnectClick}
              className="mt-4 px-5 py-3 rounded-xl text-sm font-bold text-white w-full"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)'
              }}>

                {walletAddress ?
              truncateAddress(walletAddress) :
              'Connect Wallet'}
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}