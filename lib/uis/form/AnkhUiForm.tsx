'use client';
import { useDynamicList } from 'ahooks';
import { Auth } from '@/auth/Auth';
import './form.css';
import { AnkhUiButton } from '../button/AnkhUiButton';

export function AnkhUiForm({ items }: IAnkhUiForm) {
  return (
    <form data-ui="form">
      {items.map(({ placeholder = '', type = EAnkhUiFormInputType.Text }, index) => <input type={type} placeholder={placeholder} key={`form-field-${index}`} />)}
    </form>
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