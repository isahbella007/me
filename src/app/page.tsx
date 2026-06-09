import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { COLORS } from '@/theme';

const metrics = [
  { value: '$27K',  label: 'annual cloud savings', icon: '💰' },
  { value: '₦1.5M', label: 'in cost reductions',   icon: '📉' },
  { value: '30%',   label: 'API call reduction',    icon: '⚡' },
  { value: '5 yrs', label: 'production systems',    icon: '🔧' },
];

const badges = [
  { label: '🏢 DAG Nigeria',              color: COLORS.mauve },
  { label: '🌸 Open to Work',             color: COLORS.pink },
  { label: '📍 Lagos, Nigeria',           color: COLORS.textSecondary },
  { label: '🎓 M.Sc Computer Engineering', color: COLORS.cyan },
];

const skills = [
  { emoji: '🐍', label: 'Languages',           items: ['Python', 'TypeScript', 'SQL'] },
  { emoji: '🗄️', label: 'Databases',            items: ['PostgreSQL', 'MongoDB', 'Prisma ORM'] },
  { emoji: '☁️', label: 'Cloud & DevOps',        items: ['GCP', 'Docker', 'GitHub Actions', 'CI/CD'] },
  { emoji: '🔄', label: 'Data Pipelines',        items: ['Apache Spark', 'Kafka', 'Snowflake', 'ETL/ELT'] },
  { emoji: '📊', label: 'Data Concepts',         items: ['Data Modeling', 'Data Warehousing', 'Data Governance', 'Process Automation', 'Real-time Streaming'] },
  { emoji: '🤖', label: 'AI & LLMs',             items: ['OpenAI', 'Gemini', 'Claude', 'RAG'] },
  { emoji: '⚡', label: 'No-Code & Automation',  items: ['Power Automate', 'Zapier', 'Process Maker'] },
  { emoji: '📋', label: 'Project Management',    items: ['Jira', 'Confluence', 'Agile / Scrum'] },
];

const explore = [
  { href: '/experience', emoji: '🏢', label: 'Work History',  desc: '5 years · real impact.' },
  { href: '/projects',   emoji: '🔧', label: 'Projects',      desc: 'Systems I designed and shipped.' },
  { href: '/off-duty/interests', emoji: '🎵', label: 'Off Duty', desc: 'The human behind the pipelines.' },
];

