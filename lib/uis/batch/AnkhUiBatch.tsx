import { useState } from "react";
import { useActivePalette } from "ankh-config";
import { AnkhUiCircle } from "@/uis/shapes/circle/AnkhUiCircle";
import { EAnkhUiSize, EAnkhUiVariant, type IAnkhCmsThemePalette, type IAnkhColorHsl, type IAnkhUiIntrinsicProps } from "ankh-types";

/** @todo Extract this function instead of copying it into every UI */
const stringifyHsl = ({ h, s, l }: IAnkhColorHsl) => `hsl(${h}, ${s}%, ${l}%)`;

export function AnkhUiBatch({ initialValue = 1, variant = EAnkhUiVariant.Primary }: IAnkhUiBatch) {
  const [value] = useState(initialValue);
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  if (!palette) return;

  const COLORS = {
    [EAnkhUiVariant.Primary]: stringifyHsl(palette.colors[0]!),
    [EAnkhUiVariant.Secondary]: stringifyHsl(palette.colors[1]!),
    [EAnkhUiVariant.Accent]: stringifyHsl(palette.colors[2]!),
    [EAnkhUiVariant.Default]: stringifyHsl(palette.colors[3]!),
  };
  /** @todo Set rules for backgroundColor & color & extract it from here (and the other files) */
  const BATCH_VARIANTS: IAnkhUiBatchVariants = {
    [EAnkhUiVariant.Primary]: { backgroundColor: COLORS[EAnkhUiVariant.Primary], color: COLORS[EAnkhUiVariant.Default] },
    [EAnkhUiVariant.Secondary]: { backgroundColor: COLORS[EAnkhUiVariant.Secondary], color: COLORS[EAnkhUiVariant.Default] },
    [EAnkhUiVariant.Accent]: { backgroundColor: COLORS[EAnkhUiVariant.Accent], color: COLORS[EAnkhUiVariant.Default] },
    [EAnkhUiVariant.Default]: { backgroundColor: COLORS[EAnkhUiVariant.Default], color: COLORS[EAnkhUiVariant.Primary] }
  };

  return <AnkhUiCircle _ui={{ id: '847ch' }} style={{ backgroundColor: BATCH_VARIANTS[variant]!.backgroundColor, color: BATCH_VARIANTS[variant]!.color }} size={EAnkhUiSize.Xs} >{value.toString()}</AnkhUiCircle>
}

interface IAnkhUiBatch extends IAnkhUiIntrinsicProps {
  readonly initialValue: number;
  readonly variant: EAnkhUiVariant;
}

interface IAnkhUiBatchVariants {
  [k: string]: { backgroundColor: string; color: string }
}