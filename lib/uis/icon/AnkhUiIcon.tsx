"use client";
import { FC, SVGProps, useEffect, useState } from 'react';
// import Image from 'next/image';
import { EAnkhUiSize } from 'ankh-types';
import { Auth } from '@/auth/Auth';
import { useSvg } from 'ankh-hooks';

export function AnkhUiIcon({ name, size = EAnkhUiSize.Xs }: IAnkhUiIcon) {
  const [Svg, setSvg] = useState<SvgElement>();

  useEffect(() => {
    async function fetchSvg() {
      const LoadedSvg: SvgElement = await useSvg({ name });
      setSvg(() => LoadedSvg);
    }
    fetchSvg();
  }, [name])

  /** @todo Show loader? */
  if (!Svg) return <Auth.ReadRole></Auth.ReadRole>

  return (
    <Auth.ReadRole>
      <Svg />
      {/*<Image alt={name} src={`./icons/${name.toLowerCase()}.svg`} width={parseInt(size)} height={parseInt(size)} />*/}
    </Auth.ReadRole>
  );
}

interface IAnkhUiIcon {
  name: string;
  size?: EAnkhUiSize;
}

type SvgElement = FC<SVGProps<SVGSVGElement>>;