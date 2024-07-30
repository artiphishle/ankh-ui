'use client';
import { useDynamicList } from 'ahooks';
import { AnkhUiButton } from '@/uis/button/AnkhUiButton';
import './form.css';
import { Auth } from '@/auth/Auth';
import { PropsWithChildren } from 'react';

export function AnkhUiForm({ items }: IAnkhUiForm) {
  const { list, remove, batchRemove, getKey, insert, replace } = useDynamicList(items.map(({ value = '' }) => value));
  const listIndexes = list.map((_, index) => index);

  const Row = (index: number, item: IAnkhUiFormItem) => (
    <Auth.ReadRole key={getKey(index)}>
      <input
        placeholder="Please enter name"
        onChange={(e) => replace(index, e.target.value)}
        title={item.title}
        value={item.value}
      />
      <Auth.WriteRole>
        {list.length > 1 && (
          <div
            onClick={() => {
              remove(index);
            }}
          >
            (-)
          </div>
        )}
        <div
          onClick={() => {
            insert(index + 1, '');
          }}
        >
          (+)
        </div>
      </Auth.WriteRole>
    </Auth.ReadRole>
  );

  return (
    <form data-ui="form">
      <div>{JSON.stringify([list])}</div>
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
  type?: string;
  value?: string;
}
interface IAnkhUiForm {
  items: IAnkhUiFormItem[]
}