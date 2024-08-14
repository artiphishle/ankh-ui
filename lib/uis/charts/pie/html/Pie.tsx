"use client";
import { useState } from 'react';
import { useActivePalette } from 'ankh-config';
import type { IAnkhCmsThemePalette, IAnkhColorHsl } from 'ankh-types';
import './pie.css';

export function Pie({ percentage }: IAnkhUiChartPie) {
  const stringifyHsl = ({ h, s, l }: IAnkhColorHsl) => `hsl(${h}, ${s}%, ${l}%)`;
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  if (!palette) return;

  const $ = {
    backgroundColor: stringifyHsl(palette.colors[2]!),
  };

  return (
    <div
      style={{ backgroundColor: $.backgroundColor, animationDelay: `-${percentage}s` }}
      className="pie"
    >{`${percentage}%`}</div>
  );
}

interface IAnkhUiChartPie {
  percentage: number;
}
