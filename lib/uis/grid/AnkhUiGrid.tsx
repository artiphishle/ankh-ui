"use client";
import { useState, type PropsWithChildren } from 'react';
import { Auth } from '@/auth/Auth';
import { AnkhUiButton } from '@/uis/button/AnkhUiButton';
import './grid.css';
import { useAnkhCmsConfig } from 'ankh-config';
import type { IAnkhUiIntrinsicProps, IAnkhCmsConfig } from 'ankh-types';

function updateUiConfigById(config: IAnkhCmsConfig, id: string) {
  config.pages.forEach((page) => {
    page.uis.forEach((ui) => {
      const props = ui.p as { [k: string]: unknown } & IAnkhUiIntrinsicProps;
      if (props._ui?.id === id) {
        console.log('found', props);
        return;
      };
    });
  })
}

export function GridCell({ children }: IAnkhUiGridCell) {
  return <div data-ui="grid-cell">{children}</div>;
}


export function AnkhUiGrid({ _ui, children, columns: initialColumns = 1 }: IAnkhUiGrid) {
  const [columns, setColumns] = useState(initialColumns);
  const config = useAnkhCmsConfig();

  updateUiConfigById(config, _ui.id);

  return (
    <Auth.ReadRole>
      <div style={{ display: 'flex', flexDirection: 'column', background: 'beige', padding: '1rem' }}>
        <Auth.WriteRole>
          <div>
            <AnkhUiButton onClick={() => setColumns((prev) => prev - 1)} icon='minus' label='' />{columns} Cols<AnkhUiButton onClick={() => setColumns((prev) => prev + 1)} icon='plus' label='' />
          </div>
        </Auth.WriteRole>
        <div data-ui="grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>{children}</div>
      </div>
    </Auth.ReadRole>
  );
}

interface IAnkhUiGridCell extends PropsWithChildren {
  id: string;
}
interface IAnkhUiGrid extends PropsWithChildren, IAnkhUiIntrinsicProps {
  columns?: number;
  styles?: Array<[string, string, string]>; // TStyle[]
}
