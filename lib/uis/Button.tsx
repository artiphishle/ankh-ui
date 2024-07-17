"use client";

import {MouseEvent} from 'react';

interface IButton {
  children: string;
  onClick?: (event: MouseEvent) => void;
}
const noop = () => {};

export function Button({children, onClick = noop}: IButton) {
  return (
    <button className="p-2 bg-gray-400" onClick={onClick}>
      {children}
    </button>
  );
}
