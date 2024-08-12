"use client";
import { type MouseEvent, useState } from 'react';
import { useActivePalette } from 'ankh-config';
import { EAnkhUiVariant, type IAnkhCmsThemePalette, type IAnkhColorHsl } from 'ankh-types';
import { Auth } from '@/auth/Auth';
import { AnkhUiIcon } from '@/uis/icon/AnkhUiIcon';

export function AnkhUiButton({
  size = EAnkhUiSize.Md,
  icon,
  label,
  variant = EAnkhUiVariant.Default,
  onClick = () => { }
}: IAnkhUiButton) {
  /** @todo Extract this function to ankh-hooks */
  const stringifyHsl = ({ h, s, l }: IAnkhColorHsl) => `hsl(${h}, ${s}%, ${l}%)`;
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  if (!palette) return;

  const colors = palette.colors;
  const c = {
    primary: stringifyHsl(colors[0]!),
    secondary: stringifyHsl(colors[1]!),
    accent: stringifyHsl(colors[2]!),
    text: stringifyHsl(colors[3]!),
    base: stringifyHsl(colors[4]!),
    error: 'red',
    success: 'green',
    warning: 'orange'
  }

  const COLOR: { [k: string]: IButtonColor } = {
    [EAnkhUiVariant.Success]: { bg: c.success, text: c.base, border: c.accent },
    [EAnkhUiVariant.Warning]: { bg: c.warning, text: c.base, border: c.accent },
    [EAnkhUiVariant.Error]: { bg: c.error, text: c.base, border: c.accent },
    [EAnkhUiVariant.Info]: { bg: c.base, text: c.text, border: c.accent },
    [EAnkhUiVariant.Default]: { bg: c.base, text: c.text, border: c.accent },
    [EAnkhUiVariant.Primary]: { bg: c.primary, text: c.base, border: c.accent },
    [EAnkhUiVariant.Secondary]: { bg: c.secondary, text: c.base, border: c.accent },
  };

  const $ = {
    backgroundColor: COLOR[variant]!.bg,
    color: COLOR[variant]!.text,
    borderColor: COLOR[variant]!.border,
    borderWidth: '1px',
    display: 'flex',
    fontSize: `${size}rem`,
    padding: `${size as number / 2}rem ${size}rem`
  };

  return (
    <Auth.ReadRole>
      <button
        data-ui="button"
        style={$}
        type="button"
        onClick={(event: MouseEvent) => { event.preventDefault(); onClick(event) }}
      >
        {icon && <AnkhUiIcon name={icon} />}
        {label && label}
      </button>
    </Auth.ReadRole>
  );
}

export interface IAnkhUiButton {
  label: string;
  backgroundColor?: string;
  icon?: string;
  size?: EAnkhUiSize | string;
  style?: any;
  variant?: EAnkhUiVariant;
  onClick?: (event: MouseEvent) => void;
}

enum EAnkhUiSize {
  Xs = .4,
  Sm = .8,
  Md = 1.2,
  Lg = 1.6,
  Xl = 2.4
}

interface IButtonColor { bg: string, text: string, border: string }