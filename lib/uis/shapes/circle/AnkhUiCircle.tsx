import { type ReactNode } from 'react';
import { EAnkhUiSize, type IAnkhUiIntrinsicProps } from 'ankh-types';

export function AnkhUiCircle({ children, active = false, className = '', style = {}, size = EAnkhUiSize.Md, onClick = () => { } }: IAnkhUiCircle) {

  const $ = {
    ...style,
    borderRadius: '50%',
    height: active ? `${parseInt(size, 10) + 10}px` : size,
    width: active ? `${parseInt(size, 10) + 10}px` : size,
  };

  return (<div className={className} data-ui="circle" style={{ ...$ }} onClick={onClick}>{children}</div>);
}

export interface IAnkhUiCircle extends IAnkhUiIntrinsicProps {
  readonly active?: boolean;
  readonly children?: ReactNode;
  readonly className?: string;
  readonly size?: EAnkhUiSize;
  readonly style?: any;
  readonly onClick?: () => void;
}
