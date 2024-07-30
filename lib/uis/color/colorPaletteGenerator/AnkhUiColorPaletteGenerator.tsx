"use client";
import { ChangeEvent, useEffect, useState } from 'react';
import { useColorPalette, useColorParser } from 'ankh-hooks';
import { AnkhUiCircles, IAnkhUiCircles } from '@/uis/shapes/circles/AnkhUiCircles';
import { EAnkhColorTone, EAnkhUiSize } from 'ankh-types';
import { AnkhUiForm } from '@/uis/form/AnkhUiForm';
import "./paletteGenerator.css";

export function AnkhUiColorPaletteGenerator({ tone }: IAnkhUiColorPaletteGenerator) {
  const [hue, setHue] = useState(240);
  const [title, setTitle] = useState('My Palette');
  const [count, setCount] = useState(5);
  const [ui, setUi] = useState<IAnkhUiCircles>();
  const [palettes, setPalettes] = useState();



  const fields = [
    {
      placeholder: `My Palette`, title: '1', onChange: (event: ChangeEvent) =>
        setTitle((event?.target as HTMLInputElement).value)
    },
    {
      placeholder: "Count", title: '2', onChange: (event: Event) =>
        setCount(Number((event.target as HTMLInputElement).value))
    },
    {
      placeholder: "Hue", title: '3', onChange: (event: Event) =>
        setHue(Number((event.target as HTMLInputElement).value))
    }
  ];

  useEffect(() => {
    function reusePalette({ tone, hue, count }: { tone: EAnkhColorTone, hue: number, count: number }) {
      const re = useColorPalette();
      switch (tone) {
        case EAnkhColorTone.Earth: return re.useEarthPalette({ count, hue });
        case EAnkhColorTone.Fluorescent: return re.useFluorescentPalette({ count, hue });
        case EAnkhColorTone.Jewel: return re.useJewelPalette({ count, hue });
        case EAnkhColorTone.Neutral: return re.useNeutralPalette({ count, hue });
        case EAnkhColorTone.Pastel: return re.usePastelPalette({ count, hue });
        case EAnkhColorTone.Shades: return re.useShadesPalette({ count, hue });
      }
    }
    const colors = reusePalette({ tone, hue, count });
    const palette = {
      title: { title }, circles: colors
        .map((color) => useColorParser().parseHsl(color))
        .map(([h, s, l]) => `hsl(${h}, ${s}%, ${l}%)`)
        .map((color) => ({ color, size: EAnkhUiSize.Md }))
    };

  }, [hue, count])

  return (
    <div data-ui='color-palette-generator'>
      {ui?.circles && <AnkhUiCircles title={""} circles={ui.circles} />}
      <section>
        <AnkhUiForm>{fields.map((field, i) => (<input title='1' key={`field-${i}`} />))}</AnkhUiForm>
      </section>
    </div>
  );
};

interface IAnkhUiColorPaletteGenerator {
  tone: EAnkhColorTone;
}