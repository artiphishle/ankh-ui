'use client';
import {Auth} from '@/auth/Auth';
import {type DragEvent, type PropsWithChildren} from 'react';

export function AnkhUiPanelHandle() {
  return (
    <Auth.ReadRole>
      <div data-ui="panel-handle" draggable={true} />
    </Auth.ReadRole>
  );
}

export function AnkhUiPanel({children}: IPanel) {
  const onDragOver = (event: DragEvent) => event.preventDefault();
  const onDragEnter = (event: DragEvent) => event.preventDefault();
  const onDrop = (event: DragEvent) => {
    console.log(event);
  };

  return (
    <Auth.ReadRole>
      <div
        className="w-full"
        data-ui="panel"
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {children}
      </div>
    </Auth.ReadRole>
  );
}

export function AnkhUiPanelGroup({children}: IPanelGroup) {
  return (
    <Auth.ReadRole>
      <div data-ui="panel-group" className="flex">
        {children}
      </div>
    </Auth.ReadRole>
  );
}

interface IPanel extends PropsWithChildren {}
interface IPanelGroup extends PropsWithChildren {
  resizable?: boolean;
}
