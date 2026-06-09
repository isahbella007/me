'use client';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import { COLORS } from '@/theme';

const experience = [
  {
    title: 'Data Engineer',
    company: 'Bajaj Nigeria',
    location: 'Lagos, Nigeria',
    period: 'Nov 2025 – Present',
    bullets: [
      'Identify and implement Power Platform licensing optimizations, saving $2,250/month (~$27K/year) for the organization.',
      'Design and deploy full-cycle Recruitment Governance Engines, automating fiscal approvals and digitizing onboarding.',
      'Architect and manage automated data ingestion pipelines with custom schema-validation and cleansing layers to neutralize erratic file inputs and prevent runtime failures.',
      'Develop and deploy native custom web parts using SPFx to deliver a corporate Intranet hub across multiple departments. ',
      'Architect and build a data warehouse to consolidate, clean, and migrate Sales department data into Oracle, enabling downstream data product development.',
      'Architect RAG-based internal knowledge systems, reducing information retrieval time for staff.',
      'Build end-to-end ETL pipelines with automated GitHub Actions orchestration and deploy analytics dashboards for the DAG Connect app.',
      'Deploy mobile application that eliminated manual processes, resulting in ₦1.5M in cost savings.',
      'Support NDPR compliance efforts by administering company-wide data privacy questionnaires, conducting interviews across departments, and delivering consolidated reports on organizational data privacy posture to the DPO.',
      'Facilitated HR training workshops on a custom software platform and produced supporting documentation including a comprehensive data dictionary.',
      'Provide technical mentorship to colleagues and interns on UI/UX design principles, Excel workflows, and Microsoft 365 best practices including document sharing, cloud sync, and collaboration.'
    ],
  },
  {
    title: 'Data Engineer',
    company: 'LOTS',
    location: 'Remote',
    period: 'Feb 2024 – Oct 2025',
    bullets: [
      'Engineered scalable data pipelines to support an AI-powered supply chain system.',
      'Optimized data processing algorithms, leading to a 30% reduction in API calls and significant cost savings.',
      'Designed a data-driven user credit management system, achieving 25% reduction in support tickets and 15% boost in user retention.',
      'Deployed and managed data processing services on GCP Cloud Run, achieving a 20% reduction in server costs.',
      'Collaborated with cross-functional teams in an Agile framework to deliver high-quality data solutions.',
    ],
  },
  {
    title: 'Backend Developer (Contract)',
    company: 'Code Derivatives',
    location: 'Lagos, Nigeria',
    period: 'Oct 2024 – Feb 2025',
    bullets: [
      'Led development of a Resume Parser that ingested, parsed, and graded CVs against job descriptions.',
      'Implemented recruiter workflows including automated applicant contact, meeting scheduling, and hiring manager evaluation forms.',
      'Designed an AI-powered Blog Generation System using an abstraction pattern across ChatGPT, Gemini, and Claude.',
      'Developed a subscription-tier model with varied content length and SEO optimization including bulk generation.',
      'Assured deliverables met over 95% of software requirements based on agreed timeframes.',
    ],
  },
  {
    title: 'FullStack Developer',
    company: 'Orion Resources',
    location: 'Abuja, Nigeria',
    period: 'Oct 2022 – Nov 2023',
    bullets: [
      'Designed and built a factory operations management system, reducing maintenance costs by 30%.',
      'Implemented a dynamic scheduling system, cutting task assignment time by 70%.',
      'Optimized MongoDB schemas, reducing query response times by 50%.',
      'Automated report generation and data analysis, saving 50% of time on repetitive tasks.',
      'Achieved 80% code coverage through extensive Jest unit and integration testing.',
      'Implemented real-time monitoring using Winston logging & Datadog.',
      'Enhanced application performance by 40% through efficient Redux & Redux Toolkit state management.',
    ],
  },
  {
    title: 'Software Developer Intern (Volunteer)',
    company: 'Locumator',
    location: 'Remote',
    period: 'Jan 2022 – Jul 2022',
    bullets: [
      'Contributed to developing and documenting 50% of the Web APIs for consumer products.',
      'Translated business requirements into functional specifications for client alignment.',
      'Streamlined task management and documentation using Asana and Confluence,improving team productivity and reducing miscommunication.',
      'Participated in daily stand-ups, sprint planning, and code reviews using Agile methodology.',
    ],
  },
];

const skills = [
  { label: 'Languages', value: 'Python, SQL, JavaScript (ES6+), TypeScript' },
  { label: 'Databases', value: 'PostgreSQL, MongoDB, Prisma ORM' },
  { label: 'Data Concepts', value: 'ETL/ELT Pipelines, Data Modeling, Process Automation, Real-time Data Streaming' },
  { label: 'Cloud & DevOps', value: 'GCP (Cloud Run, Cloud Functions, Pub/Sub), Docker, Kubernetes, GitHub Actions, CI/CD' },
  { label: 'Big Data', value: 'Apache Spark, Apache Kafka, Snowflake' },
  { label: 'APIs & Integrations', value: 'RESTful API Development, Microservices Architecture, AI API Integration (OpenAI, Gemini, Claude)' },
  { label: 'Testing & Monitoring', value: 'Jest, Winston, Datadog' },
  { label: 'Project Management', value: 'Jira, Confluence, Agile / Scrum' },
  { label: 'No-Code / Low-Code', value: 'Process Maker, Power Automate' },
];

