'use client';

import {useState} from 'react';
import {Auth} from '@/auth/Auth';
import './colorHue.css';

const $fn = {
  color: {
    error: {
      throw: (colorValue: string) => {
        throw new Error(
          `${EAnkhColorParserError.InvalidFormat}: ${colorValue}`
        );
      },
    },
    getUnit: (colorValue: string) => {
      if (colorValue.startsWith('#')) return EAnkhColorUnit.Hex;
      if (colorValue.startsWith('rgb(') && colorValue.endsWith(')'))
        return EAnkhColorUnit.Rgb;
      if (colorValue.startsWith('lab(') && colorValue.endsWith(')'))
        return EAnkhColorUnit.Lab;
      if (colorValue.startsWith('hsl') && colorValue.endsWith(')'))
        return EAnkhColorUnit.Hsl;
      $fn.color.error.throw(colorValue);
    },
    getNumValues: (colorValue: string) => {
      try {
        /** @todo separate all color units to define better regex */
        const numArray =
          colorValue
            .match(
              /^[a-z]{3}\((-?[\d\.]+%?),? ?(-?[\d\.]+%?),? ?(-?[\d\.]+%?)\)$/
            )
            ?.slice(1) || [];
        return numArray.map((num: string) => parseInt(num, 10));
      } catch (error: any) {
        $fn.color.error.throw(colorValue);
      }
    },
    isNumberArray: (maybeNumberArray: unknown[]) => {
      if (!maybeNumberArray.length) return false;
      try {
        return maybeNumberArray.every(
          (maybeNumber) =>
            !isNaN(maybeNumber as number) &&
            !!(maybeNumber as number).toString().length
        );
      } catch (error: any) {
        return false;
      }
    },
    validate: {
      hex: (colorValue: string) => {
        if (typeof colorValue !== 'string') return false;
        const colorVal = (
          colorValue.startsWith('#') ? colorValue.slice(1) : colorValue
        ).toLowerCase();
        return (
          (colorVal.length === 3 || colorVal.length === 6) &&
          !colorVal.match(/[^a-f0-9]/)
        );
      },
      hsl: (colorValue: string) => {
        const numValues = $fn.color.getNumValues(colorValue);
        if (numValues?.length !== 3) return false;
        if (!$fn.color.isNumberArray(numValues)) return false;
        if (numValues[0]! < 0 || numValues[0]! > 360) return false;
        if (numValues[1]! < 0 || numValues[1]! > 100) return false;
        if (numValues[2]! < 0 || numValues[2]! > 100) return false;
        return true;
      },
      lab: (colorValue: string) => {
        const numValues = $fn.color.getNumValues(colorValue);
        if (numValues?.length !== 3) return false;
        if (!$fn.color.isNumberArray(numValues)) return false;
        if (numValues[0]! < -100 || numValues[0]! > 100) return false;
        if (numValues[1]! < -125 || numValues[1]! > 125) return false;
        if (numValues[2]! < -125 || numValues[2]! > 125) return false;
        return true;
      },
      rgb: (colorValue: string) => {
        const numValues = $fn.color.getNumValues(colorValue);
        if (numValues?.length !== 3) return false;
        if (!$fn.color.isNumberArray) return false;
        return numValues.every((numValue) => numValue > -1 && numValue <= 255);
      },
    },
    parse: {
      hex: (colorValue: string) => {
        if (!$fn.color.validate.hex(colorValue))
          $fn.color.error.throw(colorValue);
        const colorVal = colorValue.toLowerCase();
        return colorVal.startsWith('#') ? colorVal.slice(1) : colorVal;
      },
      hsl: (colorValue: string) => {
        if (!$fn.color.validate.hsl(colorValue))
          $fn.color.error.throw(colorValue);
        const numValues = $fn.color.getNumValues(colorValue);
        return numValues || [];
      },
      lab: (colorValue: string) => {
        if (!$fn.color.validate.lab(colorValue))
          $fn.color.error.throw(colorValue);
        const numValues = $fn.color.getNumValues(colorValue);
        return numValues || [];
      },
      rgb: (colorValue: string) => {
        if (!$fn.color.validate.rgb(colorValue))
          $fn.color.error.throw(colorValue);
        const numValues = $fn.color.getNumValues(colorValue);
        return numValues || [];
      },
      stringValue: (colorValue: string) => {
        const parsed = {unit: $fn.color.getUnit(colorValue)!};
        switch (parsed.unit) {
          case EAnkhColorUnit.Hex:
            if (!$fn.color.validate.hex(colorValue))
              $fn.color.error.throw(colorValue);
            return {
              ...parsed,
              parsedValue: $fn.color.parse.hex(colorValue),
              value: colorValue,
            };
          case EAnkhColorUnit.Hsl:
            if (!$fn.color.validate.hsl(colorValue))
              $fn.color.error.throw(colorValue);
            return {
              ...parsed,
              parsedValue: $fn.color.parse.hsl(colorValue),
              value: colorValue,
            };
          case EAnkhColorUnit.Lab:
            if (!$fn.color.validate.lab(colorValue))
              $fn.color.error.throw(colorValue);
            return {
              ...parsed,
              parsedValue: $fn.color.parse.lab(colorValue),
              value: colorValue,
            };
          case EAnkhColorUnit.Rgb:
            if (!$fn.color.validate.rgb(colorValue))
              $fn.color.error.throw(colorValue);
            return {
              ...parsed,
              parsedValue: $fn.color.parse.rgb(colorValue),
              value: colorValue,
            };
          default:
            $fn.color.error.throw(colorValue);
        }
      },
    },
  },
};

function ColorHueItem({value}: {value: IAnkhColor['value']}) {
  return <div style={{backgroundColor: value}} />;
}

export function ColorHue({color: value}: IAnkhUiColorHue) {
  const [currentColor, setCurrentColor] = useState<IAnkhColor>(
    $fn.color.parse.stringValue(value)!
  );

  const [hueItems, setHueItems] = useState<Pick<IAnkhColor, 'value'>[]>([
    {value: 'none'},
    {value: 'none'},
    {value: 'none'},
    {value: 'none'},
    {value: currentColor.value},
    {value: 'none'},
    {value: 'none'},
    {value: 'none'},
    {value: 'none'},
  ]);

  return (
    <Auth.ReadRole>
      <div data-ui="color-hue" className="colorHue">
        {hueItems.map((hueItem, i) => (
          <ColorHueItem key={`color-hue-item-${i}`} value={hueItem.value} />
        ))}
      </div>
    </Auth.ReadRole>
  );
}

enum EAnkhColorUnit {
  Hex,
  Hsl,
  Lab,
  Rgb,
}
enum EAnkhColorParserError {
  InvalidFormat = 'Invalid format',
  InvalidHexFormat = 'Invalid HEX format',
  InvalidHslFormat = 'Invalid HSL format',
  InvalidLabFormat = 'Invalid LAB format',
  InvalidRgbFormat = 'Invalid RGB format',
}

interface IAnkhColor {
  value: string;
  parsedValue: string | number[];
  unit: EAnkhColorUnit;
}
interface IAnkhUiColorHue {
  color: string;
}
