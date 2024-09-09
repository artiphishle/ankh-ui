import { AnkhUiHeading } from '@/uis/heading/AnkhUiHeading';
import {
  AnkhUiCircle,
  type IAnkhUiCircle,
} from '@/uis/shapes/circle/AnkhUiCircle';
import "./circles.css";

export function AnkhUiCircles({ circles, title }: IAnkhUiCircles) {
  return (
    <section data-ui="circles">
      {title && <AnkhUiHeading _ui={{ id: 'from-circles-423535' }} text={title} level="h3" />}
      <div className="circles">
        {circles.map(({ style, size }, index) => (
          <AnkhUiCircle _ui={{ id: 'from-circles-34545' }} key={index} style={style} size={size} />
        ))}
      </div>
    </section>
  );
}

export interface IAnkhUiCircles {
  circles: IAnkhUiCircle[];
  title?: string;
}
