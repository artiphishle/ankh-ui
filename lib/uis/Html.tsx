import { PropsWithChildren } from "react";

export function Html({children, tagName = "div", text}: IHtml) {
  const Tag = tagName;
  
  return (<Tag>{text||children}</Tag>);
}

interface IHtml extends PropsWithChildren {
  tagName?: keyof JSX.IntrinsicElements;
  text?: string;
}