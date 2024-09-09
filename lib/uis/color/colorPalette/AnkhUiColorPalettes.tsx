"use client";
import { useEffect, useState } from "react";
import { useIndexedDb } from "ankh-hooks";
import { Auth } from "@/auth/Auth";
import { useAnkhCmsConfig } from "ankh-config";
import { AnkhUiColorPalette, IAnkhUiColorPalette } from '@/uis/color/colorPalette/AnkhUiColorPalette';
import { AnkhUiButton } from "@/uis/button/AnkhUiButton";
import { IAnkhUiIntrinsicProps } from "ankh-types";

export const THEME_ID = 1337;

export function AnkhUiColorPalettes({ }: IAnkhUiColorPalettes) {
  const { api, db } = useIndexedDb<{ id: IDBValidKey, palettes: IAnkhUiColorPalette[] }>({ dbName: "ankh-cms", storeName: "ui-config" });
  const theme = useAnkhCmsConfig().theme;
  const [palettes, setPalettes] = useState<IAnkhUiColorPalette[]>([]);

  useEffect(() => {
    if (!db) return;

    async function fetchTheme() {
      const defaultConfig = { ...theme, id: THEME_ID };
      const storedConfig = await api.get(THEME_ID);
      if (!storedConfig) await api.add(defaultConfig);

      const config = storedConfig || defaultConfig;

      setPalettes(config.palettes);
    }
    fetchTheme();
  }, [db]);

  return (
    <Auth.ReadRole>
      <p>Found {palettes.length} palettes.</p>

      <section data-ui='color-palettes'>
        {palettes.map(({ name, colors }, paletteIndex) => <AnkhUiColorPalette key={`palette-${paletteIndex}`} name={name} colors={colors} />)}
      </section>

      <Auth.WriteRole>
        <AnkhUiButton label="Palette" icon="Plus" onClick={() => { }} />
      </Auth.WriteRole>
    </Auth.ReadRole >
  )
};

interface IAnkhUiColorPalettes extends IAnkhUiIntrinsicProps { }