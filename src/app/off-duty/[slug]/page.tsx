import { notFound } from 'next/navigation';
import WorkshopsContent from '@/components/content/WorkshopsContent';
import InterestsContent from '@/components/content/InterestsContent';

const validSlugs = ['workshops-training', 'interests'] as const;

export function generateStaticParams() {
  return validSlugs.map(slug => ({ slug }));
}

export default async function OffDutyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === 'workshops-training') return <WorkshopsContent />;
  if (slug === 'interests')          return <InterestsContent />;
  notFound();
}
