import {Auth} from '@/auth/Auth';
import './accordion.css';

import {type PropsWithChildren, type ReactNode} from 'react';

export function Accordion({items}: IAnkhUiAccordion) {
  return (
    <Auth.ReadRole>
      <section data-ui="accordion">
        {items.map(({summary, details}, itemIndex) => (
          <details key={itemIndex}>
            <summary>{summary}</summary>
            {details}
          </details>
        ))}
      </section>
    </Auth.ReadRole>
  );
}

interface IAnkhUiAccordionItem {
  summary: ReactNode;
  details: ReactNode;
}

interface IAnkhUiAccordion extends PropsWithChildren {
  items: IAnkhUiAccordionItem[];
}
