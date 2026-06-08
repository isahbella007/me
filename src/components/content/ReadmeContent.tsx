'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';
import { COLORS } from '@/theme';

const skillCategories = [
  { emoji: '🐍', label: 'Languages',            skills: ['Python', 'TypeScript', 'SQL'] },
  { emoji: '🗄️', label: 'Databases',             skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM'] },
  { emoji: '☁️', label: 'Cloud & DevOps',         skills: ['GCP', 'Docker', 'GitHub Actions', 'CI/CD Automation'] },
  { emoji: '🔄', label: 'Data Pipelines',         skills: ['Apache Spark', 'Kafka', 'Snowflake', 'ETL/ELT'] },
  { emoji: '📊', label: 'Data Concepts',          skills: ['Data Modeling', 'Data Warehousing', 'Data Governance', 'Process Automation', 'Real-time Streaming'] },
  { emoji: '🤖', label: 'AI & LLMs',              skills: ['OpenAI', 'Gemini', 'Claude', 'RAG'] },
  { emoji: '⚡', label: 'No-Code & Automation',   skills: ['Power Automate', 'Zapier', 'Process Maker'] },
  { emoji: '📋', label: 'Project Management',     skills: ['Jira', 'Confluence', 'Agile / Scrum'] },
];

const metrics = [
  { value: '$27K',  label: 'annual cloud savings',  icon: '💰' },
  { value: '₦1.5M', label: 'in cost reductions',    icon: '📉' },
  { value: '30%',   label: 'API call reduction',     icon: '⚡' },
  { value: '5 yrs', label: 'production systems',     icon: '🔧' },
];

const badges = [
  { label: '🏢 DAG Nigeria',             color: COLORS.mauve },
  { label: '🌸 Open to Work',              color: COLORS.pink },
  { label: '📍 Lagos, Nigeria',            color: COLORS.textSecondary },
  { label: '🎓 M.Sc Computer Engineering', color: COLORS.cyan },
];

export default function ReadmeContent() {
  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', px: { xs: 2, sm: 4 }, py: 4 }}>

      {/* ── Sidebar hint ── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          mb: 3,
          px: 2,
          py: 1.5,
          borderRadius: 1.5,
          border: `1px solid ${COLORS.pink}40`,
          bgcolor: `${COLORS.pink}08`,
          animation: 'softGlow 3s ease-in-out infinite',
          '@keyframes softGlow': {
            '0%, 100%': { boxShadow: `0 0 6px ${COLORS.pink}20, inset 0 0 6px ${COLORS.pink}08` },
            '50%':       { boxShadow: `0 0 18px ${COLORS.pink}45, inset 0 0 12px ${COLORS.pink}15` },
          },
        }}
      >
        <Typography sx={{ fontSize: 16, flexShrink: 0 }}>📁</Typography>
        {/* Mobile message */}
        <Typography
          sx={{
            display: { xs: 'block', sm: 'none' },
            fontFamily: 'inherit',
            fontSize: 12,
            color: COLORS.textSecondary,
            lineHeight: 1.6,
          }}
        >
          Tap the{' '}
          <Box component="span" sx={{ color: COLORS.pink, fontWeight: 600 }}>☰ menu icon</Box>
          {' '}at the top-left to explore — experience, projects &amp; articles are inside.
        </Typography>
        {/* Desktop message */}
        <Typography
          sx={{
            display: { xs: 'none', sm: 'block' },
            fontFamily: 'inherit',
            fontSize: 12,
            color: COLORS.textSecondary,
            lineHeight: 1.6,
          }}
        >
          There&apos;s more in the{' '}
          <Box component="span" sx={{ color: COLORS.pink, fontWeight: 600 }}>sidebar on the left</Box>
        </Typography>
      </Box>

      {/* ── Name & title ── */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: { xs: 26, sm: 34 },
            color: COLORS.textPrimary,
            mb: 0.5,
            lineHeight: 1.2,
          }}
        >
          <span style={{ color: COLORS.pink }}> Isabella Kpai</span> 
        </Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 15, color: COLORS.mauve, mb: 1 }}>
          {'> '} AI &amp; Data Engineer 
        </Typography>
        {/* <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: 14,
            color: COLORS.textSecondary,
            fontStyle: 'italic',
            pl: 2,
            borderLeft: `3px solid ${COLORS.border}`,
            lineHeight: 1.7,
          }}
        >
          I turn messy spreadsheets and siloed systems into pipelines that save companies real money.
        </Typography> */}
      </Box>

      {/* ── Badges ── */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
        {badges.map(b => (
          <Chip
            key={b.label}
            label={b.label}
            size="small"
            sx={{
              fontFamily: 'inherit',
              fontSize: 11,
              color: b.color,
              bgcolor: `${b.color}18`,
              border: `1px solid ${b.color}45`,
              height: 24,
            }}
          />
        ))}
      </Box>

      {/* ── Bio ── */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textPrimary, lineHeight: 2 }}>
          Five years shipping production systems across Lagos, Abuja, and remotely. I sit at the
          intersection of{' '}
          <span style={{ color: COLORS.pink, fontWeight: 600 }}>data engineering</span>,{' '}
          <span style={{ color: COLORS.mauve, fontWeight: 600 }}>backend development</span>, and{' '}
          <span style={{ color: COLORS.pink, fontWeight: 600 }}>measurable business outcomes</span>.
          <br /><br />
          {/* Not just a data person. I architect, automate, measure, and save money. My work has delivered{' '}
          <span style={{ color: COLORS.pink, fontWeight: 700 }}>$27K/year</span> in cloud savings,{' '}
          <span style={{ color: COLORS.pink, fontWeight: 700 }}>₦1.5M</span> in cost reductions,
          and quietly replaced three manual operators with a single automated pipeline.
          <br /><br /> */}
          {/* <span style={{ color: COLORS.textMuted }}>
            {'// '}Generalist by design. Specialist where it counts.
          </span> */}
        </Typography>
      </Box>

      <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

      {/* ── Core stack as JSON ── */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 2 }}>
          What I Can Do
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 1.5,
          }}
        >
          {skillCategories.map(cat => (
            <Box
              key={cat.label}
              sx={{
                bgcolor: COLORS.codeBg,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 1.5,
                p: 2,
                '&:hover': { borderColor: `${COLORS.pink}60` },
                transition: 'border-color 0.2s',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'inherit',
                  fontSize: 12,
                  fontWeight: 700,
                  color: COLORS.mauve,
                  mb: 1.25,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.75,
                }}
              >
                <span>{cat.emoji}</span> {cat.label}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {cat.skills.map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      fontFamily: 'inherit',
                      fontSize: 11,
                      height: 22,
                      color: COLORS.textPrimary,
                      bgcolor: COLORS.selected,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Metrics ── */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.5 }}>
          By the Numbers
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' },
            gap: 2,
          }}
        >
          {metrics.map(m => (
            <Box
              key={m.label}
              sx={{
                bgcolor: COLORS.codeBg,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 1,
                p: 2,
                textAlign: 'center',
                cursor: 'default',
                '&:hover': {
                  borderColor: COLORS.pink,
                  bgcolor: `${COLORS.pink}10`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 12px ${COLORS.pink}20`,
                },
                transition: 'all 0.2s',
              }}
            >
              <Typography sx={{ fontSize: 20, mb: 0.5 }}>{m.icon}</Typography>
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

      {/* ── Previous roles note ── */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1 }}>
          Work Experiences
        </Typography>
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: 13,
            color: COLORS.textSecondary,
            pl: 2,
            borderLeft: `3px solid ${COLORS.border}`,
            lineHeight: 2,
          }}
        >
          Data Engineer <span style={{ color: COLORS.textMuted }}>@</span>{' '}
          <span style={{ color: COLORS.mauve, fontWeight: 600 }}>DAG Nigeria</span> (Lagos · 2025–Present)
          <br />
          Data Engineer <span style={{ color: COLORS.textMuted }}>@</span>{' '}
          <span style={{ color: COLORS.mauve, fontWeight: 600 }}>LOTS</span> (Remote · 2024–2025)
          <br />
          Fullstack Developer <span style={{ color: COLORS.textMuted }}>@</span>{' '}
          <span style={{ color: COLORS.mauve, fontWeight: 600 }}>Orion Resources</span> (Abuja · 2022–2023)
          <br />
          Software Developer Intern <span style={{ color: COLORS.textMuted }}>@</span>{' '}
          <span style={{ color: COLORS.mauve, fontWeight: 600 }}>Locumator</span> (Remote · 2022)
        </Typography>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          href="/resume.pdf"
          target="_blank"
          sx={{
            bgcolor: COLORS.pink,
            color: '#fff',
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: 13,
            px: 3,
            py: 1,
            '&:hover': {
              bgcolor: COLORS.deepPink,
              boxShadow: `0 4px 16px ${COLORS.pink}50`,
            },
            transition: 'all 0.2s',
          }}
        >
          Download Raw Resume (PDF)
        </Button>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted, fontStyle: 'italic' }}>
          {`// or explore the files on the left 👈`}
        </Typography>
      </Box>
    </Box>
  );
}