export default function LandingPage() {
  return (
    <Box sx={{ fontFamily: 'var(--font-mono), monospace' }}>

      {/* ── Hero ── */}
      <Box sx={{ maxWidth: 920, mx: 'auto', px: { xs: 3, sm: 6 }, pt: { xs: 6, sm: 10 }, pb: { xs: 5, sm: 7 } }}>

        {/* Badges
        

        {/* Name */}
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: { xs: 38, sm: 58, md: 68 },
            color: COLORS.textPrimary,
            lineHeight: 1.05,
            mb: 1,
          }}
        >
          <span style={{ color: COLORS.pink }}>Isabella</span> Kpai
        </Typography>

        {/* Role */}
        <Typography sx={{ fontFamily: 'inherit', fontSize: { xs: 15, sm: 19 }, color: COLORS.mauve, mb: 2, fontWeight: 500 }}>
          AI & Data Engineer
        </Typography>

        {/* Tagline */}
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: { xs: 13, sm: 15 },
            color: COLORS.textSecondary,
            fontStyle: 'italic',
            pl: 2,
            borderLeft: `3px solid ${COLORS.pink}`,
            lineHeight: 1.75,
            mb: 4,
            maxWidth: 580,
          }}
        >
          I turn messy spreadsheets and siloed systems into pipelines that save companies real money. I sit at the intersection of{' '}
          <span style={{ color: COLORS.pink, fontWeight: 600 }}>data engineering</span>,{' '}
          <span style={{ color: COLORS.mauve, fontWeight: 600 }}>backend engineering</span> and{' '}
          <span style={{ color: COLORS.cyan, fontWeight: 600 }}>measurable business outcomes</span>
        </Typography>

        {/* Badges */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {badges.map(b => (
            <Chip key={b.label} label={b.label} size="small" sx={{ fontFamily: 'inherit', fontSize: 11, height: 24, color: b.color, bgcolor: `${b.color}18`, border: `1px solid ${b.color}45` }} />
          ))}
        </Box> 

        {/* CTAs */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 7 }}>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: COLORS.pink, color: '#fff', fontFamily: 'inherit', fontWeight: 700, fontSize: 13, px: 3, py: 1,
                '&:hover': { bgcolor: COLORS.deepPink, boxShadow: `0 4px 20px ${COLORS.pink}50` },
                transition: 'all 0.2s',
              }}
            >
              View Projects
            </Button>
          </Link>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            href="/resume.pdf"
            target="_blank"
            sx={{
              color: COLORS.pink, borderColor: `${COLORS.pink}60`, fontFamily: 'inherit', fontWeight: 600, fontSize: 13, px: 3, py: 1,
              '&:hover': { borderColor: COLORS.pink, bgcolor: `${COLORS.pink}08` },
              transition: 'all 0.2s',
            }}
          >
            Download CV
          </Button>
        </Box>

        {/* Metrics */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' }, gap: 2, mb: 3 }}>
          {metrics.map(m => (
            <Box
              key={m.label}
              sx={{
                bgcolor: COLORS.codeBg, border: `1px solid ${COLORS.border}`, borderRadius: 1.5, p: 2, textAlign: 'center',
                '&:hover': { borderColor: COLORS.pink, transform: 'translateY(-2px)', boxShadow: `0 4px 16px ${COLORS.pink}20` },
                transition: 'all 0.2s',
              }}
            >
              <Typography sx={{ fontSize: 22, mb: 0.5 }}>{m.icon}</Typography>
              <Typography sx={{ fontFamily: 'inherit', fontSize: 22, fontWeight: 700, color: COLORS.pink, lineHeight: 1, mb: 0.5 }}>{m.value}</Typography>
              <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textSecondary }}>{m.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted, fontStyle: 'italic' }}>
          <span style={{ color: COLORS.pink }}>{'// '}</span>Generalist by design. Specialist where it counts.
        </Typography> */}
      </Box>

      <Divider sx={{ borderColor: COLORS.border }} />

      {/* ── What I Can Do ── */}
      <Box sx={{ maxWidth: 920, mx: 'auto', px: { xs: 3, sm: 6 }, py: { xs: 5, sm: 7 } }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 2.5 }}>
          What I Can Do
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5 }}>
          {skills.map(cat => (
            <Box
              key={cat.label}
              sx={{
                bgcolor: COLORS.codeBg, border: `1px solid ${COLORS.border}`, borderRadius: 1.5, p: 2,
                '&:hover': { borderColor: `${COLORS.pink}55` },
                transition: 'border-color 0.2s',
              }}
            >
              <Typography sx={{ fontFamily: 'inherit', fontSize: 12, fontWeight: 700, color: COLORS.mauve, mb: 1.25, display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <span>{cat.emoji}</span> {cat.label}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {cat.items.map(s => (
                  <Chip key={s} label={s} size="small" sx={{ fontFamily: 'inherit', fontSize: 11, height: 22, color: COLORS.textPrimary, bgcolor: COLORS.selected, border: `1px solid ${COLORS.border}` }} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderColor: COLORS.border }} />

      {/* ── Explore ── */}
      <Box sx={{ maxWidth: 920, mx: 'auto', px: { xs: 3, sm: 6 }, py: { xs: 5, sm: 7 } }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 2.5 }}>
          Explore
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
          {explore.map(item => (
            <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  bgcolor: COLORS.codeBg, border: `1px solid ${COLORS.border}`, borderRadius: 2, p: 2.5, cursor: 'pointer',
                  '&:hover': { borderColor: `${COLORS.pink}60`, transform: 'translateY(-2px)', boxShadow: `0 6px 20px ${COLORS.pink}12` },
                  transition: 'all 0.2s',
                }}
              >
                <Typography sx={{ fontSize: 26, mb: 1 }}>{item.emoji}</Typography>
                <Typography sx={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 700, color: COLORS.textPrimary, mb: 0.5 }}>{item.label}</Typography>
                <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textSecondary }}>{item.desc}</Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>

    </Box>
  );
}
