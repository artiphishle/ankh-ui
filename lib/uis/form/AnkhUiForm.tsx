'use client';
import { Auth } from '@/auth/Auth';
import { ChangeEvent } from 'react';

export function AnkhUiForm({ items }: IAnkhUiForm) {
  return (
    <Auth.ReadRole>
      <form data-ui="form">
        {items.map(({ title, placeholder = '', value, type = EAnkhUiFormInputType.Text, options, min = 1, max = 50, onChange = () => { } }, index) => {
          switch (type) {
            case EAnkhUiFormInputType.Range:
            case EAnkhUiFormInputType.Text: return (
              <input
                title={title}
                type={type}
                min={min}
                max={max}
                placeholder={placeholder}
                key={`form-field-${index}`}
                onChange={onChange}
                value={value}
              />)
            case EAnkhUiFormInputType.Select:
              return (
                <select title={title} key={`form-field-${index}`} onChange={onChange}>
                  {options?.map(
                    ({ name, value, selected }, optionIndex) =>
                      <option key={`form-tone-option-${optionIndex}`} value={value} selected={selected}>{name}</option>
                  )}
                </select>
              )
          }
        }
        )}
      </form>
    </Auth.ReadRole>
  );
}

export enum EAnkhUiFormInputType {
  Text = 'text',
  Number = 'number',
  Range = 'range',
  Select = 'select',
  Textarea = 'textarea'
}
export interface IAnkhUiFormItem {
  title: string;
  min?: number;
  max?: number;
  options?: IAnkhUiFormSelectOptions[];
  placeholder?: string;
  type?: EAnkhUiFormInputType;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
interface IAnkhUiForm {
  items: IAnkhUiFormItem[]
}
interface IAnkhUiFormSelectOptions {
  name: string;
  value: string | number;
  selected?: boolean;
}