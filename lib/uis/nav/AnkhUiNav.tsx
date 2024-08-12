'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useActivePalette } from 'ankh-config';
import { Auth } from '@/auth/Auth';
import { AnkhUiIcon } from '@/uis/icon/AnkhUiIcon';
import type { IAnkhCmsThemePalette, IAnkhColorHsl, IAnkhUiIntrinsicProps } from 'ankh-types';

export function AnkhUiNav({ items }: IAnkhUiNav) {
  const stringifyHsl = ({ h, s, l }: IAnkhColorHsl) => `hsl(${h}, ${s}%, ${l}%)`;
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  if (!palette) return;

  const $ = {
    color: stringifyHsl(palette.colors[3]!)
  };

  return (
    <Auth.ReadRole>
      <nav data-ui="nav">
        {items.map(({ name, icon }, i) => (
          <Link key={`nav-${i}`} href={`/${name}`}>
            <span style={{ color: $.color }}>
              {icon && <AnkhUiIcon name={icon} />}
              {name}
            </span>
          </Link>
        ))}
      </nav>
    </Auth.ReadRole>
  );
}

interface IAnkhUiNavItem {
  readonly name: string;
  readonly icon?: any;
}

interface IAnkhUiNav extends IAnkhUiIntrinsicProps {
  readonly items: IAnkhUiNavItem[];
}
