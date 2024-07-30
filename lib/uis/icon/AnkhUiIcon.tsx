"use client";
import { Auth } from '@/auth/Auth';
import { EAnkhUiSize } from 'ankh-types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function AnkhUiIcon({ name, size = EAnkhUiSize.Xs }: IAnkhUiIcon) {
  const [icon, setIcon] = useState<any>();
  useEffect(() => {
    async function importIcon() {
      setIcon((await import(`./icons/${name.toLowerCase()}.svg`)));
    }
    importIcon();
  }, [])

  return (
    <Auth.ReadRole>
      <Image alt={name} src={`./icons/${name.toLowerCase()}.svg`} width={parseInt(size)} height={parseInt(size)} />
    </Auth.ReadRole>
  );
}

type SvgInHtml = SVGElement & HTMLElement;
interface IAnkhUiIcon {
  name: string;
  size?: EAnkhUiSize;
}