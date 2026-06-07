'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { COLORS } from '@/theme';

export default function StatusBar() {
  return (
    <Box
      sx={{
        height: 22,
        bgcolor: COLORS.purple,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1.5,
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography sx={{ fontSize: 11, fontFamily: 'inherit', color: 'rgba(255,255,255,0.9)' }}>
          ⎇ portfolio
        </Typography>
        <Typography sx={{ fontSize: 11, fontFamily: 'inherit', color: 'rgba(255,255,255,0.8)' }}>
          🟢 Open to Work
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography sx={{ fontSize: 11, fontFamily: 'inherit', color: 'rgba(255,255,255,0.7)' }}>
          Lagos, NG · WAT
        </Typography>
        <Typography sx={{ fontSize: 11, fontFamily: 'inherit', color: 'rgba(255,255,255,0.7)' }}>
          UTF-8
        </Typography>
        <Typography sx={{ fontSize: 11, fontFamily: 'inherit', color: 'rgba(255,255,255,0.9)' }}>
          Markdown
        </Typography>
      </Box>
    </Box>
  );
}
