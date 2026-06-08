'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { COLORS } from '@/theme';
import MermaidDiagram from '@/components/MermaidDiagram';

// ─── Small helper components ────────────────────────────────────────────────

function Para({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textPrimary, lineHeight: 2, mb: 2 }}
    >
      {children}
    </Typography>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        fontFamily: 'inherit',
        fontSize: { xs: 17, sm: 20 },
        fontWeight: 700,
        color: COLORS.pink,
        mt: 4,
        mb: 1.5,
      }}
    >
      {children}
    </Typography>
  );
}

function H3({ emoji, children }: { emoji?: string; children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        fontFamily: 'inherit',
        fontSize: 15,
        fontWeight: 600,
        color: COLORS.mauve,
        mt: 3,
        mb: 1,
      }}
    >
      {emoji && <span style={{ marginRight: 6 }}>{emoji}</span>}
      {children}
    </Typography>
  );
}

function Callout({
  emoji,
  title,
  children,
  variant = 'info',
}: {
  emoji: string;
  title: string;
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'horror';
}) {
  const colors = {
    info:    { border: COLORS.mauve,    bg: `${COLORS.mauve}10` },
    warning: { border: COLORS.orange,   bg: `${COLORS.orange}10` },
    horror:  { border: COLORS.pink,     bg: `${COLORS.pink}0A` },
  };
  const c = colors[variant];

  return (
    <Box
      sx={{
        bgcolor: c.bg,
        border: `1px solid ${c.border}40`,
        borderLeft: `4px solid ${c.border}`,
        borderRadius: 1,
        p: 2.5,
        my: 3,
      }}
    >
      <Typography
        sx={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 700, color: COLORS.textPrimary, mb: 1 }}
      >
        {emoji} {title}
      </Typography>
      <Typography
        sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.9 }}
      >
        {children}
      </Typography>
    </Box>
  );
}

function Hl({ children }: { children: React.ReactNode }) {
  return <span style={{ color: COLORS.pink, fontWeight: 600 }}>{children}</span>;
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="code"
      sx={{
        fontFamily: 'inherit',
        bgcolor: `${COLORS.pink}15`,
        color: COLORS.mauve,
        px: 0.75,
        py: 0.25,
        borderRadius: '4px',
        fontSize: 12,
      }}
    >
      {children}
    </Box>
  );
}

// ─── Mermaid chart ──────────────────────────────────────────────────────────

const PIPELINE_CHART = `
flowchart TD
    A[Upload file] --> B[Get tables]
    B --> C[Filter Array to check if name is present]
    C --> D{Filter array equal to 0?}
    D -->|Yes| E[Send Teams message: Invalid File]
    E --> F[End Flow]
    D -->|No| G[List all rows present in table]
    G --> H{Fixed column names present?}
    H -->|No / Fail| I[Send Teams message: Missing necessary columns]
    I --> J[Terminate Flow]
    H -->|Yes / Pass| K[Get new hires by checking against SharePoint list]
    K --> L{Are there new hires?}
    L -->|Yes| M[Is Employee Code empty?]
    M -->|True| N[Skip item / Loop next]
    M -->|False| O{Department Name exists in Data Dictionary?}
    O -->|Yes| P[Insert staff into DB]
    O -->|No| Q[Append to error handling variable]
    P --> R[Check for offboarded staff]
    Q --> R
    N --> R
    L -->|No| R
    R --> S[Create HTML Table report]
    S --> T[Send report to uploader for Success / Partial Success]
`;

// ─── Main article ───────────────────────────────────────────────────────────

