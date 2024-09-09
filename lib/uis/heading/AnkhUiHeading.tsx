"use client";
import { useState, type PropsWithChildren } from 'react';
import { useActivePalette } from 'ankh-config';
import { Auth } from '@/auth/Auth';
import type { IAnkhCmsThemePalette, IAnkhUiIntrinsicProps } from 'ankh-types';
import { stringifyHsl } from '@/uis/utils/color.util';

export function AnkhUiHeading({ text, level, style = {} }: IHeading) {
  const H = level;
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  if (!palette) return;

  const $ = {
    color: stringifyHsl(palette.colors[3]!)
  };

  return (
    <Auth.ReadRole>
      <H data-ui="heading" style={$}>{text}</H>
    </Auth.ReadRole>
  );
}

interface IHeading extends PropsWithChildren, IAnkhUiIntrinsicProps {
  level: keyof JSX.IntrinsicElements;
  text: string;
  style?: any;
}
