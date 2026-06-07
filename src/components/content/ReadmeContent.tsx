import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';
import { COLORS } from '@/theme';

const coreStack = {
  languages:       ['Python', 'TypeScript', 'SQL'],
  databases:       ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
  cloud:           ['GCP', 'Docker',  'GitHub Actions', 'CI/CD Automation'],
  data_pipelines:  ['Apache Spark', 'Kafka', 'Snowflake', 'ETL/ELT'],
  data_concepts:   ['Data Modeling', 'Data Warehousing', 'Data Governance', 'Process Automation', 'Real-time Data Streaming'],
  ai_integrations: ['OpenAI', 'Gemini', 'Claude'],
  project_management: ['Jira', 'Confluence'],
  no_code: ['Power Automate', 'Zappier', 'Process Maker'],
  currently_at:    'DAG Nigeria',
  open_to:         ['Data Engineer', 'Consulting', 'Freelance'],
} as const;

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
          <span style={{ color: COLORS.pink }}>#</span> Isabella Nekabari Kpai
        </Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 15, color: COLORS.mauve, mb: 1 }}>
          {'> '} AI &amp; Data Engineer 
        </Typography>
        <Typography
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
        </Typography>
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
          <span style={{ color: COLORS.textMuted }}>
            {'// '}Generalist by design. Specialist where it counts.
          </span>
        </Typography>
      </Box>

      <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

      {/* ── Core stack as JSON ── */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.5 }}>
          ## Core Stack
        </Typography>
        <Box
          sx={{
            bgcolor: COLORS.codeBg,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 1,
            p: 2.5,
            position: 'relative',
          }}
        >
          <Box sx={{ position: 'absolute', top: 10, right: 14, display: 'flex', gap: 0.75 }}>
            {['#ff5f57', '#febc2e', '#28c840'].map(c => (
              <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
            ))}
          </Box>

          {/* <Typography
            component="div"
            sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textMuted, mb: 0.5, fontStyle: 'italic' }}
          >
            {'// stack.json'}
          </Typography> */}
          <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.9 }}>
            {'{'}
          </Typography>
          {(Object.entries(coreStack) as [string, string | readonly string[]][]).map(([key, val]) => (
            <Typography
              key={key}
              component="div"
              sx={{ fontFamily: 'inherit', fontSize: 13, lineHeight: 1.9, pl: 2 }}
            >
              <span style={{ color: COLORS.cyan }}>&quot;{key}&quot;</span>
              <span style={{ color: COLORS.textSecondary }}>: </span>
              {Array.isArray(val) ? (
                <>
                  {'['}
                  {(val as string[]).map((v, i) => (
                    <span key={v}>
                      <span style={{ color: key === 'open_to' ? COLORS.mauve : COLORS.pink }}>
                        &quot;{v}&quot;
                      </span>
                      {i < val.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  {']'}
                </>
              ) : (
                <span style={{ color: COLORS.pink }}>&quot;{val}&quot;</span>
              )}
              {','}
            </Typography>
          ))}
          <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary }}>
            {'}'}
          </Typography>
        </Box>
      </Box>

      {/* ── Metrics ── */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, mb: 1.5 }}>
          ## By the Numbers
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
          ## Also on the Timeline
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
          Fullstack Developer <span style={{ color: COLORS.textMuted }}>@</span>{' '}
          <span style={{ color: COLORS.mauve, fontWeight: 600 }}>Orion Resources</span> (Abuja · 2022–2023) —
          factory ops management system, 50% faster queries, 80% test coverage.
          <br />
          Software Developer Intern <span style={{ color: COLORS.textMuted }}>@</span>{' '}
          <span style={{ color: COLORS.mauve, fontWeight: 600 }}>Locumator</span> (Remote · 2022) —
          built 50% of the consumer Web APIs, led a 5-person Agile team.
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
