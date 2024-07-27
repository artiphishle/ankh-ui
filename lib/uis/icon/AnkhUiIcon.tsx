import {Auth} from '@/auth/Auth';
import {icons, type LucideProps} from 'lucide-react';

export function AnkhUiIcon({name, color, size}: LucideProps) {
  if (!name) return null;
  const LucideIcon = icons[name as keyof typeof icons];

  return (
    <Auth.ReadRole>
      <LucideIcon color={color} size={size} />
    </Auth.ReadRole>
  );
}
