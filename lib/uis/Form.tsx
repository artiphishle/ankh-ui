import React from "react";
import { ahooks } from 'ankh-hook';
import {Button} from "./Button";

export function Form(){
  const { list, remove, batchRemove, getKey, insert, replace } = ahooks.useDynamicList(['David', 'Jack']);
  const listIndexes = list.map((item, index) => index);

  const Row = (index: number, item: any) => (
    <div key={getKey(index)} style={{ marginBottom: 16 }}>
      <input
        style={{ width: 300 }}
        placeholder="Please enter name"
        onChange={(e) => replace(index, e.target.value)}
        value={item}
      />

      {list.length > 1 && (
        <div
          style={{ marginLeft: 8 }}
          onClick={() => {
            remove(index);
          }}>⊖
        </div>
      )}
      <div
        style={{ marginLeft: 8 }}
        onClick={() => {
          insert(index + 1, '');
        }}>⊕</div>
    </div>
  );

  return (
    <>
      {list.map((ele, index) => Row(index, ele))}

      <section style={{ marginBottom: 16 }}>
        <Button
          onClick={() => batchRemove(listIndexes.filter((index) => index % 2 === 0))}
        >
          Remove odd items
        </Button>
        <Button
          onClick={() => batchRemove(listIndexes.filter((index) => index % 2 !== 0))}
        >
          Remove even items
        </Button>
      </section>

      <div>{JSON.stringify([list])}</div>
    </>
  );
};