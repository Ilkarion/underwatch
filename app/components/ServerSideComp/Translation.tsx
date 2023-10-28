
import { useTranslations } from 'next-intl';

export default function Translation() {
  const t = useTranslations('Index');
  return t;
}