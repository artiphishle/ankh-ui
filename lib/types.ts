export interface IAnkhAuthRole {
  UiRead?: boolean;
  UiWrite?: boolean;
  UiDelete?: boolean;
}

export enum EVariant {
  Default = 'default',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
  Primary = 'primary',
  Secondary = 'secondary',
}
