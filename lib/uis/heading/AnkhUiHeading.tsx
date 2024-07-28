import { Auth } from '@/auth/Auth';
import { type PropsWithChildren } from 'react';

export function AnkhUiHeading({ text, level }: IHeading) {
  const H = level;

  return (
    <Auth.ReadRole>
      <H data-ui="heading">{text}</H>
    </Auth.ReadRole>
  );
}

interface IHeading extends PropsWithChildren {
  level: keyof JSX.IntrinsicElements;
  text: string;
}
