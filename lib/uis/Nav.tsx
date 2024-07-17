import Link from 'next/link';
import {useId} from 'react';

interface INavItem {
  text: string;
}

interface Props {
  items: INavItem[];
}

export function Nav({items}: Props) {
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
