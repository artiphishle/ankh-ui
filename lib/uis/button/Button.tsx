import {EVariant} from '@/types';
import './button.css';
import {Auth} from '@/auth/Auth';

export const Button = ({
  size = 'medium',
  backgroundColor,
  label,
  variant = EVariant.Default,
  ...props
}: AnkhUiButton) => {
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
};

export interface AnkhUiButton {
  label: string;
  backgroundColor?: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: EVariant;
  onClick?: () => void;
}
