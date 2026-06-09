import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { COLORS } from '@/theme';
import { projects } from '@/data/content';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const statusColors: Record<string, string> = {
  Production:    COLORS.pink,
  Shipped:       COLORS.cyan,
  'In Progress': COLORS.orange,
};

export default function ProjectsPage() {
  const projectList = Object.values(projects);

  return (
    <Box sx={{ maxWidth: 1040, mx: 'auto', px: { xs: 2.5, sm: 5 }, py: 5 }}>

      {/* ── Header ── */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontWeight: 700, fontSize: { xs: 22, sm: 30 }, color: COLORS.textPrimary, mb: 0.5 }}>
          Projects & Systems
        </Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textMuted, fontStyle: 'italic' }}>
          Systems I designed, built, and shipped in production
        </Typography>
      </Box>

      {/* ── Grid ── */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' },
          gap: 2.5,
          alignItems: 'start',
        }}
      >
        {projectList.map(project => {
          const statusColor = statusColors[project.status] ?? COLORS.mauve;
          const href = `/systems-architecture/${project.id}`;

          return (
            <Box
              key={project.id}
              sx={{
                bgcolor: COLORS.codeBg,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 2,
                p: 2.5,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                '&:hover': {
                  borderColor: `${COLORS.pink}70`,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 8px 24px ${COLORS.pink}18`,
                },
                transition: 'all 0.2s',
              }}
            >
              {/* Status + emoji row */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography sx={{ fontSize: 28, lineHeight: 1 }}>{project.emoji}</Typography>
                <Chip
                  label={project.status}
                  size="small"
                  sx={{
                    fontFamily: 'inherit',
                    fontSize: 10,
                    height: 20,
                    color: statusColor,
                    bgcolor: `${statusColor}18`,
                    border: `1px solid ${statusColor}45`,
                  }}
                />
              </Box>

              {/* Title + subtitle */}
              <Typography sx={{ fontFamily: 'inherit', fontSize: 15, fontWeight: 700, color: COLORS.textPrimary, lineHeight: 1.3, mb: 0.25 }}>
                {project.title}
              </Typography>
              <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.mauve, mb: 0.5 }}>
                {project.subtitle}
              </Typography>
              {/* <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textMuted, mb: 1.5 }}>
                @ {project.company}
              </Typography> */}

              {/* Tagline */}
              <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textSecondary, lineHeight: 1.7, mb: 2, flex: 1 }}>
                {project.tagline}
              </Typography>

              {/* Tech chips */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                {project.tech.slice(0, 4).map(t => (
                  <Chip key={t} label={t} size="small" sx={{ fontFamily: 'inherit', fontSize: 10, height: 20, color: COLORS.textPrimary, bgcolor: COLORS.selected, border: `1px solid ${COLORS.border}` }} />
                ))}
                {project.tech.length > 4 && (
                  <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textMuted, alignSelf: 'center' }}>
                    +{project.tech.length - 4}
                  </Typography>
                )}
              </Box>

              {/* CTA */}
              <Link href={href} style={{ textDecoration: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: COLORS.pink, fontFamily: 'inherit', fontSize: 13, fontWeight: 600 }}>
                  View Details <ArrowForwardIcon sx={{ fontSize: 14 }} />
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
