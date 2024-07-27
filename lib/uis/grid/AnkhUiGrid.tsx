import { type PropsWithChildren, type ReactNode } from 'react';
import { Auth } from '@/auth/Auth';
import './grid.css';

export function GridCell({ children }: IAnkhUiGridCell) {
  return <div data-ui="grid-cell">{children}</div>;
}

export function AnkhUiGrid({ children, columns = 1 }: IAnkhUiGrid) {
  return (
    <Auth.ReadRole>
      <div data-ui="grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>{children}</div>
    </Auth.ReadRole>
  );
}

interface IAnkhUiGridCell extends PropsWithChildren {
  id: string;
}
interface IAnkhUiGrid extends PropsWithChildren {
  children: ReactNode[];
  columns?: number;
  styles?: Array<[string, string, string]>; // TStyle[]
}