export default function CVPage() {
  return (
    <Box sx={{ fontFamily: 'var(--font-mono), monospace', minHeight: '100vh' }}>

      {/* ── Top action bar ── */}
      <Box
        className="no-print"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          bgcolor: COLORS.bg,
          borderBottom: `1px solid ${COLORS.border}`,
          px: { xs: 3, sm: 6 },
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              color: COLORS.textSecondary,
              fontFamily: 'inherit',
              fontSize: 12,
              fontWeight: 500,
              '&:hover': { color: COLORS.pink },
              transition: 'color 0.2s',
            }}
          >
            Back to Home
          </Button>
        </Link>
        <a href="/Isabella Nekabari KPAI.pdf" download="Isabella Nekabari KPAI.pdf" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            sx={{
              color: COLORS.pink,
              borderColor: `${COLORS.pink}60`,
              fontFamily: 'inherit',
              fontWeight: 600,
              fontSize: 12,
              px: 2.5,
              py: 0.75,
              '&:hover': { borderColor: COLORS.pink, bgcolor: `${COLORS.pink}08` },
              transition: 'all 0.2s',
            }}
          >
            Download PDF
          </Button>
        </a>
      </Box>

      {/* ── CV Content ── */}
      <Box
        id="cv-content"
        sx={{
          maxWidth: 860,
          mx: 'auto',
          px: { xs: 3, sm: 6 },
          py: { xs: 5, sm: 7 },
        }}
      >

        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: 'inherit',
              fontWeight: 700,
              fontSize: { xs: 32, sm: 44 },
              color: COLORS.textPrimary,
              lineHeight: 1.1,
              mb: 0.5,
            }}
          >
            <span style={{ color: COLORS.pink }}>Isabella</span> Nekabari Kpai
          </Typography>
          <Typography sx={{ fontFamily: 'inherit', fontSize: 16, color: COLORS.mauve, fontWeight: 500, mb: 1.5 }}>
            AI & Data Engineer
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, fontSize: 14, color: COLORS.textSecondary }}>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textSecondary }}>
              +2347062072204
            </Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textSecondary }}>
              isabellakpai@gmail.com
            </Typography>
            <a
              href="https://www.linkedin.com/in/isabella-kpai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: COLORS.pink, fontSize: 14, fontFamily: 'inherit' }}
            >
              linkedin.com/in/isabella-kpai
            </a>
          </Box>
        </Box>

        <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

        {/* Education */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontFamily: 'inherit', fontSize: 13, fontWeight: 700, color: COLORS.pink, letterSpacing: 1.5, textTransform: 'uppercase', mb: 2 }}>
            Education
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { degree: 'M.Sc Computer Engineering', school: 'Eastern Mediterranean University', location: 'Turkey, Northern Cyprus', period: '2021 – 2023' },
              { degree: 'B.Sc Computer Engineering', school: 'Eastern Mediterranean University', location: 'Turkey, Northern Cyprus', period: '2017 – 2021' },
            ].map(e => (
              <Box key={e.degree} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 0.5 }}>
                <Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: 15, fontWeight: 700, color: COLORS.textPrimary }}>{e.degree}</Typography>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textSecondary }}>{e.school} · {e.location}</Typography>
                </Box>
                <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textMuted, whiteSpace: 'nowrap' }}>{e.period}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

        {/* Skills */}
        <Box>
          <Typography sx={{ fontFamily: 'inherit', fontSize: 13, fontWeight: 700, color: COLORS.pink, letterSpacing: 1.5, textTransform: 'uppercase', mb: 2 }}>
            Technical Skills
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {skills.map(s => (
              <Box key={s.label} sx={{ display: 'flex', gap: 1,  }}>
                <Typography sx={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 700, color: COLORS.textPrimary, minWidth: 160, flexShrink: 0 }}>
                  {s.label}
                </Typography>
                <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textSecondary }}>
                  {s.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

        {/* Experience */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontFamily: 'inherit', fontSize: 13, fontWeight: 700, color: COLORS.pink, letterSpacing: 1.5, textTransform: 'uppercase', mb: 2.5 }}>
            Experience
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
            {experience.map(job => (
              <Box key={`${job.company}-${job.period}`}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 0.5, mb: 0.5 }}>
                  <Box>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: 15, fontWeight: 700, color: COLORS.textPrimary }}>{job.title}</Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.mauve, fontWeight: 500 }}>{job.company} · {job.location}</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textMuted, whiteSpace: 'nowrap' }}>{job.period}</Typography>
                </Box>
                <Box component="ul" sx={{ m: 0, pl: 2.5, mt: 1 }}>
                  {job.bullets.map((b, i) => (
                    <Box
                      component="li"
                      key={i}
                      sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.75, mb: 0.25 }}
                    >
                      {b}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

        

      </Box>

      {/* ── Print styles ── */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; color: #000 !important; }
          #cv-content { max-width: 100% !important; padding: 0 !important; }
        }
      `}</style>

    </Box>
  );
}
