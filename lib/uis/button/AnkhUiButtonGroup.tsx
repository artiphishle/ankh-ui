"use client";
import type { PropsWithChildren } from "react"
import type { IAnkhUiIntrinsicProps } from "ankh-types"

export function AnkhUiButtonGroup({ children }: IAnkhUiButtonGroup) {
  return (
    <div data-ui="button-group" className="flex items-center">
      {children}
    </div>
  );
}

interface IAnkhUiButtonGroup extends IAnkhUiIntrinsicProps, PropsWithChildren { }