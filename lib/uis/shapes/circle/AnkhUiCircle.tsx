import { EAnkhUiSize, type IAnkhColor } from 'ankh-types';
import './circle.css';

export function AnkhUiCircle({ color, size = EAnkhUiSize.Md }: IAnkhUiCircle) {
  return (
    <div
      data-ui="circle"
      style={{ width: size, height: size, backgroundColor: color }}
    ></div>
  );
}

export interface IAnkhUiCircle {
  color: string;
  size: EAnkhUiSize;
}
