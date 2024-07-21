"use client";
import NextImage, { type ImageProps as INextImage } from "next/image";
import { Auth } from "@/auth/Auth";

export function Image({ alt, height, src, width }: IUiImage) {
  return (
    <Auth.ReadRole>
      <NextImage data-ui="image" height={height} width={width} alt={alt} src={src} />;
    </Auth.ReadRole>
  );
}

interface IUiImage extends INextImage { }
