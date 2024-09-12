"use client";
import { useMemo, type FC, type SVGProps } from 'react';
import { useSvg } from 'ankh-hooks';
import { EAnkhUiSize } from 'ankh-types';
import { Auth } from '@/auth/Auth';

export function AnkhUiIcon({ name, size = EAnkhUiSize.Xs }: IAnkhUiIcon) {
  const { svg }: any = useSvg(`/icons/${name.toLowerCase()}.svg`);
  const memoizedSvg = useMemo(() => ({ __html: svg }), [svg]);

  return (
    <Auth.ReadRole>
      <div dangerouslySetInnerHTML={memoizedSvg} />
    </Auth.ReadRole>
  );
}

interface IAnkhUiIcon {
  name: string;
  size?: EAnkhUiSize;
}

type SvgElement = FC<SVGProps<SVGSVGElement>>;