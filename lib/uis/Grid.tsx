'use client';

import React from 'react';

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
export function Grid({id, targets}: IUiGrid) {
  return (
    <div data-comp="grid">
      {targets.map(({id, targets}, tIndex) => (
        <div data-id={id} key={`grid-t-${tIndex}`} draggable={true}>
          {targets?.map(({id: subId}, stIndex) => (
            <div data-id={subId} key={`grid-st-${stIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

interface IUiTarget {
  id: string;
  styles?: Array<[string, string, string]>; // TStyle[]
  targets?: Omit<IUiTarget, 'targets'>[];
}

interface IUiGrid {
  id: string;
  styles?: Array<[string, string, string]>; // TStyle[]
  targets: IUiTarget[];
}
