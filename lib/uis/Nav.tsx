"use client";

import Link from 'next/link';
import {useId} from 'react';

interface INavItem {
  text: string;
}
interface INav {
  items: INavItem[];
}

export function Nav({items}: INav) {
  const navId = useId();

  return (
    <nav>
      {items.map(({text}, itemIndex) => (
        <Link key={`nav-${navId}-${itemIndex}`} href="#">
          {text}
        </Link>
      ))}
    </nav>
  );
}
