import { PropsWithChildren, ReactNode } from "react";

export function GridCell({children}: PropsWithChildren){
  return <div data-ui='grid-cell'>{children}</div>
}

export function Grid({children}: IUiGrid) {
  return (
    <div data-ui="grid">{children.map((child)=>
      <GridCell>{child}</GridCell>)}
    </div>
  );
}

interface IUiGrid extends PropsWithChildren{
  children: ReactNode[];
  styles?: Array<[string, string, string]>; // TStyle[]
}
