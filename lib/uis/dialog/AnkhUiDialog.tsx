import {Auth} from '@/auth/Auth';
import {MouseEvent} from 'react';

export function AnkhUiDialog({message, actions}: IDialog) {
  return (
    <Auth.ReadRole>
      <dialog data-ui="dialog">
        {message}
        {actions && <footer>Actions todo</footer>}
      </dialog>
    </Auth.ReadRole>
  );
}

interface IDialogAction {
  label: string;
  onClick: (event: MouseEvent) => void;
}
interface IDialog {
  message: string;
  actions?: IDialogAction[];
}
