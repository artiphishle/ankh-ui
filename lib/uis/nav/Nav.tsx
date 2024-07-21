"use client";
import Link from 'next/link';
import { Auth } from '@/auth/Auth';

export function Nav({ }: IAnkhUiNav) {
  /** @todo Get pages from server */
  const pageNames = ["home", "about"];

  return (
    <Auth.ReadRole>
      <nav data-ui="nav">
        {pageNames.map((pageName, i) => (
          <Link key={`nav-${i}`} href={`/${pageName}`}>
            {pageName}
          </Link>
        ))}
      </nav>
    </Auth.ReadRole>
  );
}

interface IAnkhUiNav { }