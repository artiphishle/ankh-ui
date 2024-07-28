import { AnkhUiHeading } from '@/uis/heading/AnkhUiHeading';
import {
  AnkhUiCircle,
  type IAnkhUiCircle,
} from '@/uis/shapes/circle/AnkhUiCircle';
import "./circles.css";

export function AnkhUiCircles({ circles, title }: IAnkhUiCircles) {
  return (
    <section data-ui="circles">
      {title && <AnkhUiHeading text={title} level="h3" />}
      <div className="circles">
        {circles.map(({ color, size }, index) => (
          <AnkhUiCircle key={index} color={color} size={size} />
        ))}
      </div>
    </section>
  );
}

export interface IAnkhUiCircles {
  circles: IAnkhUiCircle[];
  title?: string;
}
