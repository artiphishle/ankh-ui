"use client";
import Link from 'next/link';
import { Auth } from '@/auth/Auth';
import { Icon } from "@/uis/icon/Icon";

export function Nav({ items }: IAnkhUiNav) {
  return (
    <Auth.ReadRole>
      <nav data-ui="nav">
        {items.map(({ name, icon }, i) => (
          <Link key={`nav-${i}`} href={`/${name}`}>
            <span>
              {icon && <Icon name={icon} />}{name}
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