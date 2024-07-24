'use client';

import { Auth } from '@/auth/Auth';
import { IAnkhUiColorHue, IAnkhUiColorHueItem } from '@/hooks/color/types';
import { useColorParser } from '@/hooks/color/useColorParser';

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
  const { parseString } = useColorParser();
  const currentColor = parseString(value)!;
  const hueItems: IAnkhUiColorHueItem[] = [
    { value: 'none', className: 'primary-100' },
    { value: 'none', className: 'primary-200' },
    { value: 'none', className: 'primary-300' },
    { value: 'none', className: 'primary-400' },
    { value: currentColor?.value || 'none', className: 'primary-500' },
    { value: 'none', className: 'primary-600' },
    { value: 'none', className: 'primary-700' },
    { value: 'none', className: 'primary-800' },
    { value: 'none', className: 'primary-900' },
  ];

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


