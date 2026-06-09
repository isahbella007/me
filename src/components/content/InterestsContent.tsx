import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { COLORS } from '@/theme';

const openTo     = ['Data Engineering', 'Consulting', 'Freelance'];
const hobbies    = ['Formula 1 🏎️', 'Food Spots 🍜', 'Weight Lifting 🏋️', 'Crocheting 🧶'];
const funFacts   = [
  'Can play the violin 🎻',
  'Love teaching',
  "Saved companies money in both dollars and naira 💰",
  "Started coding during my B.Sc and haven't stopped since 💻",
  "Coffee dependency: true ☕",
];
const learning   = 'Advanced data mesh architecture, dbt & Flute 🎶';
const superpower = 'Turning business problems into data solutions before the meeting ends.';

export default function InterestsContent() {
  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', px: { xs: 2, sm: 4 }, py: 4 }}>

      {/* ── Header ── */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{ fontFamily: 'inherit', fontSize: { xs: 20, sm: 26 }, fontWeight: 700, color: COLORS.textPrimary, mb: 0.5 }}
        >

          <span style={{ color: COLORS.textPrimary }}>&nbsp;The Human behind the Pipelines&nbsp;</span>

        </Typography>
        {/* <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textMuted, fontStyle: 'italic' }}>
          {'// the human behind the pipelines'}
        </Typography> */}
      </Box>

      {/* ── Quick profile strip ── */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' },
          gap: 1.5,
          mb: 3,
        }}
      >
        {[
          { emoji: '📍', label: 'Based in',  value: 'Lagos, Nigeria' },
          { emoji: '🕐', label: 'Timezone',  value: 'WAT (UTC+1)' },
          { emoji: '🌸', label: 'Status',    value: 'Open to Work' },
        ].map(item => (
          <Box
            key={item.label}
            sx={{
              bgcolor: COLORS.codeBg,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 1.5,
              p: 1.75,
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: 36, mb: 0.75, lineHeight: 1 }}>{item.emoji}</Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 10, color: COLORS.textMuted, mb: 0.25, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              {item.label}
            </Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: COLORS.textPrimary }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ── Open to ── */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.25 }}>
          Open To
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {openTo.map(o => (
            <Chip
              key={o}
              label={o}
              size="small"
              sx={{
                fontFamily: 'inherit',
                fontSize: 12,
                height: 26,
                color: COLORS.pink,
                bgcolor: `${COLORS.pink}12`,
                border: `1px solid ${COLORS.pink}45`,
                fontWeight: 600,
              }}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderColor: COLORS.border, mb: 3 }} />

      {/* ── Superpower ── */}
      {/* <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.25 }}>
          Superpower
        </Typography>
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: 14,
            color: COLORS.textPrimary,
            fontStyle: 'italic',
            pl: 2,
            borderLeft: `3px solid ${COLORS.pink}`,
            lineHeight: 1.7,
          }}
        >
          &ldquo;{superpower}&rdquo;
        </Typography>
      </Box> */}

      {/* ── Off the clock ── */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.25 }}>
          Off the Clock
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {hobbies.map(h => (
            <Chip
              key={h}
              label={h}
              size="small"
              sx={{
                fontFamily: 'inherit',
                fontSize: 12,
                height: 26,
                color: COLORS.textPrimary,
                bgcolor: COLORS.selected,
                border: `1px solid ${COLORS.border}`,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ── Fun facts ── */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.5 }}>
          Fun Facts
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 1.25,
          }}
        >
          {funFacts.map((fact, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: i % 2 === 0 ? `${COLORS.pink}0A` : `${COLORS.mauve}0A`,
                border: `1px solid ${i % 2 === 0 ? `${COLORS.pink}28` : `${COLORS.mauve}28`}`,
                borderLeft: `3px solid ${i % 2 === 0 ? COLORS.pink : COLORS.mauve}`,
                borderRadius: 1.5,
                px: 2,
                py: 1.5,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.25,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'inherit',
                  fontSize: 11,
                  color: i % 2 === 0 ? COLORS.pink : COLORS.mauve,
                  flexShrink: 0,
                  lineHeight: 1.9,
                  fontWeight: 700,
                  opacity: 0.7,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </Typography>
              <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.8 }}>
                {fact}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderColor: COLORS.border, mb: 3 }} />

      {/* ── Currently learning ── */}
      {/* <Box
        sx={{
          bgcolor: `${COLORS.mauve}0C`,
          border: `1px solid ${COLORS.mauve}35`,
          borderLeft: `4px solid ${COLORS.mauve}`,
          borderRadius: 1,
          p: 2,
        }}
      >
        <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.mauve, fontWeight: 700, mb: 0.5 }}>
          📖 Currently Learning
        </Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.7 }}>
          {learning}
        </Typography>
      </Box> */}

    </Box>
  );
}
