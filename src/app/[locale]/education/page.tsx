import UnderConstruction from '@/components/UnderConstruction';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('projects');

  return {
    title: t('education'),
    description: t('educationDescription'),
  };
}

export default function Education() {
  return <UnderConstruction />;
}
