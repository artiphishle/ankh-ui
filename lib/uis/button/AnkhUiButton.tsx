import {EAnkhUiVariant} from 'ankh-types';
import './button.css';
import {Auth} from '@/auth/Auth';

export function AnkhUiButton({
  size = 'medium',
  backgroundColor,
  label,
  variant = EAnkhUiVariant.Default,
  ...props
}: IAnkhUiButton) {
  return (
    <Auth.ReadRole>
      <button
        data-ui="button"
        type="button"
        className={[
          'storybook-button',
          `storybook-button--${size}`,
          `${variant}`,
        ].join(' ')}
        {...props}
      >
        {label}
      </button>
    </Auth.ReadRole>
  );
}

export interface IAnkhUiButton {
  label: string;
  backgroundColor?: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: EAnkhUiVariant;
  onClick?: () => void;
}
