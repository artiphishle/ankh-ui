import Image from 'next/image';
import { Auth } from '@/auth/Auth';

export function AnkhUiIcon({ name }: IAnkhUiIcon) {
  const path = `/icons/${name.toLowerCase()}.svg`;

  return (
    <Auth.ReadRole>
      <Image src={path} alt={name} width={24} height={24} />
    </Auth.ReadRole>
  );
}

interface IAnkhUiIcon {
  name: string;
}