'use client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { ColorModeProvider, useColorMode } from './ColorModeContext';
import { lightTheme, darkTheme } from '@/theme';

function ThemedContent({ children }: { children: React.ReactNode }) {
  const { isDark } = useColorMode();
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const c = createCache({ key: 'mui' });
    c.compat = true;
    const prevInsert = c.insert.bind(c);
    let inserted: string[] = [];
    c.insert = (...args) => {
      const result = prevInsert(...args);
      const name = args[1]?.name;
      if (name && c.inserted[name] !== undefined && !inserted.includes(name)) {
        inserted.push(name);
      }
      return result;
    };
    const flush = () => {
      const prev = inserted;
      inserted = [];
      return prev;
    };
    return { cache: c, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;
    let styles = '';
    for (const name of names) {
      const style = cache.inserted[name];
      if (style && typeof style === 'string') styles += style;
    }
    if (!styles) return null;
    return (
      <style
        key="emotion-ssr"
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ColorModeProvider>
        <ThemedContent>{children}</ThemedContent>
      </ColorModeProvider>
    </CacheProvider>
  );
}
