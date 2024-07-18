import {type PropsWithChildren, type ReactNode} from 'react';

export function Accordion({items}: IUiAccordion) {
  return (
    <section data-ui="accordion">
      {items.map(({summary, details}, itemIndex) => (
        <details key={itemIndex}>
          <summary>{summary}</summary>
          {details}
        </details>
      ))}
    </section>
  );
}

interface IUiAccordionItem {
  summary: ReactNode;
  details: ReactNode;
}

interface IUiAccordion extends PropsWithChildren {
  items: IUiAccordionItem[];
}
