import { notFound } from 'next/navigation';
import HRDataApocalypse from '@/components/content/articles/HRDataApocalypse';

const articles: Record<string, React.ComponentType> = {
  'hr-data-apocalypse': HRDataApocalypse,
};

export function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Article  = articles[slug];
  if (!Article) notFound();
  return <Article />;
}
