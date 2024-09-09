'use client';
import { type PropsWithChildren } from 'react';
import { Auth } from '@/auth/Auth';
import { IAnkhUiIntrinsicProps } from 'ankh-types';

export function AnkhUiHtml({ children, tagName = 'div', text }: IAnkhUiHtml) {
  const Tag = tagName;

  return (
    <Auth.ReadRole>
      <Tag data-ui="html">{text || children}</Tag>
    </Auth.ReadRole>
  );
}

interface IAnkhUiHtml extends PropsWithChildren, IAnkhUiIntrinsicProps {
  tagName?: keyof JSX.IntrinsicElements;
  text?: string;
}
