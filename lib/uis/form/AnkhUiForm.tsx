'use client';
import { Auth } from '@/auth/Auth';
import { ChangeEvent } from 'react';

export function AnkhUiForm({ items }: IAnkhUiForm) {
  return (
    <Auth.ReadRole>
      <form data-ui='form' className="flex flex-col">
        {items.map(({ title, label, placeholder = '', value, type = EAnkhUiFormInputType.Text, options, min = 1, max = 50, onChange = () => { } }, index) => {
          switch (type) {
            case EAnkhUiFormInputType.Range:
            case EAnkhUiFormInputType.Text: return (
              <div className='flex items-center gap-1'>
                {label && <label>{label}</label>}
                <input
                  title={title}
                  type={type}
                  min={min}
                  max={max}
                  placeholder={placeholder}
                  key={`form-field-${index}`}
                  onChange={onChange}
                  value={value}
                />
              </div>
            )
            case EAnkhUiFormInputType.Select:
              return (
                <select value={value} title={title} key={`form-field-${index}`} onChange={onChange}>
                  {options?.map(
                    ({ name, value, selected }, optionIndex) =>
                      <option key={`form-tone-option-${optionIndex}`} value={value} selected={selected}>{name}</option>
                  )}
                </select>
              )
            case EAnkhUiFormInputType.Textarea:
              return (
                <textarea onChange={onChange} value={value} key={`form-field-${index}`} title={title} placeholder={placeholder} />
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
  readonly title: string;
  readonly label?: string;
  readonly min?: number;
  readonly max?: number;
  readonly options?: IAnkhUiFormSelectOptions[];
  readonly placeholder?: string;
  readonly type?: EAnkhUiFormInputType;
  readonly value?: string | number;
  readonly onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
interface IAnkhUiForm {
  readonly items: IAnkhUiFormItem[]
}
interface IAnkhUiFormSelectOptions {
  readonly name: string;
  readonly value: string | number;
  readonly selected?: boolean;
}