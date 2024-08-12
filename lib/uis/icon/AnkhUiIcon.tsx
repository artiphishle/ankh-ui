"use client";
import { type FC, type SVGProps } from 'react';
// import Image from 'next/image';
import { EAnkhUiSize } from 'ankh-types';
import { Auth } from '@/auth/Auth';
import { useSvg } from 'ankh-hooks';

export function AnkhUiIcon({ name, size = EAnkhUiSize.Xs }: IAnkhUiIcon) {
  const { svg }: any = useSvg(`/icons/${name.toLowerCase()}.svg`);

  /** @todo Show loader? */
  if (!svg) return <Auth.ReadRole />

  return (
    <Auth.ReadRole>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
      {/*<Image alt={name} src={`./icons/${name.toLowerCase()}.svg`} width={parseInt(size)} height={parseInt(size)} />*/}
    </Auth.ReadRole>
  );
}

interface IAnkhUiIcon {
  name: string;
  size?: EAnkhUiSize;
}

type SvgElement = FC<SVGProps<SVGSVGElement>>;