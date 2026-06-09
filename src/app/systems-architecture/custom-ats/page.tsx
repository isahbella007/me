import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomATS from '@/components/content/articles/CustomATS';
import { COLORS } from '@/theme';

export default function CustomATSPage() {
  return (
    <>
      <Box sx={{ px: { xs: 2.5, sm: 5 }, pt: 2.5 }}>
        <Link href="/projects" style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 12,
              color: COLORS.textMuted,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              '&:hover': { color: COLORS.pink },
              transition: 'color 0.15s',
            }}
          >
            ← Projects
          </Typography>
        </Link>
      </Box>
      <CustomATS />
    </>
  );
}
