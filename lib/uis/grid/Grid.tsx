"use client";
import { PropsWithChildren, ReactNode, useState } from "react";
import { closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { Auth } from "@/auth/Auth";
import "./grid.css";
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { SortableItem } from "../SortableItem";

export function GridCell({ id, children }: IAnkhUiGridCell) {
  return <SortableItem id={id} data-ui='grid-cell'>{children}</SortableItem>
}

export function Grid({ children }: IAnkhUiGrid) {
  const gridCells = children.map((child, id) => <GridCell id={id.toString()}>{child}</GridCell>)
  const [items, setItems] = useState(gridCells.map((cell, id) => id.toString()));
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id === over!.id) return;

    setItems((prevItems) => {
      const oldIndex = prevItems.indexOf(active.id.toString());
      const newIndex = prevItems.indexOf(over!.id.toString());
      return arrayMove(prevItems, oldIndex, newIndex);
    })
  }

  return (
    <Auth.ReadRole>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div data-ui='grid'>
          <SortableContext items={items}>
            {gridCells}
          </SortableContext>
        </div>
      </DndContext>
    </Auth.ReadRole >
  );
}

interface IAnkhUiGridCell extends PropsWithChildren {
  id: string;
}

interface IAnkhUiGrid extends PropsWithChildren {
  children: ReactNode[];
  styles?: Array<[string, string, string]>; // TStyle[]
}
