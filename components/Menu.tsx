'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-black/95 backdrop-blur-xl z-50 p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col h-full">
              {/* Join Button */}
              <div className="mt-16">
                <button
                  className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                  onClick={() => {
                    // Handle join action
                    console.log('Join clicked');
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
