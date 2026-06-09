'use client';
import { createContext, useContext, useEffect, useState } from 'react';

interface ColorModeContextType {
  isDark: boolean;
  toggle: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  isDark: false,
  toggle: () => {},
});

export function useColorMode() {
  return useContext(ColorModeContext);
}

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('color-theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggle = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('color-theme', 'light');
      }
      return next;
    });
  };

  return (
    <ColorModeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ColorModeContext.Provider>
  );
}
