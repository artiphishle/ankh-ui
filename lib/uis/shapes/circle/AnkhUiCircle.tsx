import { type ReactNode } from 'react';
import { EAnkhUiSize, type IAnkhUiIntrinsicProps } from 'ankh-types';

export function AnkhUiCircle({ children, className = '', style = {}, size = EAnkhUiSize.Md }: IAnkhUiCircle) {
  const $ = {
    ...style,
    borderRadius: '50%',
    height: size,
    width: size
  };

  return (<div className={className} data-ui="circle" style={{ ...$ }}>{children}</div>);
}

export interface IAnkhUiCircle extends IAnkhUiIntrinsicProps {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly size?: EAnkhUiSize;
  readonly style?: any;
}
