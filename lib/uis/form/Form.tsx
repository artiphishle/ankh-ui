"use client";
import { useDynamicList } from 'ahooks';
import { Button } from "@/uis/button/Button";
import "./form.css";
import { Auth } from '@/auth/Auth';

export function Form() {
  const { list, remove, batchRemove, getKey, insert, replace } = useDynamicList(['David', 'Jack']);
  const listIndexes = list.map((item, index) => index);

  const Row = (index: number, item: any) => (
    <Auth.ReadRole>
      <div key={getKey(index)}>
        <input
          placeholder="Please enter name"
          onChange={(e) => replace(index, e.target.value)}
          value={item}
        />
        <Auth.WriteRole>
          {list.length > 1 && (
            <div onClick={() => { remove(index) }}>(-)</div>
          )}
          <div onClick={() => { insert(index + 1, '') }}>(+)</div>
        </Auth.WriteRole>
      </div>
    </Auth.ReadRole>
  );

  return (
    <form data-ui='form'>
      {list.map((ele, index) => Row(index, ele))}

      <section>
        <Button
          onClick={() => batchRemove(listIndexes.filter((index) => index % 2 === 0))}
          label="(-)" />
        <Button label="(-)"
          onClick={() => batchRemove(listIndexes.filter((index) => index % 2 !== 0))} />
      </section>

      <div>{JSON.stringify([list])}</div>
    </form>
  );
};