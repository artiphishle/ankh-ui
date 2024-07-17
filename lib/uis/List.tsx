"use client";

enum EPosition {
  Left,
  Right,
}
interface IIcon {
  alt: string;
  src: string;
  pos: EPosition;
}
interface IListItem {
  href?: string;
  icon?: IIcon;
  text?: string;
}
interface IList {
  items: IListItem[];
}

export function List({items}: IList) {
  return (
    <ul>
      {items.map(({text}, itemIndex) => (
        <li key={itemIndex}>{text}</li>
      ))}
    </ul>
  );
}
export function ListExample() {
  const listItems: IListItem[] = [{text: 'Apfel'}];
  return <List items={listItems} data-comp="list" />;
}
