import { EAnkhColorUnit } from "@/hooks/types";
import { useColorValidator } from "@/hooks/useColorValidator"; import { useColorHelper } from "./useColorHelper";
;

function getUnit(value: string) {
  if (value.startsWith('#')) return EAnkhColorUnit.Hex;
  if (value.startsWith('rgb(') && value.endsWith(')')) return EAnkhColorUnit.Rgb;
  if (value.startsWith('lab(') && value.endsWith(')')) return EAnkhColorUnit.Lab;
  if (value.startsWith('hsl') && value.endsWith(')')) return EAnkhColorUnit.Hsl;
  throw new Error(value);
}

export function useColorParser() {
  const { useNumValues } = useColorHelper();
  const { isValidHex, isValidHsl, isValidLab, isValidRgb } = useColorValidator();

  function parseHex(colorValue: string) {
    if (!isValidHex(colorValue)) throw new Error(colorValue);
    const colorVal = colorValue.toLowerCase();
    return colorVal.startsWith('#') ? colorVal.slice(1) : colorVal;
  }
  function parseHsl(colorValue: string) {
    if (!isValidHsl(colorValue)) throw new Error(colorValue);
    return useNumValues(colorValue) || [];
  }
  function parseLab(colorValue: string) {
    if (!isValidLab(colorValue)) throw new Error(colorValue);
    return useNumValues(colorValue) || [];
  }
  function parseRgb(colorValue: string) {
    if (!isValidRgb(colorValue)) throw new Error(colorValue);
    return useNumValues(colorValue) || [];
  }
  function parseString(colorValue: string) {
    const parsed = { unit: getUnit(colorValue)! };

    switch (parsed.unit) {
      case EAnkhColorUnit.Hex:
        if (!isValidHex(colorValue))
          throw new Error(colorValue);
        return {
          ...parsed,
          parsedValue: parseHex(colorValue),
          value: colorValue,
        };
      case EAnkhColorUnit.Hsl:
        if (!isValidHsl(colorValue))
          throw new Error(colorValue);

        return {
          ...parsed,
          parsedValue: parseHsl(colorValue),
          value: colorValue,
        };
      case EAnkhColorUnit.Lab:
        if (!isValidLab(colorValue)) throw new Error(colorValue);
        return {
          ...parsed, parsedValue: parseLab(colorValue), value: colorValue,
        };
      case EAnkhColorUnit.Rgb:
        if (!isValidRgb(colorValue))
          throw new Error(colorValue);
        return {
          ...parsed,
          parsedValue: parseRgb(colorValue),
          value: colorValue,
        };
      default: throw new Error(colorValue);
    }
  }

  return { parseHex, parseHsl, parseLab, parseRgb, parseString };
}