"use client";
import { AnkhUiHeading } from '@/uis/heading/AnkhUiHeading';
import {
  AnkhUiCircle,
  type IAnkhUiCircle,
} from '@/uis/shapes/circle/AnkhUiCircle';
import "./circles.css";
import { useState } from 'react';

export function AnkhUiCircles({ activeIndex = null, circles, title, onCircleClick = () => { } }: IAnkhUiCircles) {
  const [isActive, setIsActive] = useState(activeIndex);

  return (
    <section data-ui="circles">
      {title && <AnkhUiHeading _ui={{ id: 'from-circles-423535' }} text={title} level="h3" />}
      <div className="circles">
        {circles.map(({ style, size, active = false }, index) => (
          <AnkhUiCircle _ui={{ id: 'from-circles-34545' }} key={index} style={style} size={size} active={isActive === index} onClick={() => { setIsActive(index); onCircleClick(index) }} />
        ))}
      </div>
    </section>
  );
}

export interface IAnkhUiCircles {
  readonly circles: IAnkhUiCircle[];
  readonly activeIndex?: number | null;
  readonly title?: string;
  readonly onCircleClick?: (circleIndex: number) => void;
}
