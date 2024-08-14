"use client";
import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { useVirtualList } from 'ahooks';
import { Auth } from '@/auth/Auth';

export function AnkhUiList({ endpoint, items = [] }: IAnkhUiList) {
  const [data, setData] = useState<ReactNode[]>(items);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (data.length) return;

    async function fetchData() {
      if (!endpoint) return;

      const res = await fetch(endpoint.url, { method: endpoint.method || "GET" });
      const d = await res.json();
      setData((d.items || []).map((fi: any) => fi.family));
    }
    fetchData();
  }, []);

  useMemo(() => Array.from(data.map((fi: any) => fi.family)), []);
  const [list] = useVirtualList(data, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overscan: 10,
  });

  return <Auth.ReadRole>
    <div ref={containerRef} style={{ height: '300px', overflow: 'auto', border: '1px solid' }}>
      <div ref={wrapperRef}>
        {data.map((li, index) => (
          <div
            style={{
              height: 52,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #e8e8e8',
              marginBottom: 8,
            }}
            key={index}
          >{li}</div>
        ))}
      </div>
    </div>
  </Auth.ReadRole>;
}

interface IAnkhUiList {
  endpoint?: {
    url: string;
    method?: string;
  }
  items?: ReactNode[];
}
