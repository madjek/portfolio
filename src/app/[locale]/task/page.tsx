import UnderConstruction from '@/components/UnderConstruction';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('homePage');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Task() {
  return <UnderConstruction />;
}
