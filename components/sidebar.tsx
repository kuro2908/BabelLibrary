'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Browse', href: '/browse' },
  { name: 'Library', href: '/library' },
  { name: 'Upload', href: '/upload' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-foreground/5 backdrop-blur-sm border-r border-foreground/10 flex flex-col z-40">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-foreground/10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-foreground/20 to-foreground/10 flex items-center justify-center text-xl font-bold text-foreground group-hover:scale-110 transition-transform">
            B
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">BabelLib</h1>
            <p className="text-xs text-foreground/60">Read & Explore</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                ? 'bg-foreground text-background shadow-lg'
                : 'text-foreground/70 hover:bg-foreground/10 hover:text-foreground'
                }`}
            >
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Theme Switcher */}
      <div className="p-4 border-t border-foreground/10">
        <div className="mb-4">
          <p className="text-xs text-foreground/60 mb-2 px-2">Theme</p>
          <ThemeSwitcherCompact />
        </div>

        {/* User Section Placeholder */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-foreground/30 to-foreground/10 flex items-center justify-center text-xs font-bold text-foreground">
            G
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Guest User</p>
            <p className="text-xs text-foreground/60">Sign in</p>
          </div>
        </div>
      </div>
    </aside>
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
    return (
      <div className="grid grid-cols-2 gap-1">
        {['light', 'dark', 'sepia', 'high-contrast'].map((theme) => (
          <div key={theme} className="px-2 py-1.5 rounded-lg bg-foreground/10 h-8" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-1">
      {['light', 'dark', 'sepia', 'high-contrast'].map((theme) => {
        const isActive = currentTheme === theme;
        return (
          <button
            key={theme}
            onClick={() => setTheme(theme)}
            className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${isActive
                ? 'bg-foreground text-background'
                : 'bg-foreground/10 text-foreground/70 hover:bg-foreground/20'
              }`}
          >
            {theme === 'high-contrast' ? 'Contrast' : theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
