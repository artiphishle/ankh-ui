import { AnkhUiHeading } from '@/uis/heading/AnkhUiHeading';
import {
  AnkhUiCircle,
  type IAnkhUiCircle,
} from '@/uis/shapes/circle/AnkhUiCircle';
import "./circles.css";

export function AnkhUiCircles({ circles, title, onCircleClick = () => { } }: IAnkhUiCircles) {
  return (
    <section data-ui="circles">
      {title && <AnkhUiHeading _ui={{ id: 'from-circles-423535' }} text={title} level="h3" />}
      <div className="circles">
        {circles.map(({ style, size, active = false }, index) => (
          <AnkhUiCircle _ui={{ id: 'from-circles-34545' }} key={index} style={style} size={size} active={active} onClick={() => onCircleClick(index)} />
        ))}
      </div>
    </section>
  );
}

export interface IAnkhUiCircles {
  readonly circles: IAnkhUiCircle[];
  readonly title?: string;
  readonly onCircleClick?: (circleIndex: number) => void;
}
