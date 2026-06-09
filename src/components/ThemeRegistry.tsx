'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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
  return (
    <ColorModeProvider>
      <ThemedContent>{children}</ThemedContent>
    </ColorModeProvider>
  );
}
