import { EAnkhUiVariant } from 'ankh-types';
import './button.css';
import { Auth } from '@/auth/Auth';
import { AnkhUiIcon } from '../icon/AnkhUiIcon';

export function AnkhUiButton({
  size = 'medium',
  backgroundColor,
  icon,
  label,
  style = {},
  variant = EAnkhUiVariant.Default,
  ...props
}: IAnkhUiButton) {
  return (
    <Auth.ReadRole>
      <button
        data-ui="button"
        style={style}
        type="button"
        className={[
          'storybook-button',
          `storybook-button--${size}`,
          `${variant}`,
        ].join(' ')}
        {...props}
      >
        {icon && <AnkhUiIcon name={icon} />}
        {label && label}
      </button>
    </Auth.ReadRole>
  );
}

export interface IAnkhUiButton {
  label: string;
  backgroundColor?: string;
  icon?: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: any;
  variant?: EAnkhUiVariant;
  onClick?: () => void;
}
