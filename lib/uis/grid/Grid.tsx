"use client";
import {PropsWithChildren, ReactNode } from "react";
import { DndContext } from "@dnd-kit/core";
import { Auth } from "@/auth/Auth";
import "./grid.css";

export function GridCell({children}: PropsWithChildren){
  return <div data-ui='grid-cell'>{children}</div>
}

export function Grid({children}: IUiGrid) {
  return (
    <Auth.ReadRole>
      <DndContext>
        <div data-ui='grid'>{children}</div>
      </DndContext>
    </Auth.ReadRole>
  );
}

interface IUiGrid extends PropsWithChildren{
  children: ReactNode[];
  styles?: Array<[string, string, string]>; // TStyle[]
}
