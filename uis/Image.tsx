interface IUiImage {
  alt: string;
  src: string;
  style?: string;
}

export function Image({alt, src, style = ''}: IUiImage) {
  return <img alt={alt} src={src} style={style} />;
}
