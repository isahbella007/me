'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { COLORS } from '@/theme';
import { type Experience } from '@/data/content';
import ExperienceContent from './ExperienceContent';

export default function ExperienceTimeline({ exps }: { exps: Experience[] }) {
  const [selected, setSelected] = useState<Experience | null>(null);

  return (
    <>
      {/* ── Timeline ── */}
      <Box sx={{ position: 'relative', pl: { xs: 0, sm: 4 } }}>

        {/* Vertical line */}
        <Box sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'absolute',
          left: 7,
          top: 12,
          bottom: 20,
          width: 2,
          bgcolor: COLORS.border,
        }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {exps.map((exp, i) => (
            <Box key={exp.id} sx={{ position: 'relative' }}>

              {/* Timeline dot */}
              <Box sx={{
                display: { xs: 'none', sm: 'block' },
                position: 'absolute',
                left: -4 - 12,
                top: 20,
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: i === 0 ? COLORS.pink : COLORS.bg,
                border: `2px solid ${i === 0 ? COLORS.pink : COLORS.mauve}`,
                zIndex: 1,
              }} />

              <Box
                sx={{
                  bgcolor: COLORS.codeBg,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 2,
                  p: 3,
                  '&:hover': { borderColor: `${COLORS.pink}50`, boxShadow: `0 4px 20px ${COLORS.pink}10` },
                  transition: 'all 0.2s',
                }}
              >
                {/* Company row */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                  <Box>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: 17, fontWeight: 700, color: COLORS.textPrimary, lineHeight: 1.3 }}>
                      <span style={{ marginRight: 8 }}>{exp.emoji}</span>
                      <span style={{ color: COLORS.pink }}>{exp.company}</span>
                      {exp.contract && (
                        <Chip label="Contract" size="small" sx={{ ml: 1, fontFamily: 'inherit', fontSize: 10, height: 18, color: COLORS.mauve, bgcolor: `${COLORS.mauve}15`, border: `1px solid ${COLORS.mauve}40`, verticalAlign: 'middle' }} />
                      )}
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.mauve, mt: 0.25 }}>
                      {exp.role}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted }}>{exp.period}</Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textMuted }}>{exp.location}</Typography>
                  </Box>
                </Box>

                {/* Metrics */}
                {exp.metrics.length > 0 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                    {exp.metrics.map(m => (
                      <Chip key={m.label} label={`${m.value} · ${m.label}`} size="small" sx={{ fontFamily: 'inherit', fontSize: 11, height: 22, color: COLORS.pink, bgcolor: `${COLORS.pink}10`, border: `1px solid ${COLORS.pink}30` }} />
                    ))}
                  </Box>
                )}

                {/* Top highlights */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 2 }}>
                  {exp.highlights.slice(0, 2).map(h => (
                    <Box key={h.title} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                      <Typography sx={{ fontFamily: 'inherit', color: COLORS.pink, fontSize: 13, flexShrink: 0, lineHeight: 1.7, fontWeight: 700 }}>✓</Typography>
                      <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.7, fontWeight: 600 }}>{h.title}</Typography>
                    </Box>
                  ))}
                  {exp.highlights.length > 2 && (
                    <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted, pl: 3 }}>
                      + {exp.highlights.length - 2} more
                    </Typography>
                  )}
                </Box>

                {/* Footer */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {exp.tech.slice(0, 4).map(t => (
                      <Chip key={t} label={t} size="small" sx={{ fontFamily: 'inherit', fontSize: 10, height: 20, color: COLORS.textSecondary, bgcolor: COLORS.selected, border: `1px solid ${COLORS.border}` }} />
                    ))}
                    {exp.tech.length > 4 && (
                      <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textMuted, alignSelf: 'center' }}>+{exp.tech.length - 4}</Typography>
                    )}
                  </Box>
                  <Box
                    onClick={() => setSelected(exp)}
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: COLORS.pink, fontFamily: 'inherit', fontSize: 12, fontWeight: 600, cursor: 'pointer', '&:hover': { color: COLORS.deepPink } }}
                  >
                    View Full Details <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Detail drawer ── */}
      <Drawer
        anchor="right"
        open={!!selected}
        onClose={() => setSelected(null)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '95vw', md: '60vw' },
              maxWidth: 900,
              bgcolor: COLORS.bg,
              borderLeft: `1px solid ${COLORS.border}`,
              display: 'flex',
              flexDirection: 'column',
            },
          },
          backdrop: {
            sx: { bgcolor: 'rgba(26, 8, 32, 0.35)' },
          },
        }}
      >
        {/* Sticky close bar */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2.5,
            py: 1,
            bgcolor: COLORS.sidebar,
            borderBottom: `1px solid ${COLORS.border}`,
            flexShrink: 0,
          }}
        >
          <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted }}>
            {selected?.company} · {selected?.role}
          </Typography>
          <IconButton
            onClick={() => setSelected(null)}
            size="small"
            sx={{ color: COLORS.textSecondary, '&:hover': { color: COLORS.pink, bgcolor: `${COLORS.pink}10` } }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Scrollable content */}
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          {selected && <ExperienceContent exp={selected} />}
        </Box>
      </Drawer>
    </>
  );
}
