'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed top-4 right-4 z-50 flex gap-2 p-2 rounded-lg bg-foreground/10 backdrop-blur-sm">
            {['light', 'dark', 'sepia', 'coffee'].map((t) => (
                <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${theme === t
                        ? 'bg-foreground text-background'
                        : 'bg-background text-foreground hover:bg-foreground/20'
                        }`}
                >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
            ))}
        </div>
    );
}
