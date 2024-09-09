"use client";
import { useState } from 'react';
import { useActivePalette } from 'ankh-config';
import { Auth } from '@/auth/Auth';
import { EAnkhUiVariant, type IAnkhAuthRole, type IAnkhCmsThemePalette } from 'ankh-types';
import { AnkhUiIcon } from '@/uis/icon/AnkhUiIcon';
import { stringifyHsl } from '@/utils/color.util';

export function AnkhUiTag({ variant = EAnkhUiVariant.Default, label }: IAnkhUiTag) {
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  if (!palette) return;

  const $e = {
    tag: {
      e: function () {
        console.log("AnkhUi: 'Tag Edit' event triggered.");
      },
      x: function () {
        console.log("AnkhUi: 'Tag Delete' event triggered.");
      },
    },
  };

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

  const COLOR: { [k: string]: ITagColor } = {
    [EAnkhUiVariant.Success]: { bg: c.success, text: c.base, border: c.accent },
    [EAnkhUiVariant.Warning]: { bg: c.warning, text: c.base, border: c.accent },
    [EAnkhUiVariant.Error]: { bg: c.error, text: c.base, border: c.accent },
    [EAnkhUiVariant.Info]: { bg: c.base, text: c.text, border: c.accent },
    [EAnkhUiVariant.Default]: { bg: c.base, text: c.text, border: c.accent },
    [EAnkhUiVariant.Primary]: { bg: c.primary, text: c.base, border: c.accent },
    [EAnkhUiVariant.Secondary]: { bg: c.secondary, text: c.base, border: c.accent },
    [EAnkhUiVariant.Accent]: { bg: c.accent, text: c.text, border: c.base },
  };

  const $ = {
    backgroundColor: COLOR[variant]!.bg,
    color: COLOR[variant]!.text,
    borderColor: COLOR[variant]!.border,
    borderWidth: '1px',
    borderRadius: '5px',
    alignItems: 'center',
    display: 'flex',
    padding: '1rem',
    width: 'fit-content'
  };


  return (
    <Auth.ReadRole>
      <span data-ui="tag" style={$}>
        <span>{`#${label}`}</span>

        <Auth.WriteRole>
          <a title="Edit" href="#" onClick={$e.tag.e}>
            <AnkhUiIcon name="pencil" />
          </a>
          <a title="Delete" href="#" onClick={$e.tag.x}>
            <AnkhUiIcon name="x" />
          </a>
        </Auth.WriteRole>
      </span>
    </Auth.ReadRole>
  );
}

interface ITagColor { bg: string, text: string, border: string }
interface IAnkhUiTag extends IAnkhAuthRole {
  label: string;
  variant?: EAnkhUiVariant;
}
