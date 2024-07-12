import {type PropsWithChildren, type ReactNode} from 'react';

export function Accordion({items}: IAccordion) {
  return (
    <section data-comp="accordion">
      {items.map(({summary, details}, itemIndex) => (
        <details key={itemIndex}>
          <summary>{summary}</summary>
          {details}
        </details>
      ))}
    </section>
  );
}

interface IAccordionItem {
  summary: ReactNode;
  details: ReactNode;
}

interface IAccordion extends PropsWithChildren {
  items: IAccordionItem[];
}
