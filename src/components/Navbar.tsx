'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { COLORS } from '@/theme';
import { useColorMode } from './ColorModeContext';

const NAV_LINKS = [
  { label: 'Experience', href: '/experience' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Workshops',  href: '/workshops' },
  { label: 'Off Duty',   href: '/off-duty' },
  { label: 'Contact',    href: 'mailto:isabellakpai@gmail.com', external: true },
];

function isActive(href: string, pathname: string) {
  if (href.startsWith('mailto:')) return false;
  if (href === '/experience') return pathname.startsWith('/experience');
  if (href === '/projects')   return pathname.startsWith('/projects') || pathname.startsWith('/systems-architecture');
  if (href === '/workshops')  return pathname.startsWith('/workshops');
  if (href.startsWith('/off-duty')) return pathname.startsWith('/off-duty');
  return pathname === href;
}

const linkBase = {
  fontFamily: 'var(--font-mono), monospace',
  fontSize: 13,
  px: 1.5,
  py: 0.75,
  borderRadius: 1,
  textDecoration: 'none',
  transition: 'all 0.15s',
  borderBottom: '2px solid transparent',
  display: 'inline-block',
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useColorMode();

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: 60,
          bgcolor: COLORS.sidebar,
          borderBottom: `1px solid ${COLORS.border}`,
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2.5, sm: 5 },
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              fontFamily: 'inherit',
              fontWeight: 700,
              fontSize: 15,
              color: COLORS.textPrimary,
              userSelect: 'none',
            }}
          >
            <span style={{ color: COLORS.pink }}>IK</span>
            <span style={{ color: COLORS.textMuted, fontWeight: 400, fontSize: 12 }}>.portfolio</span>
          </Typography>
        </Link>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.25 }}>
          {NAV_LINKS.map(link => {
            const active = isActive(link.href, pathname);
            return link.external ? (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  ...linkBase,
                  color: COLORS.textSecondary,
                  '&:hover': { color: COLORS.pink, bgcolor: `${COLORS.pink}08` },
                }}
              >
                {link.label}
              </Box>
            ) : (
              <Link key={link.label} href={link.href} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    ...linkBase,
                    color: active ? COLORS.pink : COLORS.textSecondary,
                    bgcolor: active ? `${COLORS.pink}0D` : 'transparent',
                    borderBottom: active ? `2px solid ${COLORS.pink}` : '2px solid transparent',
                    '&:hover': { color: COLORS.pink, bgcolor: `${COLORS.pink}08` },
                  }}
                >
                  {link.label}
                </Box>
              </Link>
            );
          })}
        </Box>

        {/* Theme toggle — always visible */}
        <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
          <IconButton
            onClick={toggle}
            size="small"
            sx={{
              color: isDark ? COLORS.blush : COLORS.textSecondary,
              ml: 0.5,
              '&:hover': { color: COLORS.pink, bgcolor: `${COLORS.pink}10` },
            }}
          >
            {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          </IconButton>
        </Tooltip>

        {/* Mobile hamburger */}
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: 'flex', md: 'none' }, color: COLORS.textSecondary, ml: 0.25 }}
          size="small"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { bgcolor: COLORS.sidebar, width: 220, p: 2, borderLeft: `1px solid ${COLORS.border}` } } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: COLORS.textSecondary }} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {NAV_LINKS.map(link => {
            const active = isActive(link.href, pathname);
            return link.external ? (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                onClick={() => setOpen(false)}
                sx={{ fontFamily: 'inherit', fontSize: 14, px: 2, py: 1.25, borderRadius: 1, textDecoration: 'none', color: COLORS.textSecondary, display: 'block', '&:hover': { color: COLORS.pink, bgcolor: `${COLORS.pink}08` } }}
              >
                {link.label}
              </Box>
            ) : (
              <Link key={link.label} href={link.href} style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
                <Box sx={{ fontFamily: 'inherit', fontSize: 14, px: 2, py: 1.25, borderRadius: 1, color: active ? COLORS.pink : COLORS.textSecondary, bgcolor: active ? `${COLORS.pink}0D` : 'transparent', '&:hover': { color: COLORS.pink, bgcolor: `${COLORS.pink}08` } }}>
                  {link.label}
                </Box>
              </Link>
            );
          })}
        </Box>
      </Drawer>
    </>
  );
}
