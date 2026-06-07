import { notFound } from 'next/navigation';
import { experiences } from '@/data/content';
import ExperienceContent from '@/components/content/ExperienceContent';

export function generateStaticParams() {
  return Object.keys(experiences).map(slug => ({ slug }));
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = experiences[slug];
  console.log(`the exp is => ${exp}`)
  if (!exp) notFound();
  return <ExperienceContent exp={exp} />;
}
