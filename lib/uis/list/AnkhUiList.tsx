import { ReactNode, useMemo, useRef } from 'react';
import { useVirtualList } from 'ahooks';
import { Auth } from '@/auth/Auth';

export function AnkhUiList({ items }: IAnkhUiList) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const originalList = useMemo(() => Array.from(items), []);
  const [list] = useVirtualList(originalList, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overscan: 10,
  });

  return <Auth.ReadRole>
    <div ref={containerRef} style={{ height: '300px', overflow: 'auto', border: '1px solid' }}>
      <div ref={wrapperRef}>
        {list.map((li) => (
          <div
            style={{
              height: 52,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #e8e8e8',
              marginBottom: 8,
            }}
            key={li.index}
          >{li.data}</div>
        ))}
      </div>
    </div>
  </Auth.ReadRole>;
}

interface IAnkhUiList {
  items: ReactNode[];
}
