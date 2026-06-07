import { createTheme } from '@mui/material/styles';

export const COLORS = {
  // ── Backgrounds ──────────────────────────────────────────────────────────
  bg:          '#FDF8FC',   // main editor — barely-pink white
  sidebar:     '#FDF0F5',   // sidebar — slightly more pink
  hover:       '#FAE0EE',   // hover state
  selected:    '#F5CDE2',   // active / selected row
  border:      '#EDCCD8',   // dividers & outlines
  tabInactive: '#FAF0F5',   // inactive tab area
  activityBar: '#F8E4EF',   // leftmost icon strip
  codeBg:      '#FFF0F8',   // code / JSON blocks

  // ── Accent pinks ─────────────────────────────────────────────────────────
  pink:        '#D63384',   // primary action / headings
  deepPink:    '#B52270',   // hover on pink elements
  mauve:       '#9B4F7A',   // secondary purple-pink
  rose:        '#E8799E',   // softer rose
  blush:       '#F4B0C8',   // lightest tint

  // ── Semantic aliases (keep component code compatible) ─────────────────────
  neonGreen:   '#D63384',   // metrics highlight  → now rich pink
  lavender:    '#9B4F7A',   // folder names       → now deep mauve
  cyan:        '#7A4E9B',   // JSON keys          → now purple-violet
  orange:      '#C0608A',   // file-type accents  → now deep rose
  purple:      '#D63384',   // status bar bg      → same as pink

  // ── Text ─────────────────────────────────────────────────────────────────
  textPrimary:   '#1A0820',  // headings & body — very dark
  textSecondary: '#8E5070',  // captions, meta
  textMuted:     '#B07898',  // subtle hints, markdown prefixes
};

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: COLORS.bg,
      paper:   COLORS.sidebar,
    },
    primary:   { main: COLORS.pink },
    secondary: { main: COLORS.mauve },
    success:   { main: '#2a9d60' },
    divider:   COLORS.border,
    text: {
      primary:   COLORS.textPrimary,
      secondary: COLORS.textSecondary,
    },
  },
  typography: {
    fontFamily: 'var(--font-mono), "JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
    fontSize: 13,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': { height: '100%', margin: 0, padding: 0 },
        body: {
          backgroundColor: COLORS.bg,
          color: COLORS.textPrimary,
        },
        '*::-webkit-scrollbar':             { width: 6, height: 6 },
        '*::-webkit-scrollbar-track':       { background: COLORS.sidebar },
        '*::-webkit-scrollbar-thumb':       { background: COLORS.border, borderRadius: 3 },
        '*::-webkit-scrollbar-thumb:hover': { background: COLORS.mauve },
        'a': { textDecoration: 'none' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { fontFamily: 'inherit', textTransform: 'none', fontSize: 13, borderRadius: 4 },
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
        paper: { backgroundColor: COLORS.sidebar },
      },
    },
  },
});

export default theme;
