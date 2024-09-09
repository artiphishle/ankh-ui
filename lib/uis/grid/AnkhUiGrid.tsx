"use client";
import { useEffect, useState, type PropsWithChildren } from 'react';
import { useActivePalette } from 'ankh-config';
import { useIndexedDb } from "ankh-hooks";
import { Auth } from '@/auth/Auth';
import { AnkhUiButton } from '@/uis/button/AnkhUiButton';
import { EAnkhUiSize, type IAnkhCmsThemePalette, type IAnkhUiIntrinsicProps, type TStyle } from 'ankh-types';
import { stringifyHsl } from '@/utils/color.util';

export function GridCell({ children }: IAnkhUiGridCell) {
  return <div data-ui="grid-cell">{children}</div>;
}

export function AnkhUiGrid(props: IAnkhUiGrid) {
  const { _ui: { id }, columns: initialColumns = 1, styles = [] } = props;
  const { db, api } = useIndexedDb<IAnkhUiGridConfig>({ dbName: 'ankh-cms', storeName: 'ui-config' });
  const [columns, setColumns] = useState<number>(initialColumns);

  useEffect(() => {
    if (!db) return;

    const loadConfig = async () => {
      const defaultConfig = { id, styles, columns: initialColumns };

      const storedConfig = await api.get(id);
      if (!storedConfig) await api.add(defaultConfig);

      const config = storedConfig || defaultConfig;
      setColumns(config.columns);
    };
    loadConfig();
  }, [db]);

  useEffect(() => {
    if (columns === null) return;
    columns >= 1 && setColumns(columns >= 1 ? columns : initialColumns);
  }, [columns]);

  const handleColumnChange = (newColumns: number) => {
    api.put({ id, styles, columns: newColumns });
    setColumns(newColumns);
  };

  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  if (!palette || columns === null) return;

  const $ = {
    display: 'grid',
    gap: '.8rem',
    width: '100%',
    backgroundColor: stringifyHsl(palette.colors[2]!)
  };

  return (
    <Auth.ReadRole>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', color: '#fff', gap: '.8rem', backgroundColor: "#000", padding: '1rem', alignItems: 'center' }}>
          <Auth.WriteRole>
            <AnkhUiButton size={EAnkhUiSize.Xs} onClick={() => handleColumnChange(columns - 1)} icon='minus' label='' />
            {<span>{columns} Cols</span>}
            <AnkhUiButton size={EAnkhUiSize.Xs} onClick={() => handleColumnChange(columns + 1)} icon='plus' label='' />
          </Auth.WriteRole>
        </div>
        <div data-ui="grid" style={{ ...$, gridTemplateColumns: `repeat(${columns}, 1fr)` }}>{props.children}</div>
      </div>
    </Auth.ReadRole>
  );
}

interface IAnkhUiGridCell extends PropsWithChildren {
  id: number;
}
interface IAnkhUiGrid extends PropsWithChildren, IAnkhUiIntrinsicProps {
  columns?: number;
  styles?: TStyle[]
}

interface IAnkhUiGridConfig { id: number | string; columns: number; styles: TStyle[] }