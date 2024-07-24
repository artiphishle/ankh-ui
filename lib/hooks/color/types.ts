export enum EAnkhColorUnit {
  Hex,
  Hsl,
  Lab,
  Rgb,
}
export enum EAnkhColorParserError {
  InvalidFormat = 'Invalid format',
  InvalidHexFormat = 'Invalid HEX format',
  InvalidHslFormat = 'Invalid HSL format',
  InvalidLabFormat = 'Invalid LAB format',
  InvalidRgbFormat = 'Invalid RGB format',
}

export interface IAnkhColor {
  value: string;
  parsedValue: string | number[];
  unit: EAnkhColorUnit;
}
export interface IAnkhUiColorHueItem {
  value: string;
  className?: string;
}
export interface IAnkhUiColorHue {
  color: string;
}
