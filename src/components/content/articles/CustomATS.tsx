'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { COLORS } from '@/theme';
import MermaidDiagram from '@/components/MermaidDiagram';

function Para({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textPrimary, lineHeight: 2, mb: 2 }}>
      {children}
    </Typography>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontFamily: 'inherit', fontSize: { xs: 17, sm: 20 }, fontWeight: 700, color: COLORS.pink, mt: 4, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontFamily: 'inherit', fontSize: 15, fontWeight: 600, color: COLORS.mauve, mt: 3, mb: 1 }}>
      {children}
    </Typography>
  );
}

function Callout({ emoji, title, children, variant = 'info' }: {
  emoji: string; title: string; children: React.ReactNode; variant?: 'info' | 'warning';
}) {
  const c = variant === 'warning'
    ? { border: COLORS.orange, bg: `${COLORS.orange}10` }
    : { border: COLORS.mauve,  bg: `${COLORS.mauve}10`  };
  return (
    <Box sx={{ bgcolor: c.bg, border: `1px solid ${c.border}40`, borderLeft: `4px solid ${c.border}`, borderRadius: 1, p: 2.5, my: 3 }}>
      <Typography sx={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 700, color: COLORS.textPrimary, mb: 1 }}>
        {emoji} {title}
      </Typography>
      <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.9 }}>
        {children}
      </Typography>
    </Box>
  );
}

function ArchNote({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ pl: 2, borderLeft: `3px solid ${COLORS.border}`, mt: 1, mb: 0.5 }}>
      <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.8 }}>
        {children}
      </Typography>
    </Box>
  );
}

function Hl({ children }: { children: React.ReactNode }) {
  return <span style={{ color: COLORS.pink, fontWeight: 600 }}>{children}</span>;
}

// ─── Mermaid charts ──────────────────────────────────────────────────────────

const RESUME_PARSING_CHART = `flowchart TD
    A[Frontend: CV File Upload] --> B[Backend: Stream file payload]
    B --> C[Cloudflare Worker: Receive stream]
    C --> D[Worker: Run parsing & regex logic]
    D --> E{Is structure valid JSON?}
    E -->|No / Parse Fail| F[Return fallback standard text string]
    E -->|Yes / Pass| G[Return structured JSON object]
    F --> H[Backend: Forward response to Frontend]
    G --> H
    H --> I[Frontend: Hydrate verification form]
    I --> J[User: Correct errors & click Submit]
    J --> K[Backend: Commit validated candidate to DB]`;

const APPROVAL_WORKFLOW_CHART = `flowchart TD
    A[HR: Select approver array & submit salary details] --> B[Backend: Set OfferStatus to Pending_Approval]
    B --> C[System: Fetch first/next Approver in array]
    C --> D[System: Send notification & unlock approval action]
    D --> E{Approver Action?}
    E -->|Reject| F[Set OfferStatus to Cancelled]
    E -->|Approve| G{Are there more approvers in list?}
    G -->|Yes| C
    G -->|No| H[Set OfferStatus to Approved]
    F --> I[System: Notify HR to restart flow]
    H --> J[System: Unlock Generate Offer Letter capability]`;

const ONBOARDING_PORTAL_CHART = `flowchart TD
    A[Backend: Generate secure UUID token] --> B[System: Email unique portal link to candidate]
    B --> C[Candidate: Click link & hit candidate portal API]
    C --> D{Is token valid & unexpired?}
    D -->|No / Expired| E[Return 403 Forbidden Error]
    D -->|Yes| F[Render Competency & Upload Form]
    F --> G[Candidate: Upload pre-offer documents]
    G --> H{Are files valid types & under size limit?}
    H -->|No| I[Reject payload & throw validation error]
    H -->|Yes| J[Backend: Stream files securely to storage]
    J --> K[Backend: Update candidate status to Documents_Received]
    K --> L[System: Invalidate token & revoke portal access]`;

// ─── Main article ─────────────────────────────────────────────────────────────

