"use client";
import { useState, type ReactNode } from 'react';
import { useIndexedDb } from 'ankh-hooks';
import { useActivePalette } from 'ankh-config';
import { Auth } from '@/auth/Auth';
import type { IAnkhCmsThemePalette, IAnkhColorHsl, IAnkhUiIntrinsicProps } from 'ankh-types';

export function AnkhUiAccordion({ _ui: { id }, items }: IAnkhUiAccordion) {
  const { db, api } = useIndexedDb<IAnkhUiAccordionConfig>({ dbName: 'ankh-cms', storeName: 'ui-config' });
  const stringifyHsl = ({ h, s, l }: IAnkhColorHsl) => `hsl(${h}, ${s}%, ${l}%)`;
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  if (!palette) return;

  const $ = {
    backgroundColor: stringifyHsl(palette.colors[2]!),
    color: stringifyHsl(palette.colors[3]!)
  };

  return (
    <Auth.ReadRole>
      <section data-ui="accordion">
        {items.map(({ summary, details }, itemIndex) => (
          <details style={{ backgroundColor: $.backgroundColor, marginBottom: '1px', padding: '.4rem', cursor: 'pointer' }} key={itemIndex}>
            <summary style={{ color: $.color }}>{summary}</summary>
            {details}
          </details>
        ))}
      </section>
    </Auth.ReadRole>
  );
}

interface IAnkhUiAccordionConfig {
  readonly id: IDBValidKey;
  readonly open?: number;
}

interface IAnkhUiAccordionItem {
  readonly summary: ReactNode;
  readonly details: ReactNode;
}

interface IAnkhUiAccordion extends IAnkhUiIntrinsicProps {
  readonly items: IAnkhUiAccordionItem[];
}
