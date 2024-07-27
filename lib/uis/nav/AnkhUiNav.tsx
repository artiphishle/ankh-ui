'use client';
import Link from 'next/link';
import {Auth} from '@/auth/Auth';
import {AnkhUiIcon} from '@/uis/icon/AnkhUiIcon';

export function AnkhUiNav({items}: IAnkhUiNav) {
  return (
    <Auth.ReadRole>
      <nav data-ui="nav">
        {items.map(({name, icon}, i) => (
          <Link key={`nav-${i}`} href={`/${name}`}>
            <span>
              {icon && <AnkhUiIcon name={icon} />}
              {name}
            </span>
          </Link>
        ))}
      </nav>
    </Auth.ReadRole>
  );
}

interface IAnkhUiNavItem {
  readonly name: string;
  readonly icon?: any;
}

interface IAnkhUiNav {
  items: IAnkhUiNavItem[];
}
