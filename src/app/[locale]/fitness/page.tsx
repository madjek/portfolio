import Fitness from '@/components/fitness/Fitness';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('projects');

  return {
    title: t('fitness'),
    description: t('fitnessDescription'),
  };
}

export default function FitnessPage() {
  return <Fitness />;
}
