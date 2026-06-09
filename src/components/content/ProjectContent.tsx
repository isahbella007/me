'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/AutoStories';
import { COLORS } from '@/theme';
import { type Project } from '@/data/content';
import MermaidDiagram from '@/components/MermaidDiagram';

const articleLinks: Record<string, string> = {
  'hr-identity-pipeline': '/articles/hr-data-apocalypse',
};

const statusColors: Record<string, string> = {
  Production:    COLORS.pink,
  Shipped:       COLORS.cyan,
  'In Progress': COLORS.orange,
};

export default function ProjectContent({ project }: { project: Project }) {
  const statusColor = statusColors[project.status] ?? COLORS.mauve;

  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', px: { xs: 2, sm: 4 }, py: 4 }}>

      {/* ── Header ── */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', mb: 0.5 }}>
          {/* <Typography sx={{ fontSize: 36, lineHeight: 1 }}>{project.emoji}</Typography> */}
          <Typography
            sx={{
              fontFamily: 'inherit',
              fontSize: { xs: 20, sm: 26 },
              fontWeight: 700,
              color: COLORS.textPrimary,
            }}
          >
            {project.title}
          </Typography>
          <Chip
            label={project.status}
            size="small"
            sx={{
              fontFamily: 'inherit',
              fontSize: 11,
              color: statusColor,
              bgcolor: `${statusColor}18`,
              border: `1px solid ${statusColor}45`,
              height: 22,
            }}
          />
        </Box>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.mauve, mb: 0.25 }}>
          {project.subtitle}
        </Typography>
        {/* <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textSecondary, mb: 1.5 }}>
          @ {project.company}
        </Typography> */}
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
          {project.tagline}
        </Typography>
      </Box>

      <Divider sx={{ borderColor: COLORS.border, mb: 3 }} />

      {/* ── Problem ── */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1 }}>
          The Problem
        </Typography>
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: 14,
            color: COLORS.textPrimary,
            lineHeight: 1.8,
            pl: 2,
            borderLeft: `3px solid ${COLORS.border}`,
          }}
        >
          {project.problem}
        </Typography>
      </Box>

      {/* ── Architecture diagram ── */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1 }}>
          Architecture
        </Typography>
        <Box
          sx={{
            bgcolor: COLORS.codeBg,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 1,
            p: 2.5,
            position: 'relative',
            overflowX: 'auto',
          }}
        >
          <Box sx={{ position: 'absolute', top: 10, right: 14, display: 'flex', gap: 0.75 }}>
            {['#ff5f57', '#febc2e', '#28c840'].map(c => (
              <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
            ))}
          </Box>
          {project.mermaidChart ? (
            <MermaidDiagram chart={project.mermaidChart} />
          ) : (
            <pre
              style={{
                margin: 0,
                fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
                fontSize: 12,
                color: COLORS.mauve,
                lineHeight: 1.65,
                whiteSpace: 'pre',
              }}
            >
              {project.diagram}
            </pre>
          )}
        </Box>
      </Box>

      {/* ── Solution ── */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1 }}>
          The Solution
        </Typography>
        <Typography
          sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textPrimary, lineHeight: 1.8 }}
        >
          {project.solution}
        </Typography>
      </Box>

      {/* ── Key Decisions ── */}
      {project.keyDecisions && project.keyDecisions.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.5 }}>
            Key Infrastructure Decisions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {project.keyDecisions.map((d, i) => (
              <Box
                key={i}
                sx={{
                  bgcolor: COLORS.codeBg,
                  border: `1px solid ${COLORS.border}`,
                  borderLeft: `4px solid ${COLORS.mauve}`,
                  borderRadius: 1,
                  p: 2,
                }}
              >
                <Typography sx={{ fontFamily: 'inherit', fontSize: 13, fontWeight: 700, color: COLORS.textPrimary, mb: 0.75 }}>
                  {d.title}
                </Typography>
                <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.85 }}>
                  {d.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* ── Impact ── */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.5 }}>
          Impact
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
          {project.impact.map((item, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
              <Typography
                sx={{
                  fontFamily: 'inherit',
                  fontSize: 13,
                  color: COLORS.pink,
                  flexShrink: 0,
                  lineHeight: 1.7,
                  fontWeight: 700,
                }}
              >
                ✓
              </Typography>
              <Typography
                sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.7 }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Article link ── */}
      {articleLinks[project.id] && (
        <Box sx={{ mb: 4 }}>
          <Link href={articleLinks[project.id]} style={{ textDecoration: 'none', display: 'inline-block' }}>
            <Button
              variant="outlined"
              startIcon={<ArticleIcon sx={{ fontSize: 16 }} />}
              sx={{
                fontFamily: 'inherit',
                fontSize: 13,
                color: COLORS.pink,
                borderColor: `${COLORS.pink}60`,
                px: 2.5,
                py: 1,
                '&:hover': { borderColor: COLORS.pink, bgcolor: `${COLORS.pink}08` },
              }}
            >
              Read the Full Case Study →
            </Button>
          </Link>
        </Box>
      )}

      {/* ── Tech ── */}
      <Box>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.5 }}>
          Tech Used
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.tech.map(t => (
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