export default function CustomATS() {
  return (
    <Box sx={{ maxWidth: 760, mx: 'auto', px: { xs: 2, sm: 4 }, py: 4 }}>

      {/* ── Breadcrumb ── */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textMuted }}>systems-architecture</Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.textMuted }}>/</Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 11, color: COLORS.pink }}>custom-ats.md</Typography>
      </Box>

      {/* ── Header ── */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {['Architectural Case Study', 'Systems Design', 'DAG Nigeria'].map(t => (
            <Chip key={t} label={t} size="small" sx={{ fontFamily: 'inherit', fontSize: 10, color: COLORS.mauve, bgcolor: `${COLORS.mauve}15`, border: `1px solid ${COLORS.mauve}40`, height: 20 }} />
          ))}
        </Box>
        <Typography sx={{ fontFamily: 'inherit', fontWeight: 700, fontSize: { xs: 20, sm: 26 }, color: COLORS.textPrimary, lineHeight: 1.3, mb: 1.5 }}>
          <span style={{ color: COLORS.pink }}>#</span> Custom Enterprise ATS & Onboarding Engine
          <span style={{ color: COLORS.textMuted }}> — Architectural Case Study</span>
        </Typography>
        <Typography sx={{ fontFamily: 'inherit', fontSize: 14, color: COLORS.textSecondary, pl: 2, borderLeft: `3px solid ${COLORS.pink}`, fontStyle: 'italic', lineHeight: 1.7 }}>
          When enterprise licensing is cost-prohibitive, you build it yourself — and you build it better.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

      {/* ── Introduction ── */}
      <Para>
        Top-tier enterprise ATS platforms like <Hl>Greenhouse</Hl> or <Hl>Ashby</Hl> offer deep workflow
        customization and compliance routing — but their licensing costs are prohibitively expensive for
        many scaling companies. When our organization needed a system tailored tightly to our internal
        operations, we faced a classic engineering trade-off: pay an enterprise premium for features we
        might not fully use, or build a lean, custom platform designed exactly around our specific
        operational constraints.
      </Para>
      <Para>
        I architected and deployed a custom internal ATS platform that digitizes our end-to-end
        recruitment pipeline — moving candidates from <Hl>resume ingestion</Hl> to{' '}
        <Hl>final onboarding</Hl>.
      </Para>
      <Para>
        Instead of building a generic CRUD application, I focused on mapping out the complex
        cross-department checkpoints that usually require manual overhead, centering the architecture
        around three core engineering priorities:
      </Para>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3, pl: 1 }}>
        {[
          { n: '01', title: 'Scrappy Cost Optimization', body: 'Offloading resource-heavy token processing and resume parsing to the serverless edge to avoid expensive third-party AI API subscriptions.' },
          { n: '02', title: 'Strict State Management',   body: 'Building a deterministic, multi-department approval engine to ensure compensation compliance before an offer letter can physically be generated.' },
          { n: '03', title: 'Decoupled Data Security',   body: 'Providing a secure, isolated interface for external candidates to submit sensitive pre-boarding documents without exposing our internal infrastructure.' },
        ].map(p => (
          <Box key={p.n} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.pink, fontWeight: 700, flexShrink: 0, lineHeight: 1.8, minWidth: 28 }}>{p.n}</Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.8 }}>
              <span style={{ color: COLORS.mauve, fontWeight: 600 }}>{p.title} — </span>{p.body}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

      {/* ── Section 1 ── */}
      <H2>1. Resume Parsing Pipeline (Edge-Assisted Architecture)</H2>

      <Callout emoji="⚡" title="The Challenge">
        We needed to automate CV parsing without incurring the high subscription costs of enterprise
        LLM APIs. The solution had to be cost-effective, resilient under load, and still accurate
        enough for real hiring decisions.
      </Callout>

      <Para>
        I architected a <Hl>hybrid edge architecture</Hl> that offloads tokenization and schema
        structuring to a lightweight <Hl>Cloudflare Worker</Hl> running on the edge, keeping the
        core backend free from long-running I/O operations.
      </Para>

      <H3>Data Flow Architecture</H3>
      <MermaidDiagram chart={RESUME_PARSING_CHART} />

      <H3>Architectural Notes</H3>
      <ArchNote>
        <strong style={{ color: COLORS.mauve }}>Edge Offloading:</strong> Instead of handling{' '}
        <code style={{ color: COLORS.pink, fontSize: 12 }}>multipart/form-data</code> parsing on
        the core server, the file is streamed directly through the backend to a Cloudflare Worker.
        This protects primary compute instances from memory spikes during heavy resume uploads.
      </ArchNote>
      <ArchNote>
        <strong style={{ color: COLORS.mauve }}>Optimistic UI Hydration:</strong> The backend saves
        nothing to the database during the parsing phase. It acts purely as a pass-through — piping
        the worker's JSON payload back to the UI so the user becomes the final validation layer
        before any write operation happens.
      </ArchNote>

      <Divider sx={{ borderColor: COLORS.border, my: 4 }} />

      {/* ── Section 2 ── */}
      <H2>2. Salary Approval Workflow & State Machine</H2>

      <Callout emoji="🔒" title="The Challenge" variant="warning">
        Offer letters cannot be generated without multi-department compliance. If any single
        stakeholder rejects the proposed compensation, the entire loop must immediately invalidate
        to prevent unauthorized offers reaching candidates.
      </Callout>

      <Para>
        I implemented a <Hl>strict sequential state-tracking flow</Hl> that locks the candidate's
        offer state until all conditional approvals are met. No shortcuts, no parallel approvals —
        every rejection forces a full restart from a clean record.
      </Para>

      <H3>Approval Logic Flow</H3>
      <MermaidDiagram chart={APPROVAL_WORKFLOW_CHART} />

      <H3>Architectural Notes</H3>
      <ArchNote>
        <strong style={{ color: COLORS.mauve }}>Sequential Locking:</strong> The state machine
        strictly prevents parallel processing of the approval list to maintain a clear, auditable
        chain of accountability.
      </ArchNote>
      <ArchNote>
        <strong style={{ color: COLORS.mauve }}>Data Immutability:</strong> Once{' '}
        <code style={{ color: COLORS.pink, fontSize: 12 }}>OfferStatus</code> is set to{' '}
        <code style={{ color: COLORS.pink, fontSize: 12 }}>Pending_Approval</code>, the underlying
        salary parameters are locked at the database level. A rejection transitions the record to{' '}
        <code style={{ color: COLORS.pink, fontSize: 12 }}>Cancelled</code> — forcing a completely
        new transaction record rather than mutating the rejected data.
      </ArchNote>

      <Divider sx={{ borderColor: COLORS.border, my: 4 }} />

      {/* ── Section 3 ── */}
      <H2>3. Isolated External Onboarding Portal</H2>

      <Callout emoji="🔐" title="The Challenge">
        Candidates need a way to upload sensitive pre-offer and onboarding documents without having
        access to our internal ATS environment or compromising our network security perimeter.
      </Callout>

      <Para>
        A <Hl>decoupled token-based authentication portal</Hl> that utilizes temporary, single-use
        signed routes for data submission. Candidates get in, submit their documents, and the door
        closes behind them automatically.
      </Para>

      <H3>Security & Data Intake Flow</H3>
      <MermaidDiagram chart={ONBOARDING_PORTAL_CHART} />

      <H3>Architectural Notes</H3>
      <ArchNote>
        <strong style={{ color: COLORS.mauve }}>Zero-Persistence Tokens:</strong> Tokens are
        stateless and mapped directly to a specific candidate ID and expiration timestamp in the
        database. Once the onboarding milestone is complete, the token is forcefully revoked —
        closing the external entry point entirely.
      </ArchNote>
      <ArchNote>
        <strong style={{ color: COLORS.mauve }}>Payload Sanitation:</strong> File uploads bypass
        memory buffer storage on the server and are immediately validated against an allowed
        MIME-type whitelist before being streamed straight to the storage bucket — minimizing
        surface area for malicious scripts.
      </ArchNote>

    </Box>
  );
}
