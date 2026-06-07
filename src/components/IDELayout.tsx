'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { COLORS } from '@/theme';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import StatusBar from './StatusBar';

export default function IDELayout({ children }: { children: React.ReactNode }) {
  const pathname               = usePathname();
  const theme                  = useTheme();
  const isMobile               = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawer] = useState(false);

  const sidebar = (
    <Sidebar
      activeHref={pathname}
      onFileClick={() => isMobile && setDrawer(false)}
    />
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
        bgcolor: COLORS.bg,
        fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
      }}
    >
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Activity bar */}
        <ActivityBar onMenuClick={() => setDrawer(true)} isMobile={isMobile} />

        {/* Sidebar — desktop */}
        {!isMobile && (
          <Box
            sx={{
              width: 260,
              flexShrink: 0,
              bgcolor: COLORS.sidebar,
              borderRight: `1px solid ${COLORS.border}`,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {sidebar}
          </Box>
        )}

        {/* Sidebar — mobile drawer */}
        {isMobile && (
          <Drawer
            open={drawerOpen}
            onClose={() => setDrawer(false)}
            slotProps={{
              paper: {
                sx: {
                  bgcolor: COLORS.sidebar,
                  width: 260,
                  borderRight: `1px solid ${COLORS.border}`,
                },
              },
            }}
          >
            {sidebar}
          </Drawer>
        )}

        {/* Content area */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
          <TabBar activeHref={pathname} />
          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
              bgcolor: COLORS.bg,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>

      <StatusBar />
    </Box>
  );
}
