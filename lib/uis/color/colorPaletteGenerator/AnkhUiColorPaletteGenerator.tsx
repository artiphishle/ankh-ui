"use client";
import { v4 } from 'uuid';
import { ChangeEvent, useEffect, useState } from 'react';
import { useColorPalette, useColorParser } from 'ankh-hooks';
import { useAnkhCmsConfig } from "ankh-config";
import { EAnkhColorTone, EAnkhUiSize } from 'ankh-types';
import { AnkhUiCircles, IAnkhUiCircles } from '@/uis/shapes/circles/AnkhUiCircles';
import { AnkhUiForm, EAnkhUiFormInputType, IAnkhUiFormItem } from '@/uis/form/AnkhUiForm';
import { AnkhUiButton } from '@/uis/button/AnkhUiButton';
import "./paletteGenerator.css";

export function AnkhUiColorPaletteGenerator({ tone: initialTone }: IAnkhUiColorPaletteGenerator) {
  const { config, setConfig } = useAnkhCmsConfig()!;
  const [hue] = useState(240); /** @deprecated */
  const [repeatUuid, setRepeatUuid] = useState(v4());
  const [tone, setTone] = useState<EAnkhColorTone>(initialTone);
  const [count, setCount] = useState(5);
  const [palette, setPalette] = useState<IAnkhUiCircles>({ circles: [] });
  const fields: IAnkhUiFormItem[] = [
    /*{
      placeholder: 'Title',
      title: 'Palette Title',
      value: palette.title,
      onChange: (event: ChangeEvent<HTMLElement>) =>
        setPalette(({ circles }) => ({ circles, title: (event?.target as HTMLInputElement).value })),
    },
    {
      placeholder: "Count",
      title: 'Color Count',
      value: count.toString(),
      onChange: (event: ChangeEvent<HTMLElement>) =>
        setCount(Number((event.target as HTMLInputElement).value))
    },*/
    {
      type: EAnkhUiFormInputType.Select,
      title: 'Tone',
      options: [
        { name: "Earth", value: EAnkhColorTone.Earth },
        { name: "Fluorescent", value: EAnkhColorTone.Fluorescent },
        { name: "Jewel", value: EAnkhColorTone.Jewel },
        { name: "Neutral", value: EAnkhColorTone.Neutral },
        { name: "Pastel", value: EAnkhColorTone.Pastel },
        { name: "Shades", value: EAnkhColorTone.Shades }
      ],
      onChange: (event: ChangeEvent<HTMLElement>) =>
        setTone(Number((event.target as HTMLOptionElement).value))
    }
  ];

  useEffect(() => {
    function reusePalette({ count }: { hue: number, tone: EAnkhColorTone, count: number }) {
      const re = useColorPalette();
      console.log('config:', config);
      switch (tone) {
        case EAnkhColorTone.Earth: return re.useEarthPalette({ count, hue });
        case EAnkhColorTone.Fluorescent: return re.useFluorescentPalette({ count, hue });
        case EAnkhColorTone.Jewel: return re.useJewelPalette({ count, hue });
        case EAnkhColorTone.Neutral: return re.useNeutralPalette({ count, hue });
        case EAnkhColorTone.Pastel: return re.usePastelPalette({ count, hue });
        case EAnkhColorTone.Shades: return re.useShadesPalette({ count, hue });
      }
    }
    setPalette({
      circles: reusePalette({ tone, hue, count })
        .map((color) => useColorParser().parseHsl(color))
        .map(([h, s, l]) => `hsl(${h}, ${s}%, ${l}%)`)
        .map((color) => ({ color, size: EAnkhUiSize.Md }))
    });
  }, [tone, count, repeatUuid])

  return (
    <div data-ui='color-palette-generator'>
      {palette.circles && (
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '.4rem', display: 'flex', flexDirection: 'column' }}>
            <div>
              <AnkhUiForm items={fields} />
              <AnkhUiButton icon="refresh-ccw" label='' onClick={() => setRepeatUuid(v4())} />
            </div>
            <div>
              <AnkhUiButton label='-' onClick={() => setCount((prevCount) => prevCount - 1)} />
              <AnkhUiButton label='+' onClick={() => setCount((prevCount) => prevCount + 1)} />
            </div>
          </div>
          <AnkhUiCircles circles={palette.circles} />
        </div>
      )}
    </div>
  );
};

interface IAnkhUiColorPaletteGenerator {
  tone: EAnkhColorTone;
}