export default function HRDataApocalypse() {
  return (
    <Box sx={{ maxWidth: 760, mx: 'auto', px: { xs: 2, sm: 4 }, py: 4 }}>

      {/* ── Breadcrumb ── */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textMuted }}>
          articles
        </Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textMuted }}>/</Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.pink }}>
          hr-data-apocalypse.md
        </Typography>
      </Box>

      {/* ── Header ── */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {['Case Study', 'Data Engineering', 'Bajaj Nigeria'].map(t => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                fontFamily: 'inherit',
                fontSize: 10,
                color: COLORS.mauve,
                bgcolor: `${COLORS.mauve}15`,
                border: `1px solid ${COLORS.mauve}40`,
                height: 20,
              }}
            />
          ))}
        </Box>

        <Typography
          sx={{
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: { xs: 20, sm: 26 },
            color: COLORS.textPrimary,
            lineHeight: 1.3,
            mb: 1.5,
          }}
        >
          <span style={{ color: COLORS.pink }}>#</span> How I Saved My Company from an HR-Induced Data Apocalypse
          <span style={{ color: COLORS.textMuted }}> (and Built a Slick Intranet in the Process)</span>
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
          What started as an intranet request turned into a full-scale exercise in 
          data engineering and ghost-hunting
        </Typography>
      </Box>

      <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

      {/* ── Intro ── */}
      <Para>
        If you&apos;ve ever worked in tech, you know there is one universal law:{' '}
        <Hl>human beings will always find a way to break a spreadsheet.</Hl> Recently, I was tasked
        with building a shiny new corporate Intranet Hub. It had all the bells and whistles: a
        beautiful, real-time &ldquo;Townhall Directory&rdquo; with smooth filtering, personal profile
        cards, and an automated &ldquo;Birthday Spotlight&rdquo; web part to make sure everyone gets
        their workplace cake notifications on time.
      </Para>
      <Para>
        The webparts looked gorgeous. The React components were singing. I was ready to coast into
        the weekend.
      </Para>
      <Para>
        But then, I opened the source data files provided by HR.
      </Para>
      <Para>
        Cue the dramatic horror movie music. 🎬
      </Para>

      {/* ── The Chaos ── */}
      <H2>The Chaos: 50 Shades of &ldquo;Accounts&rdquo;</H2>

      <Para>
        To feed our new Intranet directory, the system needed to read Excel files uploaded by the HR
        teams. Simple, right?
      </Para>
      <Para>
        Except the data was fragmented. The team managing local staff kept their own spreadsheets, and
        the team managing expatriate staff kept theirs. And because humans are humans, consistency
        didn&apos;t exist.
      </Para>
      <Para>
        When I looked under the hood at the <InlineCode>department</InlineCode> column, I
        didn&apos;t find a clean list. I found a wild west of typos and abbreviations:
      </Para>

      <Box sx={{ bgcolor: COLORS.codeBg, border: `1px solid ${COLORS.border}`, borderRadius: 1, p: 2.5, mb: 3 }}>
        <Box sx={{ position: 'absolute' }} />
        {[
          { official: 'Finance & Accounts', variants: ['Accounts', 'Account', 'F&A'] },
          { official: 'Digital',            variants: ['DTS'] },
          { official: 'Dispatch',           variants: ['Disptach 💀'] },
        ].map(row => (
          <Box key={row.official} sx={{ display: 'flex', gap: 2, mb: 1, flexWrap: 'wrap', alignItems: 'baseline' }}>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.mauve, fontWeight: 600, minWidth: 160 }}>
              {row.official}
            </Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted }}>→</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {row.variants.map(v => (
                <Chip
                  key={v}
                  label={v}
                  size="small"
                  sx={{
                    fontFamily: 'inherit',
                    fontSize: 11,
                    color: COLORS.orange,
                    bgcolor: `${COLORS.orange}15`,
                    border: `1px solid ${COLORS.orange}40`,
                    height: 20,
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
        <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted, mt: 1.5, fontStyle: 'italic' }}>
          {'// and ~47 other creative interpretations of the same 31 official departments'}
        </Typography>
      </Box>

      {/* ── Why This Mattered ── */}
      <H2>Why This Mattered</H2>

      <Para>
        Computer programs are incredibly literal. If my code is looking for{' '}
        <InlineCode>Digital</InlineCode> to put someone in the right department bucket on the
        frontend UI, and the spreadsheet says <InlineCode>DTS</InlineCode>, that employee simply{' '}
        <Hl>vanishes into thin air</Hl>. No profile card. No birthday cake announcement. Just digital
        oblivion.
      </Para>

      <Para>
        This is the full pipeline I needed to build — and the places it needed to protect itself:
      </Para>

      {/* ── MERMAID DIAGRAM ── */}
      <MermaidDiagram chart={PIPELINE_CHART} />

      {/* ── Step 1 ── */}
      <H2>Step 1: Building a Translation Engine</H2>
      <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted, fontStyle: 'italic', mb: 2 }}>
        (The Backend Trench Warfare)
      </Typography>

      <Para>
        Instead of complaining, I decided to build a <Hl>bulletproof, self-healing backend data
        pipeline</Hl>. If HR was going to feed the system chaos, my pipeline was going to act as a
        data filter.
      </Para>
      <Para>
        I built a custom <strong>data dictionary layer</strong>. Think of it like a universal
        translator inside the ingestion engine. If a spreadsheet row came in saying{' '}
        <InlineCode>Account</InlineCode>, the engine intercepted it, said &ldquo;Ah, you mean{' '}
        <InlineCode>Finance &amp; Accounts</InlineCode>,&rdquo; fixed it on the fly, and mapped it
        cleanly into our master database.
      </Para>
      <Para>
        I even wrote code to handle invisible human errors — like when someone accidentally hits the
        spacebar at the end of a column header (looking at you,{' '}
        <InlineCode>&ldquo;EMPLOYEE CODE &nbsp;&rdquo;</InlineCode>). My pipeline used fallback
        expressions to hunt down those trailing spaces and neutralize them before they could crash
        the server.
      </Para>

      {/* ── Step 2 ── */}
      <H2>Step 2: Ghost Hunting and Avoiding Accidental Layoffs</H2>

      <Para>
        Just when I thought the pipeline was safe, two massive &ldquo;boss battles&rdquo; appeared
        in the data architecture.
      </Para>

      <Callout emoji="👻" title="The 512 Ghost Rows" variant="horror">
        During testing, a tiny demo file with exactly one employee row took <em>forever</em> to run.
        Why? Because someone had scrolled down to row 500 in Excel weeks ago, hit backspace, and
        left. Excel permanently flagged those 512 empty rows as &ldquo;active data.&rdquo;
        <br /><br />
        Poor Power Automate was spinning its wheels trying to onboard 512 blank ghosts with no names or
        codes! I had to write a pre-flight memory filter to instantly vaporize empty rows the second
        the file was dropped into the system.
      </Callout>

      <Callout emoji="🛑" title="The Accidental Mass Layoff Bug" variant="warning">
        Because the local staff and expat staff files were uploaded at completely different times of
        the month, a massive logical hazard emerged.
        <br /><br />
        Originally, when the expat file was uploaded, the system would scan the corporate directory,
        see that all 370+ local nationals were &ldquo;missing&rdquo; from that specific file, panic,
        and automatically toggle them all to <strong>Inactive</strong>.
        <br /><br />
        I had essentially engineered an automated, accidental mass layoff engine! 😂
        <br /><br />
        To fix this, I refactored the architecture to execute a <strong>dynamic scope check</strong>.
        The system now looks at the file&apos;s metadata first to see who is uploading. If it&apos;s
        an Expat file, it places a protective shield around the National database rows, and vice
        versa. Disaster averted.
      </Callout>

      {/* ── Step 3 ── */}
      <H2>Step 3: Fixing the Source</H2>
      <Typography sx={{ fontFamily: 'inherit', fontSize: 12, color: COLORS.textMuted, fontStyle: 'italic', mb: 2 }}>
        (Data Governance over Coffee)
      </Typography>

      <Para>
        Once the backend was self-healing and the frontend looked like a million bucks, I realized
        something important: <Hl>good engineering doesn&apos;t just fix bad data downstream — it
        stops it at the source.</Hl>
      </Para>
      <Para>
        I packaged up my findings, counted up the 50+ wild naming variations I discovered, and
        condensed them into <Hl>31 official corporate department strings</Hl>.
      </Para>
      <Para>
        Instead of sending a passive-aggressive email, I set up a <strong>collaborative workshop
        with the HR team</strong>. I showed them how a single typo could make a teammate invisible
        on the hub, handed them a locked master template where Row 1 can&apos;t be messed with, and
        established a clear &ldquo;data contract.&rdquo;
      </Para>
      <Para>
        Now, if an upload contains a completely unapproved department string, the system gracefully
        skips it and automatically sends a neat error report to the uploader telling them exactly
        what to fix.
      </Para>

      {/* ── Outcome ── */}
      <H2>The Outcome ✨</H2>

      <Para>
        What started as a request for an intranet hub turned into a full-scale exercise in enterprise
        data engineering.
      </Para>

      <Box
        sx={{
          bgcolor: COLORS.codeBg,
          border: `1px solid ${COLORS.border}`,
          borderLeft: `4px solid ${COLORS.pink}`,
          borderRadius: 1,
          p: 2.5,
          mb: 3,
        }}
      >
        {[
          '100% automated and stable pipeline in production',
          'Frontend UI crisp — filter by National or Expat with one click',
          'Birthdays roll out flawlessly',
          'Zero ghost rows, zero accidental offboards, zero invisible employees',
        ].map((item, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start', mb: i < 3 ? 0.75 : 0 }}>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, fontWeight: 700, flexShrink: 0, lineHeight: 1.8 }}>
              ✓
            </Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.8 }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ── Takeaways ── */}
      <H2>Key Takeaways</H2>

      {[
        {
          title: 'Design for the Unhappy Path',
          text: 'Code for the messy reality of human data entry, not the perfect fantasy of your sample files. Real users are creative in ways your tests never anticipated.',
        },
        {
          title: 'Empathy over Anger',
          text: "When data is messy, don't get frustrated with the users. Sit down with them, show them why the system breaks, and give them the tools to succeed. Data governance is a people problem first.",
        },
      ].map((t, i) => (
        <Box
          key={i}
          sx={{
            bgcolor: COLORS.codeBg,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 1,
            p: 2.5,
            mb: 2,
            '&:hover': { borderColor: `${COLORS.mauve}80` },
            transition: 'border-color 0.2s',
          }}
        >
          <Typography sx={{ fontFamily: 'inherit', fontSize: 13, fontWeight: 700, color: COLORS.mauve, mb: 0.75 }}>
            <span style={{ color: COLORS.textMuted }}>{i + 1}. </span>{t.title}
          </Typography>
          <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.8 }}>
            {t.text}
          </Typography>
        </Box>
      ))}

      <Divider sx={{ borderColor: COLORS.border, my: 4 }} />

      <Typography
        sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textSecondary, fontStyle: 'italic', textAlign: 'center' }}
      >
        Now, if you&apos;ll excuse me. I&apos;m going to go check if it&apos;s anyone&apos;s
        birthday today. 🎂
      </Typography>
    </Box>
  );
}
