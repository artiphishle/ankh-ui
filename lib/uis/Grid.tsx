'use client';

import { PropsWithChildren, ReactNode } from "react";

/**
 * <main data-target-id='m'>
 *   <div data-comp='grid' style='display:grid'>
 *     <div data-target-id='zero'/>
 *     <div data-target-id='one'/>
 *     <div data-target-id='two'/>
 *     <div data-target-id='three'/>
 *   </div>
 * </main>
 *
const gridConfig = {
  id: 'my-grid',
  styles: [],
  targetIds: ["zero", "one", "two", "three"],
  target: "m" // will be in 'main'
}
 */
export function Grid({children}: IUiGrid) {
  return (
    <div data-comp="grid">{children}</div>
  );
}

interface IUiTarget {
  styles?: Array<[string, string, string]>; // TStyle[]
  targets?: Omit<IUiTarget, 'targets'>[];
}

interface IUiGrid extends PropsWithChildren{
  children?: ReactNode[];
  styles?: Array<[string, string, string]>; // TStyle[]
}
