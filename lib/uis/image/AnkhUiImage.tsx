'use client';
import NextImage, { type ImageProps as INextImage } from 'next/image';
import { Auth } from '@/auth/Auth';
import { IAnkhUiIntrinsicProps } from 'ankh-types';

export function AnkhUiImage({ alt, height, src, width }: IUiImage) {
  return (
    <Auth.ReadRole>
      <NextImage
        data-ui="image"
        height={height}
        width={width}
        alt={alt}
        src={src}
      />
      ;
    </Auth.ReadRole>
  );
}

interface IUiImage extends INextImage, IAnkhUiIntrinsicProps { }
