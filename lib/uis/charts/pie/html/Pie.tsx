import './pie.css';

export function Pie({percentage}: IAnkhUiChartPie) {
  return (
    <div
      style={{animationDelay: `-${percentage}s`}}
      className="pie"
    >{`${percentage}%`}</div>
  );
}

interface IAnkhUiChartPie {
  percentage: number;
}
