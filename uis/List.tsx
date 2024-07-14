import React from 'react';
import {hotkeys, reactUse} from 'ankh-hook';

interface IList {}

export function List({}: IList) {
  return <ul></ul>;
}

function ListExample() {
  return (
    <ul id="shopping-list" data-comp="list">
      <li>Apfel</li>
      <li>Birne</li>
      <li>Cassis</li>
      <li>Danone</li>
      <li>Essig</li>
    </ul>
  );
}
