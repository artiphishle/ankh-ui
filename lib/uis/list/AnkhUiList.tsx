import {Auth} from '@/auth/Auth';
import {PropsWithChildren} from 'react';

export function AnkhUiList({children}: IList) {
  return <Auth.ReadRole>{children}</Auth.ReadRole>;
}

interface IList extends PropsWithChildren {}
