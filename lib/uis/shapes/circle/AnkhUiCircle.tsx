import { type ReactNode } from 'react';
import { EAnkhUiSize, type IAnkhUiIntrinsicProps } from 'ankh-types';

export function AnkhUiCircle({ children, style = {}, size = EAnkhUiSize.Md }: IAnkhUiCircle) {
  const $ = {
    ...style,
    borderRadius: '50%',
    height: size,
    width: size
  };

  return (<div data-ui="circle" style={{ ...$ }}>{children}</div>);
}

export interface IAnkhUiCircle extends IAnkhUiIntrinsicProps {
  readonly size?: EAnkhUiSize;
  readonly children?: ReactNode;
  readonly style?: any;
}
