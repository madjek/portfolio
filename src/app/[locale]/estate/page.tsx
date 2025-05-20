import UnderConstruction from '@/components/UnderConstruction';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('projects');

  return {
    title: t('estate'),
    description: t('estateDescription'),
  };
}

export default function Estate() {
  return <UnderConstruction />;
}
