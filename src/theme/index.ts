import { createTheme } from '@mui/material/styles';

// ── Theme-dependent colors use CSS variables (switch with data-theme="dark") ──
// ── Accent colors stay as hex — they're constant across themes ────────────────
export const COLORS = {
  bg:             'var(--c-bg)',
  sidebar:        'var(--c-sidebar)',
  hover:          'var(--c-hover)',
  selected:       'var(--c-selected)',
  border:         'var(--c-border)',
  tabInactive:    'var(--c-tab-inactive)',
  activityBar:    'var(--c-activity-bar)',
  codeBg:         'var(--c-code-bg)',
  textPrimary:    'var(--c-text-primary)',
  textSecondary:  'var(--c-text-secondary)',
  textMuted:      'var(--c-text-muted)',

  pink:       '#D63384',
  deepPink:   '#B52270',
  mauve:      '#9B4F7A',
  rose:       '#E8799E',
  blush:      '#F4B0C8',
  neonGreen:  '#D63384',
  lavender:   '#9B4F7A',
  cyan:       '#7A4E9B',
  orange:     '#C0608A',
  purple:     '#D63384',
};

const sharedComponents = {
  MuiCssBaseline: {
    styleOverrides: {
      'html, body': { height: '100%', margin: 0, padding: 0 },
      body: {
        backgroundColor: 'var(--c-bg)',
        color: 'var(--c-text-primary)',
      },
      '*::-webkit-scrollbar':             { width: 6, height: 6 },
      '*::-webkit-scrollbar-track':       { background: 'var(--c-sidebar)' },
      '*::-webkit-scrollbar-thumb':       { background: 'var(--c-border)', borderRadius: 3 },
      '*::-webkit-scrollbar-thumb:hover': { background: COLORS.mauve },
      'a': { textDecoration: 'none' },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: { fontFamily: 'inherit', textTransform: 'none' as const, fontSize: 13, borderRadius: 4 },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { fontFamily: 'inherit', fontSize: 11 },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontFamily: 'inherit',
        fontSize: 11,
        backgroundColor: COLORS.mauve,
        color: '#fff',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: { backgroundColor: 'var(--c-sidebar)' },
    },
  },
};

const sharedTypography = {
  fontFamily: 'var(--font-mono), "JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
  fontSize: 13,
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#FDF8FC', paper: '#FDF0F5' },
    primary:    { main: COLORS.pink },
    secondary:  { main: COLORS.mauve },
    success:    { main: '#2a9d60' },
    divider:    '#EDCCD8',
    text:       { primary: '#1A0820', secondary: '#8E5070' },
  },
  typography: sharedTypography,
  components: sharedComponents,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0C0513', paper: '#160B1E' },
    primary:    { main: COLORS.pink },
    secondary:  { main: COLORS.mauve },
    success:    { main: '#2a9d60' },
    divider:    '#4A1F5E',
    text:       { primary: '#F0DDF5', secondary: '#C490B8' },
  },
  typography: sharedTypography,
  components: sharedComponents,
});

export default lightTheme;
