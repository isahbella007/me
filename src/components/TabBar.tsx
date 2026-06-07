'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { COLORS } from '@/theme';
import { fileTree, getAllFiles } from '@/data/fileTree';

const allFiles = getAllFiles(fileTree);

const extIcon: Record<string, string> = { md: '≡', json: '{}', ts: 'TS' };
const extColor: Record<string, string> = {
  md:   COLORS.textPrimary,
  json: COLORS.orange,
  ts:   COLORS.cyan,
};

export default function TabBar({ activeHref }: { activeHref: string }) {
  const active = allFiles.find(f => f.href === activeHref);
  if (!active) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        bgcolor: COLORS.tabInactive,
        borderBottom: `1px solid ${COLORS.border}`,
        flexShrink: 0,
        overflowX: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          gap: 1,
          bgcolor: COLORS.bg,
          borderRight: `1px solid ${COLORS.border}`,
          borderTop: `2px solid ${COLORS.pink}`,
          minWidth: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            fontFamily: 'inherit',
            color: extColor[active.extension] ?? COLORS.textSecondary,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {extIcon[active.extension] ?? '≡'}
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            fontFamily: 'inherit',
            color: COLORS.textPrimary,
            whiteSpace: 'nowrap',
            py: '7px',
          }}
        >
          {active.name}
        </Typography>
      </Box>
    </Box>
  );
}
