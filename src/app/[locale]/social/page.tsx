import UnderConstruction from '@/components/UnderConstruction';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('projects');

  return {
    title: t('social'),
    description: t('socialDescription'),
  };
}

export default function Social() {
  return <UnderConstruction />;
}
