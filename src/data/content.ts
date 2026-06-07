export type Metric = { label: string; value: string };

export type Highlight = { title: string; description: string; tags: string[] };

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  contract?: boolean;
  emoji: string;
  tagline: string;
  metrics: Metric[];
  highlights: Highlight[];
  tech: string[];
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  status: 'Production' | 'Shipped' | 'In Progress';
  company: string;
  tagline: string;
  diagram: string;
  problem: string;
  solution: string;
  impact: string[];
  tech: string[];
  wip?: boolean;
};

export type WorkshopSession = {
  title: string;
  description: string;
  audience: string;
  format: 'Workshop' | 'Mentorship';
};

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

export const experiences: Record<string, Experience> = {
  'bajaj-nigeria': {
    id: 'bajaj-nigeria',
    company: 'Bajaj Nigeria',
    role: 'Data Engineer',
    period: 'Nov 2025 – Present',
    location: 'Lagos, Nigeria',
    emoji: '🏢',
    tagline: "Building the data backbone for one of Nigeria's largest automotive brands.",
    metrics: [
      { label: 'Power Platform savings', value: '$27K/year' },
      { label: 'Mobile app impact',      value: '₦1.5M saved' },
      { label: 'Staff data ops',         value: '3 people → 1 pipeline' },
    ],
    highlights: [
      {
        title: 'Power Platform Licensing Audit',
        description:
          'Identified and implemented optimizations cutting $2,250/month from cloud spend — $27K back in the budget annually.',
        tags: ['Power Platform', 'Cost Optimization', 'M365'],
      },
      {
        title: 'Recruitment Governance Engine',
        description:
          'Designed and deployed full-cycle automation for HR — fiscal approvals to onboarding digitization. Emails and spreadsheets became a governed, auditable workflow.',
        tags: ['Process Automation', 'HR Tech', 'Power Automate'],
      },
      {
        title: 'RAG-Based Internal Knowledge System',
        description:
          'Architected an internal knowledge base using Retrieval-Augmented Generation, significantly reducing staff information retrieval time across departments.',
        tags: ['RAG', 'AI', 'Knowledge Management'],
      },
      {
        title: 'DAG Connect App — ETL & Analytics',
        description:
          'Built end-to-end ETL pipelines with GitHub Actions orchestration and deployed analytics dashboards. Conducted strategic audits and authored "Map to Revenue" proposals for senior management.',
        tags: ['ETL', 'GitHub Actions', 'Analytics', 'Strategy'],
      },
      {
        title: 'Enterprise Data Warehouse',
        description:
          'Architecting a warehouse to consolidate, clean, and migrate Sales data into Oracle — enabling downstream data product development across the business.',
        tags: ['Oracle', 'Data Warehouse', 'ETL/ELT'],
      },
      {
        title: 'NDPR Compliance',
        description:
          'Administered company-wide data privacy questionnaires, interviewed departments, and delivered consolidated reports to the DPO.',
        tags: ['NDPR', 'Data Privacy', 'Compliance'],
      },
    ],
    tech: ['Python', 'Oracle', 'Power Platform', 'GitHub Actions', 'RAG', 'ETL/ELT', 'Power Automate'],
  },

  'lots': {
    id: 'lots',
    company: 'LOTS',
    role: 'Data Engineer',
    period: 'Feb 2024 – Oct 2025',
    location: 'Remote',
    emoji: '🌐',
    tagline: 'Scaling data infrastructure for an AI-powered supply chain platform.',
    metrics: [
      { label: 'API call reduction',      value: '30%' },
      { label: 'Support ticket reduction', value: '25%' },
      { label: 'User retention boost',     value: '+15%' },
      { label: 'Server cost reduction',    value: '20%' },
    ],
    highlights: [
      {
        title: 'AI Supply Chain Pipelines',
        description:
          'Engineered scalable pipelines for an AI-powered supply chain system — handling ingestion, transformation, and storage for ML models in production.',
        tags: ['Python', 'ETL', 'ML Pipelines', 'AI'],
      },
      {
        title: 'API Cost Optimization',
        description:
          'Optimized data processing algorithms to cut API calls by 30%, translating directly to significant monthly cost savings.',
        tags: ['Optimization', 'API', 'Cost Reduction'],
      },
      {
        title: 'User Credit Management System',
        description:
          'Designed a data-driven credit management system that reduced support tickets by 25% and boosted user retention by 15%.',
        tags: ['Data Systems', 'Product Engineering', 'Retention'],
      },
      {
        title: 'GCP Cloud Run Deployment',
        description:
          'Deployed and managed data services on GCP Cloud Run — optimized resource allocation for a 20% server cost reduction and faster pipeline deployments.',
        tags: ['GCP', 'Cloud Run', 'DevOps', 'Docker'],
      },
    ],
    tech: ['Python', 'GCP', 'Cloud Run', 'Docker', 'ETL/ELT', 'PostgreSQL'],
  },

  'code-derivatives': {
    id: 'code-derivatives',
    company: 'Code Derivatives',
    role: 'Backend Developer',
    period: 'Oct 2024 – Feb 2025',
    location: 'Lagos, Nigeria',
    contract: true,
    emoji: '⚙️',
    tagline: 'Shipping AI-powered backend systems for a hiring and content platform.',
    metrics: [
      { label: 'Requirements delivered', value: '95%+' },
      { label: 'Root causes resolved',   value: '90%' },
    ],
    highlights: [
      {
        title: 'AI Resume Parser & Grader',
        description:
          "Led development of a data-driven system that ingested, parsed, and graded CVs against job descriptions — significantly streamlining candidate selection pipelines.",
        tags: ['Python', 'NLP', 'AI', 'HR Tech'],
      },
      {
        title: 'Recruiter Workflow Automation',
        description:
          'Built automated applicant contact, meeting scheduling, and hiring manager evaluation form integration into a seamless end-to-end recruiter workflow.',
        tags: ['Automation', 'Workflow', 'Backend'],
      },
      {
        title: 'AI Blog Generation System',
        description:
          'Engineered a multi-model AI system with a provider abstraction layer over OpenAI, Gemini, and Claude. Included subscription tiers with SEO optimization and bulk generation.',
        tags: ['OpenAI', 'Gemini', 'Claude', 'TypeScript', 'SaaS'],
      },
    ],
    tech: ['TypeScript', 'Python', 'OpenAI API', 'Gemini', 'Claude API', 'PostgreSQL'],
  },
};

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export const projects: Record<string, Project> = {
  'hr-identity-pipeline': {
    id: 'hr-identity-pipeline',
    title: 'HR Staff Identity Pipeline',
    subtitle: 'From Excel chaos to a single source of truth',
    emoji: '🔄',
    status: 'Production',
    company: 'Bajaj Nigeria',
    tagline: 'Automated staff identity management that replaced 3 manual operators and one shared spreadsheet.',
    diagram: `
  ┌──────────────────────────────────────────────────┐
  │           HR STAFF IDENTITY PIPELINE             │
  └──────────────────────────────────────────────────┘

       [Excel Upload to Dropzone]
                  │
                  ▼
         [Pipeline Trigger]
                  │
                  ▼
    ┌─────────────────────────────┐
    │       Validation Layer      │
    │   ✓ Required columns check  │
    │   ✓ Dept. data dictionary   │
    │   ✓ Data cleaning / norms   │
    └──────────────┬──────────────┘
                   │
          ┌────────┴─────────┐
         PASS              FAIL
          │                  │
          ▼                  ▼
    [Upsert DB]        [Error Report]
          │
          ├── Staff in new sheet  ──▶  UPDATE record
          │
          └── Staff absent        ──▶  OFFBOARD
                       │
                       ├── Remove from Townhall (Intranet)
                       └── Remove from Birthday Spotlight`,
    problem:
      'Three people managing staff data in a shared Excel file. No validation, no consistency, no source of truth. Employees who left the company would linger on the intranet townhall and birthday spotlight for months.',
    solution:
      'A fully automated pipeline triggered on Excel upload. It validates every row against the data dictionary, cleans the data, upserts records, and handles offboarding — zero manual intervention required.',
    impact: [
      'Eliminated manual data management for 3 staff members',
      'Real-time birthday spotlight accuracy — no more stale entries',
      'Zero deactivated employees visible on the intranet townhall',
      'Department names validated against the official data dictionary on every run',
    ],
    tech: ['Python', 'ETL', 'Power Automate', 'SharePoint', 'Data Validation'],
  },

  'resume-parser-ai': {
    id: 'resume-parser-ai',
    title: 'AI Resume Parser & Grader',
    subtitle: 'Structured intelligence from unstructured CVs',
    emoji: '🤖',
    status: 'Shipped',
    company: 'Code Derivatives',
    tagline: 'A data pipeline that turns PDFs into hiring decisions.',
    diagram: `
  [CV Upload  ·  PDF / DOCX]
             │
             ▼
    [Document Parser]
             │
             ▼
  ┌──────────────────────────┐
  │     NLP Extraction       │
  │   · Skills               │
  │   · Experience & Dates   │
  │   · Education            │
  │   · Keywords & Signals   │
  └────────────┬─────────────┘
               │
               ▼
  [Job Description Vectorizer]
               │
               ▼
  ┌──────────────────────────┐
  │      Scoring Engine      │
  │   · Match Score  0–100   │
  │   · Gap Analysis         │
  │   · Recommendation Flag  │
  └────────────┬─────────────┘
               │
               ▼
  [Recruiter Dashboard + Auto-Contact]`,
    problem:
      "Manual CV review doesn't scale. Recruiters spent hours ranking candidates by hand with no consistency or repeatability.",
    solution:
      'A backend system that parses CVs, extracts structured data, compares against job descriptions using NLP, and grades each candidate — returning a ranked shortlist with automated follow-up contact baked in.',
    impact: [
      'Dramatically reduced candidate screening time',
      'Consistent, criteria-based grading across all applicants',
      'Automated recruiter contact and meeting scheduling on top',
      '95%+ of software requirements delivered on agreed timelines',
    ],
    tech: ['Python', 'NLP', 'TypeScript', 'PostgreSQL', 'AI APIs'],
  },

  'marketing-to-sales-etl': {
    id: 'marketing-to-sales-etl',
    title: 'Marketing → Sales ETL Pipeline',
    subtitle: 'Connecting the top of the funnel to the bottom line',
    emoji: '📊',
    status: 'In Progress',
    company: 'Bajaj Nigeria',
    tagline: 'A pipeline that turns marketing activity data into sales intelligence.',
    diagram: `
  [Marketing Sources]              [Sales CRM / Oracle]
  ┌──────────────────┐            ┌────────────────────┐
  │  Campaigns       │            │  Leads             │
  │  Events          │            │  Deals             │
  │  Web Traffic     │            │  Closed Revenue    │
  └────────┬─────────┘            └──────────┬─────────┘
           │                                 │
           └────────────────┬────────────────┘
                            │
                            ▼
                   [ETL Pipeline]
                ┌─────────────────────┐
                │  Extract            │
                │  Transform & Clean  │
                │  Load → Oracle DW   │
                └──────────┬──────────┘
                           │
                           ▼
                  [Analytics Layer]
                ┌─────────────────────┐
                │  Attribution        │
                │  Conversion Rates   │
                │  ROI Dashboards     │
                └─────────────────────┘`,
    problem:
      'Marketing and Sales operate in silos. No visibility into which campaigns actually convert to revenue. Budget decisions are made on gut feel, not data.',
    solution:
      'End-to-end ETL pipeline connecting marketing data sources to the Sales data warehouse, with dashboards tracking attribution, conversion, and ROI — giving leadership full-funnel visibility for the first time.',
    impact: [
      'Full-funnel visibility connecting campaigns to closed revenue',
      'Data-driven marketing budget decisions',
      'Automated reporting replacing manual weekly data pulls',
    ],
    tech: ['Python', 'Oracle', 'ETL/ELT', 'GitHub Actions', 'Analytics'],
    wip: true,
  },
};

