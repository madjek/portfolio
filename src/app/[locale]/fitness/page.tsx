import UnderConstruction from '@/components/UnderConstruction';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('projects');

  return {
    title: t('fitness'),
    description: t('fitnessDescription'),
  };
}

export default function Fitness() {
  return <UnderConstruction />;
}
