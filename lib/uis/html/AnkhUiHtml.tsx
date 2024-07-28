'use client';
import { type PropsWithChildren } from 'react';
import { Auth } from '@/auth/Auth';
import { useError } from 'ankh-hooks';

export function AnkhUiHtml({ children, tagName = EAnkhUiHtmlTagName.Div, text }: IAnkhUiHtml) {
  const { useFatalError } = useError();

  if (Object.keys(EAnkhUiHtmlTagName).includes(tagName))
    useFatalError('[AnkhUiHtml::tagName] not allowed.');

  const Tag = tagName;

  return (
    <Auth.ReadRole>
      <Tag data-ui="html">{text || children}</Tag>
    </Auth.ReadRole>
  );
}

enum EAnkhUiHtmlTagName {
  Article = 'article',
  Div = 'div',
  Footer = 'footer',
  Header = 'header',
  Main = 'main',
  Section = 'section',
  Small = 'small'
}
interface IAnkhUiHtml extends PropsWithChildren {
  tagName?: EAnkhUiHtmlTagName;
  // tagName?: keyof JSX.IntrinsicElements;
  text?: string;
}
