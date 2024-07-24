import { useColorHelper } from "@/hooks/color/useColorHelper";

function isNumberArray(maybeNumberArray: unknown[]) {
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
}

export function useColorValidator() {
  const { useNumValues } = useColorHelper();

  function isValidHex(colorValue: string) {
    if (typeof colorValue !== 'string') return false;
    const colorVal = (
      colorValue.startsWith('#') ? colorValue.slice(1) : colorValue
    ).toLowerCase();
    return (
      (colorVal.length === 3 || colorVal.length === 6) &&
      !colorVal.match(/[^a-f0-9]/)
    );
  }

  function isValidHsl(colorValue: string) {
    const numValues = useNumValues(colorValue);
    if (numValues?.length !== 3) return false;
    if (!isNumberArray(numValues)) return false;
    if (numValues[0]! < 0 || numValues[0]! > 360) return false;
    if (numValues[1]! < 0 || numValues[1]! > 100) return false;
    if (numValues[2]! < 0 || numValues[2]! > 100) return false;
    return true;
  }

  function isValidLab(colorValue: string) {
    const numValues = useNumValues(colorValue);
    if (numValues?.length !== 3) return false;
    if (!isNumberArray(numValues)) return false;
    if (numValues[0]! < -100 || numValues[0]! > 100) return false;
    if (numValues[1]! < -125 || numValues[1]! > 125) return false;
    if (numValues[2]! < -125 || numValues[2]! > 125) return false;
    return true;
  }

  function isValidRgb(colorValue: string) {
    const numValues = useNumValues(colorValue);
    if (numValues?.length !== 3) return false;
    if (!isNumberArray) return false;
    return numValues.every(
      (numValue) => numValue > -1 && numValue <= 255
    );
  }

  return { isValidHex, isValidHsl, isValidLab, isValidRgb }
}