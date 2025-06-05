import Education from '@/components/education/Education';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('projects');

  return {
    title: t('education'),
    description: t('educationDescription'),
  };
}

export default function EducationPage() {
  return <Education />;
}
