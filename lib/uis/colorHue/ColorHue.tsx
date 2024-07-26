'use client';

import { Auth } from '@/auth/Auth';
import { useColorHues } from 'ankh-hooks';
import { useColorParser } from 'ankh-hooks';
import type { IAnkhUiColorHue, IAnkhUiColorHueItem } from 'ankh-types';

function ColorHueItem({ value, className = '' }: IAnkhUiColorHueItem) {

  return (
    <div
      className={className}
      style={{
        width: '50px',
        height: '50px',
        margin: '.2rem',
        border: '1px solid rgba(255,255,255,.2)',
        backgroundColor: value,
      }}
    />
  );
}

export function ColorHue({ color: value }: IAnkhUiColorHue) {
  const { genHues } = useColorHues();
  const { parseString } = useColorParser();
  const currentColor = parseString(value)!;
  const hueItems = genHues({ colorValue: currentColor.value })
    .map((hue, hueIndex) => ({
      value: hue,
      className: `primary-${hueIndex + 1}00`
    }));

  return (
    <Auth.ReadRole>
      <div
        data-ui="color-hue"
        style={{
          display: 'grid',
          width: '50vw',
          gridTemplateColumns: 'repeat(9, 1fr)',
        }}
      >
        {hueItems.map((hueItem, i) => (
          <ColorHueItem
            className={hueItem.className}
            key={`color-hue-item-${i}`}
            value={hueItem.value}
          />
        ))}
      </div>
    </Auth.ReadRole>
  );
}


