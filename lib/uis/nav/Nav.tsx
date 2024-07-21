"use client";
import Link from 'next/link';
import { Auth } from '@/auth/Auth';

export function Nav({ items }: IAnkhUiNav) {
  return (
    <Auth.ReadRole>
      <nav data-ui="nav">
        {items.map((name, i) => (
          <Link key={`nav-${i}`} href={`/${name}`}>
            {name}
          </Link>
        ))}
      </nav>
    </Auth.ReadRole>
  );
}

interface IAnkhUiNav {
  items: string[]
}