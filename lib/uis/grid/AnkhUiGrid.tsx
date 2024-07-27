import {PropsWithChildren, ReactNode} from 'react';
import {Auth} from '@/auth/Auth';
import './grid.css';

export function GridCell({id, children}: IAnkhUiGridCell) {
  return <div data-ui="grid-cell">{children}</div>;
}

export function AnkhUiGrid({children}: IAnkhUiGrid) {
  return (
    <Auth.ReadRole>
      <div data-ui="grid">{children}</div>
    </Auth.ReadRole>
  );
}

interface IAnkhUiGridCell extends PropsWithChildren {
  id: string;
}

interface IAnkhUiGrid extends PropsWithChildren {
  children: ReactNode[];
  styles?: Array<[string, string, string]>; // TStyle[]
}
