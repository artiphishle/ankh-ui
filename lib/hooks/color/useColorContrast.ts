import { useColorConverter } from "@/hooks/color/useColorConverter";
import { useColorLuminance } from "@/hooks/color/useColorLuminance";

/**
  * Contrast ratio by luminance of two colors
  * TODO atm it's by HEX but use other hooks and only calc from luminance
  * @inspiredBy Alvaro Montoro
  * @url{https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o}
  */
export function useColorContrast(hex1: string, hex2: string, fix = 2) {
  const { convertHexToRgb } = useColorConverter();
  const [l1, l2] = [hex1, hex2]
    .map((c) => convertHexToRgb(c))
    .map((d) => useColorLuminance(d!.r, d!.g, d!.b));

  /** @todo Remove exclams */
  return (
    l1! > l2! ? (l1! + 0.05) / (l2! + 0.05) : (l2! + 0.05) / (l1! + 0.05)
  ).toFixed(fix);
}