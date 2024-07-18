"use client";

interface IHtml {
  tagName: keyof JSX.IntrinsicElements;
  text: string;
}

export function Html({tagName, text}: IHtml) {
  const HtmlElm = tagName;

  return (<HtmlElm>{text}</HtmlElm>);
}
