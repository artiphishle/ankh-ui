import NextImage, {type ImageProps as INextImage} from "next/image";

export function Image({alt, height, src, width }: IUiImage) {
  return <NextImage data-comp="image" height={height} width={width} alt={alt} src={src} />;
}

interface IUiImage extends INextImage {}
