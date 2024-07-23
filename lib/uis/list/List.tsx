import {Auth} from '@/auth/Auth';
import {PropsWithChildren} from 'react';

export function List({children}: IList) {
  return <Auth.ReadRole>{children}</Auth.ReadRole>;
}

interface IList extends PropsWithChildren {}
