"use client";
import { useState } from 'react';
import { useActivePalette } from 'ankh-config';
import { AnkhUiHeading } from '@/uis/heading/AnkhUiHeading';
import Image, { type ImageProps } from 'next/image';
import type { IAnkhCmsThemePalette, IAnkhColor } from 'ankh-types';
import { stringifyHsl } from '@/utils/color.util';

export function AnkhUiCard({
  color,
  text,
  image,
  title,
  width = 200,
}: IAnkhUiCard) {
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  if (!palette) return;

  const $ = {
    backgroundColor: stringifyHsl(palette.colors[2]!),
    color: stringifyHsl(palette.colors[3]!)
  };

  return (
    <div
      data-ui="card"
      style={{ padding: '.8rem', backgroundColor: $.backgroundColor, width: `${width}px` }}
    >
      <header>{title && <AnkhUiHeading _ui={{ id: 'in-card-id-43435' }} text={title} level="h4" />}</header>
      <div>
        {text && <p style={{ color: $.color }}>{text}</p>}
        {image && (
          <Image
            alt={image.alt}
            src={image.src}
            width={image.width}
            height={image.height}
          />
        )}
      </div>
    </div>
  );
}

interface IAnkhUiCard {
  color?: Pick<IAnkhColor, 'value'>;
  image?: ImageProps;
  text?: string;
  title?: string;
  width?: number;
}
