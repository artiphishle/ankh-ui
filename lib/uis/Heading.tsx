import { type PropsWithChildren } from "react";

export function Heading({text, level  }: IHeading){
  const H = level;
  
  return <H>{text}</H>
}

interface IHeading extends PropsWithChildren {
  level: keyof JSX.IntrinsicElements;
  text: string,
}