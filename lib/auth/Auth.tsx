'use client';

import type {PropsWithChildren} from 'react';
import type {IAnkhAuthRole} from 'ankh-types';

/**
 * As long as no backend attached, we will permit all roles here
 * @warning Don't use this in production
 */
const tmpRoleDefinition: IAnkhAuthRole = Object.freeze({
  UiRead: true,
  UiWrite: true,
  UiDelete: true,
});

export function ReadRole({children}: PropsWithChildren) {
  return tmpRoleDefinition.UiRead ? children : null;
}

export function WriteRole({children}: PropsWithChildren) {
  return tmpRoleDefinition.UiWrite ? children : null;
}

export function DeleteRole({children}: PropsWithChildren) {
  return tmpRoleDefinition.UiDelete ? children : null;
}

export const Auth = {ReadRole, WriteRole, DeleteRole};
