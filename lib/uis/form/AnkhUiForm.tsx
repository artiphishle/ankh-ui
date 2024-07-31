'use client';
import { Auth } from '@/auth/Auth';
import { ChangeEvent } from 'react';

export function AnkhUiForm({ items }: IAnkhUiForm) {
  return (
    <Auth.ReadRole>
      <form data-ui="form">
        {items.map(({ title, placeholder = '', type = EAnkhUiFormInputType.Text, options, onChange = () => { } }, index) => {
          switch (type) {
            case EAnkhUiFormInputType.Text: return (<input title={title} type={type} placeholder={placeholder} key={`form-field-${index}`} onChange={onChange} />)
            case EAnkhUiFormInputType.Select:
              return (
                <select title={title} key={`form-field-${index}`} onChange={onChange}>
                  {options?.map(({ name, value }, optionIndex) => <option key={`form-tone-option-${optionIndex}`} value={value}>{name}</option>)}
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
  options?: IAnkhUiFormSelectOptions[];
  placeholder?: string;
  type?: EAnkhUiFormInputType;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
interface IAnkhUiForm {
  items: IAnkhUiFormItem[]
}
interface IAnkhUiFormSelectOptions {
  name: string;
  value: string | number;
}