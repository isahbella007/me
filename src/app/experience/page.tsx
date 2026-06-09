import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { COLORS } from '@/theme';
import { experiences } from '@/data/content';
import ExperienceTimeline from '@/components/content/ExperienceTimeline';

const ORDER = ['bajaj-nigeria', 'lots', 'code-derivatives', 'orion-resources', 'locumator'];

export default function ExperiencePage() {
  const exps = ORDER.map(id => experiences[id]).filter(Boolean);

  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', px: { xs: 2.5, sm: 5 }, py: 5 }}>

      {/* ── Header ── */}
      <Box sx={{ mb: 5 }}>
        <Typography sx={{ fontFamily: 'inherit', fontWeight: 700, fontSize: { xs: 22, sm: 30 }, color: COLORS.textPrimary, mb: 0.5 }}>
          Work History
        </Typography>
       
      </Box>

      <ExperienceTimeline exps={exps} />
    </Box>
  );
}
