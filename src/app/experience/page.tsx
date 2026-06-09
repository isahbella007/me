import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { COLORS } from '@/theme';
import { experiences } from '@/data/content';
import ExperienceTimeline from '@/components/content/ExperienceTimeline';

const ORDER = ['bajaj-nigeria', 'lots', 'code-derivatives', 'orion-resources', 'locumator'];

const EDUCATION = [
  {
    degree: 'M.Sc. Computer Engineering',
    school: 'Eastern Mediterranean University',
    location: 'Famagusta, Cyprus',
    emoji: '🎓',
  },
  {
    degree: 'B.Sc. Computer Engineering',
    school: 'Eastern Mediterranean University',
    location: 'Famagusta, Cyprus',
    emoji: '📐',
  },
];

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

      {/* ── Education ── */}
      <Divider sx={{ borderColor: COLORS.border, my: 6 }} />

      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontWeight: 700, fontSize: { xs: 20, sm: 26 }, color: COLORS.textPrimary, mb: 0.5 }}>
          Education
        </Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textMuted, fontStyle: 'italic' }}>
          {'// where the foundation was laid'}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {EDUCATION.map((edu, i) => (
          <Box
            key={edu.degree}
            sx={{
              bgcolor: COLORS.codeBg,
              border: `1px solid ${COLORS.border}`,
              borderLeft: `3px solid ${i === 0 ? COLORS.pink : COLORS.mauve}`,
              borderRadius: 2,
              p: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2.5,
            }}
          >
            <Typography sx={{ fontSize: 32, lineHeight: 1, flexShrink: 0 }}>{edu.emoji}</Typography>
            <Box>
              <Typography sx={{ fontFamily: 'inherit', fontSize: 16, fontWeight: 700, color: COLORS.textPrimary, lineHeight: 1.3, mb: 0.5 }}>
                {edu.degree}
              </Typography>
              <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: i === 0 ? COLORS.pink : COLORS.mauve, fontWeight: 600 }}>
                {edu.school}
              </Typography>
              <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted, mt: 0.25 }}>
                {edu.location}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
}
