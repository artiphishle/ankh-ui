'use client';

/**
 * @todo
 * 1. Create meta Repo
 * 2. Use Gulp or similar to unify app generation
 * 3. Eliminate Config duplicate
 * 4. Start using targets in page config
 *    --> e.g. gridArea:
 *                "h h h h h h h h h h h h" // header
 *                "n n n m m m m m m m a a" // nav main aside
 *                "f f f f f f f f f f f f" // footer
 */

import {useState, type PropsWithChildren} from 'react';
import {useLocalStorage} from 'react-use';
import {useHotkeys} from 'react-hotkeys-hook';
import {Panel, PanelGroup, PanelHandle} from '@/components/PanelGroup';
import {Accordion} from '@/components/Accordion';

interface IComponent {
  name: string;
  target: string; // TODO portal string, not any string
}
interface IPage {
  name: string;
  components: IComponent[];
}
type THtmlElement = string;
type TCssProperty = string;
type TCssValue = string | number;
type TStyle = [THtmlElement, TCssProperty, TCssValue];
export interface IAnkhPortalsConfig {
  styles: TStyle[];
  pages: IPage[];
}
const config: IAnkhPortalsConfig = {
  styles: [
    // Html
    ['html', 'margin', '0'],
    ['html', 'padding', '0'],
    ['html', 'font-family', 'Arial, sans-serif'],
    ['html', 'color', '#fff'],
    ['html', 'font-size', '14px'],

    // Body
    ['body', 'margin', '0'],
    ['body', 'padding', '0'],
    ['body', 'display', 'flex'],
    ['body', 'height', '100%'],
    ['body', 'margin', '0'],
    ['body', 'padding', '0'],
    ['body', 'background-color', '#efefef'],

    // Headings
    ['h1', 'font-weight', '800'],
    ['h1', 'font-size', '36px'],

    ['h2', 'font-weight', '800'],
    ['h2', 'font-size', '28px'],

    ['h3', 'font-weight', '600'],
    ['h3', 'font-size', '18px'],

    ['h4', 'font-weight', '600'],
    ['h4', 'font-size', '16px'],

    // Accordion
    ["[data-comp='accordion'] ::marker", 'display', 'none'],
    ["[data-comp='accordion'] ::marker", 'content', "''"],
    ["[data-comp='accordion'] summary", 'padding', '.4rem 1rem'],

    ["[data-comp='accordion'] > details", 'margin-bottom', '4px'],

    ["[data-comp='accordion'] > details li", 'background-color', '#2151a8'],
    ["[data-comp='accordion'] > details li", 'margin-bottom', '2px'],
    ["[data-comp='accordion'] > details li", 'padding', '.4rem 1rem'],

    // AnkhCms
    [
      "[data-comp='ankh-cms']",
      'background',
      'linear-gradient(22deg, #000, #333)',
    ],
    ["[data-comp='ankh-cms']", 'height', '100%'],

    // Grid
    ["[data-comp='grid']", 'display', 'grid'],
    ["[data-comp='grid']", 'gap', '1rem'],
    ["[data-comp='grid']", 'background-color', '#fff'],
    ["[data-comp='grid'] > div", 'background-color', 'rgba(0,0,0,.1)'],

    ["[data-comp='grid'] > div", 'font-size', '24px'],
    ["[data-comp='grid'] > div", 'text-align', 'center'],
    ["[data-comp='grid'] > div", 'align-content', 'center'],

    // Panel
    ["[data-comp='panel-handle'] ", 'background', '#000'],
    ["[data-comp='panel-handle'] ", 'width', '2px'],
    ["[data-comp='panel-handle'] ", 'cursor', 'resize'],

    // Table
    ["[data-comp='table']", 'width', '100%'],
    ["[data-comp='table']", 'table-layout', 'auto'],
  ],
  pages: [
    {
      name: 'home',
      components: [{name: 'Grid'}],
    },
    {
      name: 'about',
      components: [{name: 'Pagination'}],
    },
  ],
} as IAnkhPortalsConfig;

export function AnkhCms({children}: PropsWithChildren) {
  const [isAdmin, setIsAdmin] = useState(false);

  const styles = {
    html: config.styles.filter(([tagName]) => tagName === 'html'),
    body: config.styles.filter(([tagName]) => tagName === 'body'),
    headings: config.styles.filter(([tagName]) =>
      ['h1', 'h2', 'h3', 'h4'].includes(tagName)
    ),
  };

  const cmsItems = [
    {
      details: (
        <ul>
          {styles.html.map((s, i) => (
            <li key={i}>{`${s[1]}: ${s[2]}`}</li>
          ))}
        </ul>
      ),
      summary: <h4>html</h4>,
    },
    {
      details: (
        <ul>
          {styles.body.map((s, i) => (
            <li key={i}>{`${s[1]}: ${s[2]}`}</li>
          ))}
        </ul>
      ),
      summary: <h4>body</h4>,
    },
    {
      details: (
        <ul>
          {styles.headings.map((s, i) => (
            <li key={i}>{`${s[1]}: ${s[2]}`}</li>
          ))}
        </ul>
      ),
      summary: <h4>Headings</h4>,
    },
  ];
  const [conf, setConf, remove] = useLocalStorage('ankh-cms-config', config);

  useHotkeys('$', () => setIsAdmin((x) => !x));

  if (!isAdmin) return <div>{children}</div>;

  return (
    <PanelGroup>
      <Panel>
        <div data-comp="ankh-cms">
          <div className="p-1 bg-[#333]">
            <h4 className="bg-white text-black">I&apos;m a free_styler.</h4>
          </div>
          <Accordion items={cmsItems} />
        </div>
      </Panel>
      <PanelHandle />
      <Panel>{children}</Panel>
    </PanelGroup>
  );
}
