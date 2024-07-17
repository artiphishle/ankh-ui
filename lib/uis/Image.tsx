"use client";

interface IUiImage {
  alt: string;
  src: string;
  style?: Record<string, unknown>;
}

export function Image({alt, src, style = {}}: IUiImage) {
  return <img alt={alt} src={src} style={style} />;
}
