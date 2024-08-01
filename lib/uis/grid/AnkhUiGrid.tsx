import { useState, type PropsWithChildren, type ReactNode } from 'react';
import { Auth } from '@/auth/Auth';
import './grid.css';
import { AnkhUiButton } from '../button/AnkhUiButton';

/*
Think about Context and how to ingest to UI's FIRST!!
1. Add 'id' for every UI in config
2. hook to update props 'p' param in config 
*/

export function GridCell({ children }: IAnkhUiGridCell) {
  return <div data-ui="grid-cell">{children}</div>;
}

export function AnkhUiGrid({ children, columns: initialColumns = 1 }: IAnkhUiGrid) {
  const [columns, setColumns] = useState(initialColumns);

  return (
    <Auth.ReadRole>
      <Auth.WriteRole>
        <span><AnkhUiButton onClick={() => setColumns((prev) => prev - 1)} icon='minus' label='' />{columns} Cols<AnkhUiButton onClick={() => setColumns((prev) => prev + 1)} icon='plus' label='' /></span>
      </Auth.WriteRole>
      <div data-ui="grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>{children}</div>
    </Auth.ReadRole>
  );
}

interface IAnkhUiGridCell extends PropsWithChildren {
  id: string;
}
interface IAnkhUiGrid extends PropsWithChildren {
  columns?: number;
  styles?: Array<[string, string, string]>; // TStyle[]
}
