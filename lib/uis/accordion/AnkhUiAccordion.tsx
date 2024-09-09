"use client";
import { useState, type ReactNode } from 'react';
import { useIndexedDb } from 'ankh-hooks';
import { useActivePalette } from 'ankh-config';
import { Auth } from '@/auth/Auth';
import type { IAnkhCmsThemePalette, IAnkhUiIntrinsicProps } from 'ankh-types';
import { stringifyHsl } from "@/utils/color.util";

export function AnkhUiAccordion({ _ui: { id }, items }: IAnkhUiAccordion) {
  const { db, api } = useIndexedDb<IAnkhUiAccordionConfig>({ dbName: 'ankh-cms', storeName: 'ui-config' });
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
          <details className="cursor-pointer mb-[1px] p-[.4rem]" style={{ backgroundColor: $.backgroundColor }} key={itemIndex}>
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
