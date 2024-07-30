'use client';
import { Auth } from '@/auth/Auth';
import { AnkhUiButton } from '@/uis/button/AnkhUiButton';
import './form.css';

export function AnkhUiForm({ items }: IAnkhUiForm) {
  return (
    <Auth.ReadRole>
      <form data-ui="form">
        {items.map(({ placeholder = '', type = EAnkhUiFormInputType.Text }, index) => <input type={type} placeholder={placeholder} key={`form-field-${index}`} />)}
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
}
interface IAnkhUiForm {
  items: IAnkhUiFormItem[]
}