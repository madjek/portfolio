import Task from '@/components/task/Task';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('projects');

  return {
    title: t('task'),
    description: t('taskDescription'),
  };
}

export default function TaskPage() {
  return <Task />;
}
