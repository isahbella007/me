import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { COLORS } from '@/theme';
import { type Experience } from '@/data/content';

export default function ExperienceContent({ exp }: { exp: Experience }) {
  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', px: { xs: 2, sm: 4 }, py: 4 }}>

      {/* ── Header ── */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, flexWrap: 'wrap', mb: 1 }}>
          <Typography sx={{ fontSize: 36, lineHeight: 1 }}>{exp.emoji}</Typography>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.25 }}>
              <Typography
                sx={{
                  fontFamily: 'inherit',
                  fontSize: { xs: 20, sm: 26 },
                  fontWeight: 700,
                  color: COLORS.textPrimary,
                  lineHeight: 1.2,
                }}
              >
                <span style={{ color: COLORS.pink }}>#</span> {exp.company}
              </Typography>
              {exp.contract && (
                <Chip
                  label="Contract"
                  size="small"
                  sx={{
                    fontFamily: 'inherit',
                    fontSize: 10,
                    color: COLORS.mauve,
                    bgcolor: `${COLORS.mauve}18`,
                    border: `1px solid ${COLORS.mauve}45`,
                    height: 20,
                  }}
                />
              )}
            </Box>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.mauve }}>
              {exp.role} · {exp.period}
            </Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textSecondary }}>
              📍 {exp.location}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: 14,
            color: COLORS.textSecondary,
            pl: 2,
            borderLeft: `3px solid ${COLORS.pink}`,
            fontStyle: 'italic',
            lineHeight: 1.7,
          }}
        >
          {exp.tagline}
        </Typography>
      </Box>

      {/* ── Metrics ── */}
      {exp.metrics.length > 0 && (
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.5 }}>
          Impact Metrics
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {exp.metrics.map((m, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: COLORS.codeBg,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 1,
                px: 2.5,
                py: 1.5,
                minWidth: 130,
                '&:hover': {
                  borderColor: COLORS.pink,
                  bgcolor: `${COLORS.pink}0C`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 12px ${COLORS.pink}20`,
                },
                transition: 'all 0.2s',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'inherit',
                  fontSize: 22,
                  fontWeight: 700,
                  color: COLORS.pink,
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                {m.value}
              </Typography>
              <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textSecondary }}>
                {m.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      )}

      <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

      {/* ── Highlights ── */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 2 }}>
         Highlights
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {exp.highlights.map((h, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: COLORS.codeBg,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 1,
                p: 2.5,
                '&:hover': {
                  borderColor: `${COLORS.mauve}80`,
                  bgcolor: `${COLORS.mauve}08`,
                },
                transition: 'all 0.2s',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'inherit',
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.mauve,
                  mb: 0.75,
                }}
              >
                {/* <span style={{ color: COLORS.textMuted }}>{'### '}</span> */}
                {h.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'inherit',
                  fontSize: 13,
                  color: COLORS.textPrimary,
                  lineHeight: 1.8,
                  mb: 1.5,
                }}
              >
                {h.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {h.tags.map(tag => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      fontFamily: 'inherit',
                      fontSize: 11,
                      color: COLORS.cyan,
                      bgcolor: `${COLORS.cyan}12`,
                      border: `1px solid ${COLORS.cyan}35`,
                      height: 22,
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Tech stack ── */}
      <Box>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.5 }}>
          ## Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {exp.tech.map(t => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                fontFamily: 'inherit',
                fontSize: 12,
                color: COLORS.textPrimary,
                bgcolor: COLORS.selected,
                border: `1px solid ${COLORS.border}`,
                height: 26,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
