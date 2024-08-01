"use client";
import { useAnkhCmsConfig } from "ankh-config";
import { Auth } from "@/auth/Auth";
import { AnkhUiColorPalette } from '@/uis/color/colorPalette/AnkhUiColorPalette';
import { AnkhUiButton } from "@/uis/button/AnkhUiButton";

export function AnkhUiColorPalettes({ }: IAnkhUiColorPalettes) {
  const { palettes } = useAnkhCmsConfig().theme;
  console.log('palettes:', palettes);

  return (
    <Auth.ReadRole>
      <p>Found {palettes.length} palettes.</p>

      <section data-ui='color-palettes'>
        {palettes.map(({ colors }, paletteIndex) => <AnkhUiColorPalette key={`palette-${paletteIndex}`} colors={colors} />)}
      </section>

      <Auth.WriteRole>
        <AnkhUiButton label="Palette" icon="Plus" />
      </Auth.WriteRole>
    </Auth.ReadRole>
  )
};

interface IAnkhUiColorPalettes { }