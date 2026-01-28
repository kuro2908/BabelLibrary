'use client';

import { Sidebar } from './sidebar';
import { ReactNode } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = require('react').useState(false);

  return (
    <div className="min-h-screen">
      {/* Mobile Toggle Button */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-background/80 backdrop-blur-md border border-foreground/10 md:hidden hover:bg-foreground/10 shadow-sm text-foreground"
            aria-label="Open Sidebar"
          >
            <Menu size={24} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sidebar with responsive props */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <main className="min-h-screen transition-all duration-300 md:ml-64">
        {children}
      </main>
    </div>
  );
}
