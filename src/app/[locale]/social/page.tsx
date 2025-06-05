import Social from '@/components/social/Social';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('projects');

  return {
    title: t('social'),
    description: t('socialDescription'),
  };
}

export default function SocialPage() {
  return <Social />;
}
