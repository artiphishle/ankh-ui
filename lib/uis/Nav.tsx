"use client";
import Link from 'next/link';

export function Nav({items}: INav) {
  return (
    <nav>
      {items.map(({text}, itemIndex) => (
        <Link key={`nav-${itemIndex}`} href="#">
          {text}
        </Link>
      ))}
    </nav>
  );
}

interface INavItem {
  text: string;
}
interface INav {
  items: INavItem[];
}