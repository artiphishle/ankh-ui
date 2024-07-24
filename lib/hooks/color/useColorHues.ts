import { IAnkhColor } from "@/hooks/color/types";

export function useColorHues({ color: IAnkhColor, hueCount = 9, ratio = 1 / 4 }: IAnkhUseColorHueOptions) {
  const hues = [];
  // Annahme 15 hue delta per color


  return [];
}

interface IAnkhUseColorHueOptions {
  readonly color: IAnkhColor;
  readonly hueCount?: number;
  readonly ratio?: number;
}