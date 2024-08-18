"use client";
import { useEffect, useState } from "react";
import { type ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table";
import { Filters, IColumnFilter } from "./Filters";

const columns: ColumnDef<any, any>[] = [
  {
    accessorKey: 'family',
    header: 'Family',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: (props) => <p>{props.getValue()}</p>
  }
];

export function AnkhUiTable<T>({ endpoint }: IAnkhUiTable) {
  const [data, setData] = useState<T[]>([]);
  const [columnFilters, setColumnFilters] = useState<IColumnFilter[]>([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  useEffect(() => {
    if (data.length) return;

    async function fetchData() {
      if (!endpoint) return;
      const result = await fetch(endpoint?.url, { method: endpoint.method || "GET" });
      const json = await result.json();
      const items: T[] = json.items;
      console.log(items);
      setData(items);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
      <div className="table" style={{ display: 'flex', flexDirection: 'column', width: table.getTotalSize() }}>
        {/** HEADER */}
        {table.getHeaderGroups().map((headerGroup) =>
          <div style={{ display: 'flex' }} className="tr" key={headerGroup.id}>{headerGroup.headers.map((header) =>
            <div className="th" style={{ padding: '.4rem', border: '1px solid #aaa', fontWeight: 700, width: header.getSize() }} key={header.id}>{header.column.columnDef.header?.toString()}</div>)}
          </div>)
        }
        {/** ROWS */}
        {table.getRowModel().rows.map((row) =>
          <div key={row.id} style={{ display: 'flex' }}>
            {row.getVisibleCells().map((cell) =>
            (<div key={cell.id} className='td' style={{ padding: '.4rem', border: '1px solid #aaa', width: cell.column.getSize() }}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
            ))
            }
          </div>)}
      </div>
    </div>
  );
}

interface IAnkhUiTable {
  endpoint?: { url: string; method: string }
}

interface IGoogleFont {
  family: string;
  category: string;
}