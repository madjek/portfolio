import Ecommerce from '@/components/ecommerce/Ecommerce';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('projects');

  return {
    title: t('ecommerce'),
    description: t('ecommerceDescription'),
  };
}

export default function EcommercePage() {
  return <Ecommerce />;
}
