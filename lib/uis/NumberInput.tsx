"use client";

import {type ChangeEvent, useId, useState} from 'react';

interface INumberInput {
  initialValue?: number;
  label?: string;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export function NumberInput({
  onChange: changeCallback,
  initialValue = 0,
  label = '',
  min = 0,
  max = 100,
}: INumberInput) {
  const cnInput = 'mr-4 ml-1 w-12 bg-[#444] border-none';
  const [value, setValue] = useState(initialValue);
  const inputId = useId();

  return (
    <label htmlFor={inputId}>
      <input
        id={inputId}
        className={cnInput}
        type="number"
        pattern="[\d]{1-2}"
        min={min}
        max={max}
        value={value}
        onChange={(event: ChangeEvent) => {
          const v = parseInt((event.target as HTMLInputElement).value || '0');
          setValue(v);
          changeCallback(v);
        }}
      />
      {label}
    </label>
  );
}
