import {MouseEvent} from 'react';

interface Props {
  text?: string;
  onClick?: (event: MouseEvent) => void;
}
const noop = () => {};

export function Button({text = 'Text', onClick = noop}: Props) {
  return (
    <button className="p-2 bg-gray-400" onClick={onClick}>
      {text}
    </button>
  );
}
