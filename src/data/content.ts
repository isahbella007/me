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

export type KeyDecision = { title: string; body: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  status: 'Production' | 'Shipped' | 'In Progress';
  company: string;
  tagline: string;
  diagram?: string;
  mermaidChart?: string;
  problem: string;
  solution: string;
  keyDecisions?: KeyDecision[];
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
    company: 'DAG Nigeria',
    role: 'Data Engineer',
    period: 'Nov 2025 – Present',
    location: 'Lagos, Nigeria',
    emoji: '🏢',
    tagline: "Building the data backbone for one of Nigeria's largest automotive brands.",
    metrics: [
      { label: 'Power Platform savings', value: '$27K/year' },
      { label: 'Mobile app impact',      value: '₦1.5M saved' },
      { label: 'Enterprise HR Lifecycle & Intranet Sync',         value: '3 people → 1 pipeline' },
    ],
    highlights: [
      {
        title: 'Power Platform Licensing Audit',
        description: 'Identified and implemented optimizations cutting $2,250/month from cloud spend — saving $27K annually.',
        tags: ['Cost Optimization', 'Cloud Governance', 'Power Platform'],
      },
      {
        title: 'Custom Enterprise ATS & Governance Engine',
        description: 'Built a full-cycle Applicant Tracking System with state-driven salary approval workflows, automated offer-letter generation, and secure external candidate portals.',
        tags: ['AI Engineering', 'Backend Engineering', 'Workflow Automation'],
      },
      {
        title: 'Identity & Lifecycle Data Pipeline',
        description: 'Consolidated a siloed process managed by 3 manual operators into a single event-driven pipeline that cleans, validates, and automatically syncs master staff files to the intranet.',
        tags: ['Data Engineering', 'ETL/ELT', 'Master Data Management'],
      },
      {
        title: 'Vendor Cost Avoidance App Launch',
        description: 'Bypassed a ₦1.5M external third-party vendor deployment quote by independently managing containerization and production deployment of a corporate mobile application.',
        tags: ['DevOps', 'Mobile Deployment', 'Cost Management'],
      },
      {
        title: 'RAG-Based Knowledge System',
        description: 'Architected an internal knowledge base using Retrieval-Augmented Generation (LLMs), significantly reducing information retrieval times across departments.',
        tags: ['AI Integration', 'LLMs', 'RAG'],
      },
      {
        title: 'DAG Connect — ETL & Product Strategy',
        description: 'Built end-to-end pipelines via GitHub Actions and authored "Map to Revenue" product gap proposals for senior executives based on core telemetry data.',
        tags: ['ETL', 'GitHub Actions', 'Product Strategy'],
      },
      {
        title: 'Enterprise Data Warehouse Migration',
        description: 'Architecting an enterprise data warehouse to consolidate, clean, and migrate disparate Sales data into Oracle to power downstream business analytics.',
        tags: ['Oracle', 'Data Warehousing', 'Data Modeling'],
      },
      {
        title: 'NDPR Compliance & Data Privacy',
        description: 'Administered company-wide compliance mapping, audited data handling procedures across departments, and delivered posture reports to the DPO.',
        tags: ['Data Privacy', 'NDPR', 'Compliance'],
      }
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
    tagline: 'Intelligence Pipelines & Subscription-Tier content Engines',
    metrics: [
      { label: 'Requirements delivered', value: '95%+' },
      { label: 'Root causes resolved',   value: '90%' },
    ],
    highlights: [
      {
        title: 'Recruiter Workflow Automation',
        description:
          'Built automated applicant contact, meeting scheduling, and hiring manager evaluation form integration into a seamless end-to-end recruiter workflow.',
        tags: ['Automation', 'Workflow', 'Backend'],
      },
      {
        title: 'Multi-Model AI Blog Platform',
        description: 'Architected a subscription-based content engine using Factory and Strategy design patterns to dynamically abstract and orchestrate API calls across OpenAI, Claude, and Gemini.',
        tags: ['Design Patterns', 'API Abstraction', 'LLM Orchestration', 'Backend Dev', 'Saas'],
      },
      {
        title: 'Cross-Functional Schema Alignment',
        description: 'Collaborated with UX teams to translate complex visual components into optimized JSON API responses, ensuring data structures perfectly matched frontend performance requirements.',
        tags: ['API Design', 'Data Modeling', 'Cross-Team Collaboration'],
      },
    ],
    tech: ['TypeScript', 'Python', 'OpenAI API', 'Gemini', 'Claude API', 'PostgreSQL'],
  },

  'orion-resources': {
    id: 'orion-resources',
    company: 'Orion Resources',
    role: 'FullStack Developer',
    period: 'Oct 2022 – Nov 2023',
    location: 'Abuja, Nigeria',
    emoji: '⚙️',
    tagline: 'Event-Driven Task Scheduling & Automated Operational Dashboards',
    metrics: [
      { label: 'Reduction in task assignment latency.', value: '70%' },
      { label: 'Reduction in maintenance overhead',   value: '30%' },
      { label: 'Improvement in query response times', value: '50%' },
    ],
    highlights: [
      {
        title: 'Industrial Operations Mobile Platform',
        description: 'Designed and built a mobile factory management application that streamlined factory cleaning operations, resulting in a 30% reduction in maintenance overhead and a 70% drop in task assignment latency.',
        tags: ['Mobile Development', 'State Management', 'Redux Toolkit', 'Process Automation'],
      },
      {
        title: 'Real-Time Dispatch & Scheduling',
        description: 'Engineered a dynamic scheduling system that cut task assignment latency by 70%, automatically matching available site cleaners with active factory floor room demands.',
        tags: ['Algorithm Design', 'Resource Allocation', 'Process Automation'],
      },
      {
        title: 'High-Throughput Database Optimization',
        description: 'Optimized complex MongoDB schemas and query structures to slash database response times by 50%, significantly boosting real-time data retrieval rates for active factory floor users.',
        tags: ['MongoDB', 'Database Tuning', 'Data Modeling', 'Performance'],
      },
      {
        title: 'Enterprise QA & Observability Pipeline',
        description: 'Devised quality assurance frameworks for over 10 internal processes, achieving 80% code coverage with Jest while implementing real-time system monitoring and alerting via Winston and Datadog.',
        tags: ['DevOps', 'Datadog', 'Jest Testing', 'Observability'],
      }
    ],
    tech: ['TypeScript', 'Mongo DB', 'Winston', 'Datadog', 'Jest', 'AWS'],
  },

  'locumator': {
    id: 'locumator',
    company: 'Locumator',
    role: 'Backend Developer',
    period: 'Jan 2022 – July 2022',
    location: 'Remote',
    emoji: '⚙️',
    tagline: 'Foundation in Agile & Consumer API Delivery.',
    metrics: [],
    highlights: [
      {
        title: 'Consumer API Development & Technical Specs',
        description: 'Built and documented 50% of the core consumer Web APIs while translating client business requirements into functional technical specifications within an Agile framework.',
        tags: ['API Design', 'Technical Documentation', 'Agile/Scrum', 'Confluence'],
      }
    ],
    tech: ['JavaScript', 'Jira', 'Technical Documentation' ],
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
    company: 'DAG Nigeria',
    tagline: 'Automated staff identity management that replaced 2 manual operators and one shared spreadsheet.',
    mermaidChart: `flowchart TD
    A[HR Uploads Employee Excel File] --> B{Step 1: Automated File Validation}
    
    %% Validation Results
    B -->|File Error or Missing Columns| C[Instant Teams Alert to Uploader: Fix File]
    B -->|File Looks Good| D[Step 2: Sync with SharePoint & Active Rosters]
    
    %% New Hire & Offboarding Paths
    D --> E{Identify Changes}
    
    E -->|New Hires Found| F{Validate Employee Details}
    E -->|Employees Left| G[Process Offboarded Staff]
    
    %% Detail Validation
    F -->|Valid ID & Recognized Dept| H[Securely Add New Staff to SharePoint]
    F -->|Data Missing or Unknown Dept| I[Log Error for Review]
    
    %% Final Reporting
    H --> J[Step 3: Generate Summary Report]
    I --> J
    G --> J
    
    J --> K[Send Automated HTML Status Report to HR Uploader]`,
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

  'custom-ats': {
    id: 'custom-ats',
    title: 'Custom Enterprise ATS & Onboarding Engine',
    subtitle: 'End-to-end recruitment automation — from CV to signed offer',
    emoji: '🎯',
    status: 'Production',
    company: 'DAG Nigeria',
    tagline: 'Built a compliance-locked, edge-assisted ATS that replaced enterprise licensing with a system designed exactly around our operational constraints.',
    mermaidChart: `flowchart TD
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
    J --> K[Backend: Commit validated candidate to DB]`,
    problem:
      'Enterprise ATS platforms like Greenhouse or Ashby were cost-prohibitive. We needed an internal system tailored tightly to our cross-department approval workflows, CV parsing, and secure candidate onboarding — without paying enterprise premiums for features we would never use.',
    solution:
      'A three-pillar custom platform: edge-assisted resume parsing via Cloudflare Workers to offload token processing, a deterministic multi-department salary approval state machine to enforce compliance before any offer letter generates, and an isolated token-based candidate portal for secure document submission.',
    impact: [
      'Eliminated enterprise ATS licensing costs entirely',
      'Automated end-to-end pipeline from CV ingestion to signed offer letter',
      'Edge offloading protects core compute from memory spikes during bulk uploads',
      'State machine locks salary parameters at DB level — unauthorized offers are impossible',
      'Token-based candidate portal revoked automatically after onboarding completes',
    ],
    tech: ['TypeScript', 'Cloudflare Workers', 'PostgreSQL', 'Edge Computing', 'State Machine', 'UUID Tokens', 'File Storage'],
  },

  'geo-plate-flow': {
    id: 'geo-plate-flow',
    title: 'GeoPlateFlow',
    subtitle: 'Real-Time Food Delivery Simulator',
    emoji: '🍕',
    status: 'Shipped',
    company: 'Personal',
    tagline: 'A simulator that stress-tests food delivery pipelines under chaotic peak-hour conditions.',
    mermaidChart: `flowchart TD
    A[Inbound Order Stream] --> B[PostGIS Service Boundary Validation]
    B -->|Location Outside Polygon Zone| C[Drop Event / Prevent Pollution]
    B -->|Validated Location Coordinates| D[Kafka Batch Event Broker]
    D --> E{Are Drivers Available?}
    E -->|Yes / Space in Driver Pool| F[Driver Assignment Engine]
    E -->|No / All Drivers Active| G[Priority Queue Ranker]
    F -->|Holds stream until 5 urban orders batched| H[Fleet Departure Sync]
    G -->|Sort by VIP Customer Status & High Order Value| I[Dynamic Waiting Queue Bucket]
    I -->|Driver returns to base / Frees capacity| F
    `,
    problem:
      'Testing how a delivery pipeline handles thousands of concurrent orders, moving drivers, and impatient customers in the real world is expensive. There\'s no safe way to stress-test routing logic, geo-validation, and priority queuing without either burning money or breaking production.',
    solution:
      'An event-driven simulator built to mimic the operational chaos of a real food delivery platform. Orders are continuously generated, streamed, spatially validated, batched, and dispatched — with a priority queue that replaces naive FIFO logic with a Customer Lifetime Value ranking system.',
    keyDecisions: [
      {
        title: '🛰️ Real-Time Maps & PostGIS Boundary Checks',
        body: 'Orders stream in live through Apache Kafka. The second an order hits the pipeline, PostGIS checks its GPS coordinates against the restaurant’s delivery zone. If someone tries to order from outside the zone, the system instantly drops it so it doesn’t mess up the rest of the pipeline.',
      },
      {
        title: '🧠 Dynamic Priority Queueing & Dispatch Backpressure',
        body: 'Instead of a basic "first-come, first-served" line, I built a smart waiting queue. The millisecond a driver gets back to the restaurant, the system looks at the queue and prioritizes Customer Lifetime Value (VIP Tiers).',
      },
      {
        title: '🌪️ Airflow Orchestration & Docker Setup',
        body: 'Apache Airflow handles the background math—running batches to track driver trip times, calculate delivery speeds, and find busy delivery hotspots. To make it easy to run anywhere, I wrapped the whole cluster (Airflow, Kafka, and PostGIS) into Docker containers so it spins up with one command.',
      },
    ],
    impact: [
      'Kafka decoupling proved: thousands of order events held in place without crashing downstream consumers',
      'Driver batching kept delivery efficiency high but exposed a fairness trade-off — low-spend customers in quiet zones wait significantly longer',
      'VIP queue ranking surfaced the real tension between business optimization and equitable service delivery',
      'Full cluster (Airflow + Kafka + Postgres + PostGIS) spins up and down in Docker with zero manual setup',
    ],
    tech: ['Python', 'Apache Kafka', 'PostgreSQL', 'PostGIS', 'Apache Airflow', 'Docker'],
  },
   'marketing-to-sales-etl': {
    id: 'marketing-to-sales-etl',
    title: 'Marketing → Sales ETL Pipeline',
    subtitle: 'Connecting the top of the funnel to the bottom line',
    emoji: '📊',
    status: 'In Progress',
    company: 'DAG Nigeria',
    tagline: 'A pipeline that turns marketing activity data into sales intelligence.',
    diagram: `TBD`,
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
    audience: 'HR Team, DAG Nigeria',
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
    title: 'Excel & M365 Best Practices',
    description:
      'Guided teams on document sharing, cloud sync, and collaboration workflows — the bridge between spreadsheet culture and structured data systems.',
    audience: 'Operations teams',
    format: 'Workshop',
  },
];

export const interests = {
  currently_open_to:  ['Data Engineering opportunities', 'Consulting', 'Freelance'],
  location:           'Lagos, Nigeria',
  timezone:           'WAT (UTC+1)',
  hobbies:            ['Watching Formula 1', 'Exploring food spots', 'Weight lifting', 'Crohecting'],
  coffee_dependency:  true,
  fun_facts: [
    'Can play the violin',
    "I've saved companies money in both dollars and naira",
    "Started coding during my B.Sc and haven't stopped since",
  ],
  superpower:         'Turning business problems into data solutions before the meeting ends',
  currently_learning: 'Advanced data mesh architecture & dbt & Flute',
};
