"use client";
import { useEffect, useState } from "react";
import { useIndexedDb } from "ankh-hooks";
import { AnkhUiButton } from "@/uis/button/AnkhUiButton";
import { AnkhUiHeading } from "@/uis/heading/AnkhUiHeading";
import { useActivePalette } from "ankh-config";
import { EAnkhUiSize, EAnkhUiVariant, type IAnkhCmsThemePalette, type IAnkhColorHsl, type IAnkhUiIntrinsicProps } from "ankh-types";

export function AnkhUiHero({ _ui: { id }, heading, button }: IAnkhUiHero) {
  const { db, api } = useIndexedDb<any>({ dbName: 'ankh-cms', storeName: 'ui-config' });
  const [headingTitle, setHeadingTitle] = useState("");
  const [buttonLabel, setButtonLabel] = useState("");

  const stringifyHsl = ({ h, s, l }: IAnkhColorHsl) => `hsl(${h}, ${s}%, ${l}%)`;
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  useEffect(() => {
    if (!db) return;

    const loadConfig = async () => {
      const defaultConfig: IAnkhUiHeroConfig = { id, heading, button };

      const storedConfig = await api.get(id);
      if (!storedConfig) await api.add(defaultConfig);

      const config = storedConfig || defaultConfig;
      setHeadingTitle(config.heading.title);
      setButtonLabel(config.button.label);
    };
    loadConfig();
  }, [db]);

  if (!palette) return;

  const backgroundColor = stringifyHsl(palette.colors[2]!);

  return (
    <section data-ui='hero' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor, padding: '2rem' }}>
      <AnkhUiHeading level="h1" text={headingTitle} />
      <AnkhUiButton size={EAnkhUiSize.Xl} variant={EAnkhUiVariant.Primary} label={buttonLabel} />
    </section>
  );
}

interface IAnkhUiHero extends IAnkhUiIntrinsicProps {
  readonly heading: { title: string };
  readonly button: { label: string };
}

interface IAnkhUiHeroConfig extends Omit<IAnkhUiHero, '_ui'> {
  readonly id: IDBValidKey;
}