// ─── OFF DUTY ─────────────────────────────────────────────────────────────────

export const workshopSessions: WorkshopSession[] = [
  {
    title: 'Inhouse ATS Portal',
    description:
      'Led HR team training on the Applicant Tracking System — from candidate pipeline navigation to status updates, reporting workflows, and best practices.',
    audience: 'HR Team, Bajaj Nigeria',
    format: 'Workshop',
  },
  {
    title: 'Microsoft Loop',
    description:
      'Facilitated sessions on Microsoft Loop — collaborative workspaces, real-time co-editing, and integration with Teams and Outlook for cross-functional teams.',
    audience: 'Cross-functional teams',
    format: 'Workshop',
  },
  {
    title: 'UI/UX Design Principles',
    description:
      'Informal mentorship on design fundamentals — visual hierarchy, spacing, user flows, and building internal tools people actually want to use.',
    audience: 'Colleagues & Interns',
    format: 'Mentorship',
  },
  {
    title: 'Excel & M365 Best Practices',
    description:
      'Guided teams on document sharing, cloud sync, and collaboration workflows — the pragmatic bridge between spreadsheet culture and structured data systems.',
    audience: 'Operations teams',
    format: 'Workshop',
  },
];

export const interests = {
  currently_open_to:  ['Senior Data Engineering roles', 'Consulting', 'Freelance contracts'],
  location:           'Lagos, Nigeria',
  timezone:           'WAT (UTC+1)',
  hobbies:            ['Exploring Lagos food spots', 'Weightlifting', 'Sci-Fi novels'],
  coffee_dependency:  true,
  fun_facts: [
    'I believe generalists will inherit the tech industry',
    "I've saved companies money in both dollars and naira",
    "Started coding during my B.Sc and haven't stopped since",
  ],
  superpower:         'Turning business problems into data solutions before the meeting ends',
  currently_learning: 'Advanced data mesh architecture & dbt',
};
