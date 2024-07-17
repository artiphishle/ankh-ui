import React, { createElement, PropsWithChildren, ReactNode } from "react";

type THeadingLevel = 1|2|3|4|5|6;

interface IHeading extends PropsWithChildren {
  text: string;
  level?: THeadingLevel;
}
export function Heading({text, level = 1}: IHeading){
  <h1>{text}</h1>
}