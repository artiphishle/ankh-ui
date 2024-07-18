import './button.css';

export const Button = ({
  size = 'medium',
  backgroundColor,
  label,
  variant = EVariant.Default,
  ...props
}: AnkhUiButton) => {
  
  return (
    <button data-ui="button"
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `${variant}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export enum EVariant {
  Default = "default",
  Success = "success",
  Warning = "warning",
  Error = "error",
  Info = "info",
  Primary = "primary",
  Secondary = "secondary"
}

export interface AnkhUiButton {
  label: string;
  backgroundColor?: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant? : EVariant;
  onClick?: () => void;
}
