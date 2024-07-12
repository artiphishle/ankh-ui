'use client';

import React, {createRef} from 'react';
import {useDnd} from '../hooks/useDnd';

export function Footer() {
  const ref = createRef<HTMLElement>();

  const {onDrag, onDragEnter, onDragEnd, onDragOver, onDragStart, onDrop} =
    useDnd();

  return (
    <footer
      ref={ref}
      draggable={true}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDrop={onDrop}
      className="p-8"
    >
      &copy; 2024 artiphishle/ankh-portals
    </footer>
  );
}
