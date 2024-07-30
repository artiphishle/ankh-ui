'use client';
import { Auth } from '@/auth/Auth';
import './form.css';
import { ChangeEvent } from 'react';

export function AnkhUiForm({ items }: IAnkhUiForm) {
  return (
    <Auth.ReadRole>
      <form data-ui="form">
        {items.map(({ placeholder = '', type = EAnkhUiFormInputType.Text, onChange = () => { } }, index) =>
          <input type={type} placeholder={placeholder} key={`form-field-${index}`} onChange={onChange} />
        )}
      </form>
    </Auth.ReadRole>
  );
}

enum EAnkhUiFormInputType {
  Text = 'text',
  Number = 'number',
  Range = 'range',
  Textarea = 'textarea'
}
interface IAnkhUiFormItem {
  title: string;
  placeholder?: string;
  type?: EAnkhUiFormInputType;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
interface IAnkhUiForm {
  items: IAnkhUiFormItem[]
}