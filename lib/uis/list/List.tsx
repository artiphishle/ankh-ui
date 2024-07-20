"use client";
import { closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, UniqueIdentifier, useSensor, useSensors } from "@dnd-kit/core";
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from "@dnd-kit/sortable"
import {SortableItem} from "../SortableItem";
import { useState } from "react";
import { Auth } from "@/auth/Auth";


export function List({items: _items}: IList) {
  const [items, setItems] = useState(_items.map(({id})=>id));
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {coordinateGetter: sortableKeyboardCoordinates}));

  function handleDragEnd(event: DragEndEvent){
    const {active, over} = event;
    if(active.id === over!.id) return;
    setItems((items) => {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over!.id);
      return arrayMove(items, oldIndex, newIndex);
    })
  }

  return (
    <Auth.ReadRole>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>

        {_items.map(({text}, itemIndex) => (
          <SortableItem id={"my-sortable-item"} key={itemIndex} />
        ))}
        </SortableContext>
      </DndContext>
    </Auth.ReadRole>
  );
}

enum EPosition {Left,Right}
interface IIcon {alt: string;src: string;pos: EPosition}
interface IListItem {id: UniqueIdentifier, href?: string;icon?: IIcon;text?: string}
interface IList {items: IListItem[]}