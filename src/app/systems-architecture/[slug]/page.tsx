import { notFound } from 'next/navigation';
import { projects } from '@/data/content';
import ProjectContent from '@/components/content/ProjectContent';

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
  return <ProjectContent project={project} />;
}
