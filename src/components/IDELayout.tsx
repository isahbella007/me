'use client';
import Box from '@mui/material/Box';
import { COLORS } from '@/theme';
import Navbar from './Navbar';
import StatusBar from './StatusBar';

export default function IDELayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: COLORS.bg,
        fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
      }}
    >
      <Navbar />
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>
      {/* <StatusBar /> */}
    </Box>
  );
}
