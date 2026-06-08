import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { COLORS } from '@/theme';
import { workshopSessions } from '@/data/content';

export default function WorkshopsContent() {
  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', px: { xs: 2, sm: 4 }, py: 4 }}>

      {/* ── Header ── */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: { xs: 20, sm: 26 },
            fontWeight: 700,
            color: COLORS.textPrimary,
            mb: 0.5,
          }}
        >
          <span style={{ color: COLORS.pink }}>#</span> Workshops &amp; Training
        </Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.lavender, mb: 1 }}>
          🎤 Teaching people to actually use the tools
        </Typography>
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
          Documentation and tooling only work when people know how to use them. These sessions bridge
          the gap between &ldquo;we have this tool&rdquo; and &ldquo;we actually use this tool.&rdquo;
        </Typography>
      </Box>

      <Divider sx={{ borderColor: COLORS.border, mb: 3 }} />

      {/* ── Sessions ── */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {workshopSessions.map((session, i) => (
          <Box
            key={i}
            sx={{
              bgcolor: COLORS.codeBg,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 1,
              p: 2.5,
              '&:hover': { borderColor: `${COLORS.lavender}60`, bgcolor: `${COLORS.lavender}05` },
              transition: 'all 0.2s',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 1,
                mb: 0.75,
                flexWrap: 'wrap',
              }}
            >
              <Typography
                sx={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 600, color: COLORS.lavender }}
              >
                {session.title}
              </Typography>
              <Chip
                label={session.format}
                size="small"
                sx={{
                  fontFamily: 'inherit',
                  fontSize: 10,
                  color:   session.format === 'Mentorship' ? COLORS.pink : COLORS.cyan,
                  bgcolor: session.format === 'Mentorship' ? `${COLORS.pink}15` : `${COLORS.cyan}15`,
                  border: `1px solid ${session.format === 'Mentorship' ? COLORS.pink : COLORS.cyan}40`,
                  height: 20,
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: 'inherit',
                fontSize: 13,
                color: COLORS.textPrimary,
                lineHeight: 1.8,
                mb: 1,
              }}
            >
              {session.description}
            </Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textSecondary }}>
              👥 {session.audience}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
