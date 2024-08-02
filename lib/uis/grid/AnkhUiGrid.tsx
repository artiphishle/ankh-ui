"use client";
import { useEffect, useState, type PropsWithChildren } from 'react';
import { Auth } from '@/auth/Auth';
import { AnkhUiButton } from '@/uis/button/AnkhUiButton';
import { useIndexedDb } from "ankh-hooks";
import type { IAnkhUiIntrinsicProps, TStyle } from 'ankh-types';
import './grid.css';

export function GridCell({ children }: IAnkhUiGridCell) {
  return <div data-ui="grid-cell">{children}</div>;
}

export function AnkhUiGrid(props: IAnkhUiGrid) {
  const { _ui: { id }, columns: initialColumns = 1, styles = [] } = props;
  const { api } = useIndexedDb<IAnkhUiGridConfig>({ dbName: 'ankh-cms', storeName: 'ui-config' });
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    if (!api?.read) return;

    const loadConfig = async () => {
      const storedConfig = await api.read(id) as IAnkhUiGridConfig;
      storedConfig ? setColumns(storedConfig.columns) : await api.create({ columns, styles }, id);
    };
    loadConfig();
  }, [api?.read])

  const handleColumnChange = (newColumns: number) => {
    setColumns(newColumns);
    api?.update({ styles, columns: newColumns }, id)
  };

  return (
    <Auth.ReadRole>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', background: 'rgba(0,0,0,.3', padding: '1rem' }}>
          <Auth.WriteRole>
            <AnkhUiButton onClick={() => handleColumnChange(columns - 1)} icon='minus' label='' />
            <span>{columns} Cols</span>
            <AnkhUiButton onClick={() => handleColumnChange(columns + 1)} icon='plus' label='' />
          </Auth.WriteRole>
        </div>
        <div data-ui="grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>{props.children}</div>
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

interface IAnkhUiGridConfig { columns: number; styles: TStyle[] }