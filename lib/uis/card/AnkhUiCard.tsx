import {AnkhUiHeading} from '@/uis/heading/AnkhUiHeading';
import {IAnkhColor} from 'ankh-types';
import Image, {type ImageProps} from 'next/image';
import './card.css';

export function AnkhUiCard({
  color,
  text,
  image,
  title,
  width = 200,
}: IAnkhUiCard) {
  return (
    <div
      data-ui="card"
      style={{backgroundColor: color?.value, width: `${width}px`}}
    >
      <header>{title && <AnkhUiHeading text={title} level="h4" />}</header>
      <div>
        {text && <p>{text}</p>}
        {image && (
          <Image
            alt={image.alt}
            src={image.src}
            width={image.width}
            height={image.height}
          />
        )}
      </div>
    </div>
  );
}

interface IAnkhUiCard {
  color?: Pick<IAnkhColor, 'value'>;
  image?: ImageProps;
  text?: string;
  title?: string;
  width?: number;
}
