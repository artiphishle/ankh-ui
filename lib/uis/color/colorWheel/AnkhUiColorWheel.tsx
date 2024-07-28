import { EAnkhUiSize } from "ankh-types";

export function AnkhUiColorWheel({ size = EAnkhUiSize.Md }: IAnkhUiColorWheel) {
  const numSegments = 360;
  const numSize = parseInt(size, 10);
  const radius = numSize / 2;
  const centerX = numSize / 2;
  const centerY = numSize / 2;

  const segments = Array.from({ length: numSegments }, (_, i) => {
    const startAngle = (i * 2 * Math.PI) / numSegments;
    const endAngle = ((i + 1) * 2 * Math.PI) / numSegments;

    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);

    const d = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;

    return (
      <path key={i} d={d} fill={`hsl(${(i * 360) / numSegments}, 100%, 50%)`} />
    );
  });

  return (
    <svg width={numSize} height={numSize} viewBox={`0 0 ${numSize} ${numSize}`}>{segments}</svg>
  );
}

interface IAnkhUiColorWheel {
  size: EAnkhUiSize
}