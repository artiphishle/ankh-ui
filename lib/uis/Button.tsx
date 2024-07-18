"use client";

import {MouseEvent} from 'react';

interface IButton {
  children: string;
  primary?: boolean;
  onClick?: (event: MouseEvent) => void;
}
const noop = () => {};

export function Button({children, primary, onClick = noop}: IButton) {
  return (
    <button className={`${primary ? "bg-primary" : ""} p-2 bg-gray-400`} onClick={onClick}>
      {children}
    </button>
  );
}
