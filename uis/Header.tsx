'use client';

import React, {createRef} from 'react';
import {useDnd} from '../hooks/useDnd';

export function Header() {
  const ref = createRef<HTMLElement>();
  const {onDrag, onDragEnter, onDragEnd, onDragOver, onDragStart, onDrop} =
    useDnd();

  return (
    <header
      ref={ref}
      draggable={true}
      onDrag={onDrag}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDrop={onDrop}
      className="bg-black text-white p-8"
    >
      Hello World!
    </header>
  );
}
