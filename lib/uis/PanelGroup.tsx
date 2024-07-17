"use client";

import {type DragEvent, type PropsWithChildren} from 'react';

export function PanelHandle() {
  return <div data-comp="panel-handle" draggable={true} />;
}

export function Panel({children}: IPanel) {
  const onDragOver = (event: DragEvent) => event.preventDefault();
  const onDragEnter = (event: DragEvent) => event.preventDefault();
  const onDrop = (event: DragEvent) => {
    console.log(event);
  };

  return (
    <div
      className="w-full"
      data-comp="panel"
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
}

export function PanelGroup({children}: IPanelGroup) {
  return (
    <div data-comp="panel-group" className="flex">
      {children}
    </div>
  );
}

interface IPanel extends PropsWithChildren {}
interface IPanelGroup extends PropsWithChildren {
  resizable?: boolean;
}
