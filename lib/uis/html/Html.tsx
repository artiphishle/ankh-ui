"use client";
import { type PropsWithChildren } from "react";
import { Auth } from "@/auth/Auth";

export function Html({ children, tagName = "div", text }: IAnkhUiHtml) {
  const Tag = tagName;

  return (
    <Auth.ReadRole>
      <Tag data-ui="html">{text || children}</Tag>
    </Auth.ReadRole>
  );
}

interface IAnkhUiHtml extends PropsWithChildren {
  tagName?: keyof JSX.IntrinsicElements;
  text?: string;
}