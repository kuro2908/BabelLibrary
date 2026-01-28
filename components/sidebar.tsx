'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Library, Upload, BookOpen, X, Book, User } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Browse', href: '/browse', icon: BookOpen },
  { name: 'Library', href: '/library', icon: Library },
  { name: 'Upload', href: '/upload', icon: Upload },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to handle desktop vs mobile behavior
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sidebarContent = (
    <div className="flex flex-col h-full bg-background/5 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none">
      {/* Close Button for Mobile */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:hidden p-2 text-foreground/50 hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors z-50"
      >
        <X size={20} />
      </button>

      {/* Logo/Brand */}
      <div className="p-6 border-b border-foreground/10">
        <Link href="/" className="flex items-center gap-3 group" onClick={isOpen && isMobile ? onClose : undefined}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-foreground/20 to-foreground/10 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
            <Book size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">BabelLib</h1>
            <p className="text-xs text-foreground/60">Read & Explore</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={isOpen && isMobile ? onClose : undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                  ? 'bg-foreground text-background shadow-lg'
                  : 'text-foreground/70 hover:bg-foreground/10 hover:text-foreground'
                }`}
            >
              <item.icon size={20} strokeWidth={2} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-foreground/10 bg-foreground/5 md:bg-transparent">
        <div className="mb-4">
          <p className="text-xs text-foreground/60 mb-2 px-2 uppercase tracking-wider font-semibold">Theme</p>
          <ThemeSwitcherCompact />
        </div>

        {/* User Section Placeholder */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 border border-foreground/5 transition-colors cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-foreground/20 to-foreground/5 flex items-center justify-center text-foreground border border-foreground/10 group-hover:border-foreground/20">
            <User size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Guest User</p>
            <p className="text-xs text-foreground/60">Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Static) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 border-r border-foreground/10 flex-col z-40 bg-foreground/5 backdrop-blur-xl">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onClose}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Sidebar Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed left-0 top-0 h-screen w-[85%] max-w-xs bg-background shadow-2xl border-r border-foreground/10 z-50 overflow-hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Compact theme switcher for sidebar
function ThemeSwitcherCompact() {
  const { theme: currentTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-20 animate-pulse bg-foreground/5 rounded-lg" />;
  }

  return (
    <div className="grid grid-cols-2 gap-1.5">
      {['light', 'dark', 'sepia', 'coffee'].map((theme) => {
        const isActive = currentTheme === theme;
        return (
          <button
            key={theme}
            onClick={() => setTheme(theme)}
            className={`px-2 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${isActive
                ? 'bg-foreground text-background border-foreground shadow-sm scale-[1.02]'
                : 'bg-background hover:bg-foreground/5 text-foreground/70 border-transparent hover:border-foreground/10'
              }`}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
