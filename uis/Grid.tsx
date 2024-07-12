'use client';

interface Props {
  gridTemplateColumns?: number;
  gridTemplateRows?: number;
}

export function Grid({gridTemplateColumns = 12, gridTemplateRows = 12}: Props) {
  return (
    <div
      data-comp="grid"
      style={{gridTemplateColumns: `repeat(${gridTemplateColumns},1fr)`}}
    >
      {new Array(gridTemplateColumns * gridTemplateRows)
        .fill('')
        .map((_, colIndex) => (
          <div key={`col-${colIndex}`} draggable={true}>
            {colIndex.toString()}
          </div>
        ))}
    </div>
  );
}
