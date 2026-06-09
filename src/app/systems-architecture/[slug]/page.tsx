import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { notFound } from 'next/navigation';
import { projects } from '@/data/content';
import ProjectContent from '@/components/content/ProjectContent';
import { COLORS } from '@/theme';

export function generateStaticParams() {
  return Object.keys(projects).map(slug => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      <Box sx={{ px: { xs: 2.5, sm: 5 }, pt: 2.5 }}>
        <Link href="/projects" style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 12,
              color: COLORS.textMuted,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              '&:hover': { color: COLORS.pink },
              transition: 'color 0.15s',
            }}
          >
            ← Projects
          </Typography>
        </Link>
      </Box>
      <ProjectContent project={project} />
    </>
  );
}
