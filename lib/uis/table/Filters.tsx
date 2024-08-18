import { type ChangeEvent } from "react";

export function Filters({ columnFilters, setColumnFilters }: IAnkhFilters) {
  const term = columnFilters.find((f) => f.id === "family")?.value || "";
  const onFilterChange = (id: string, value: string) => {
    setColumnFilters((prev) => prev.filter((f) => f.id !== id).concat({ id, value }));
  }

  return (
    <div style={{ marginBottom: '.8rem' }}>
      <div>
        <input
          placeholder="Filter"
          type="text"
          title="filters"
          onChange={(event: ChangeEvent<HTMLInputElement>) => onFilterChange('family', event.target.value)}
          value={term}
        />
      </div>
    </div>
  )
}

export interface IColumnFilter {
  id: string;
  value: string;
}

interface IAnkhFilters {
  columnFilters: IColumnFilter[];
  setColumnFilters: React.Dispatch<React.SetStateAction<IColumnFilter[]>>
}