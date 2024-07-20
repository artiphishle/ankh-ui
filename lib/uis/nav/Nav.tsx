"use client";
import Link from 'next/link';
import { Auth } from '@/auth/Auth';

export function Nav({items}: IAnkhUiNav) {
  return (
    <Auth.ReadRole>
      <nav data-ui="nav">
        {items.map(({text}, itemIndex) => (
          <Link key={`nav-${itemIndex}`} href="#">
            {text}
          </Link>
        ))}
      </nav>
    </Auth.ReadRole>
  );
}

interface IAnkhUiNavItem {
  text: string;
}

interface IAnkhUiNav {
  items: IAnkhUiNavItem[];
}