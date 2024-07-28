"use client";
import { useEffect, useState } from 'react';
import { useColorPalette, useColorParser } from 'ankh-hooks';
import { AnkhUiCircles, IAnkhUiCircles } from '@/uis/shapes/circles/AnkhUiCircles';
import { EAnkhUiSize } from 'ankh-types';
import { AnkhUiHeading } from '@/uis/heading/AnkhUiHeading';
import "./paletteGenerator.css";
import { AnkhUiForm } from '../form/AnkhUiForm';

export function AnkhUiColorPaletteGenerator() {
  const [hue, setHue] = useState(240);
  const [saturationRange, setSaturationRange] = useState<[number, number]>([0, 100]);
  const [lightnessRange, setLightnessRange] = useState<[number, number]>([0, 100]);
  const [title, setTitle] = useState('My Color Palette');
  const [count, setCount] = useState(5);
  const [circles, setCircles] = useState<IAnkhUiCircles>();
  const {
    useEarthPalette,
    useFluorescentPalette,
    useJewelPalette,
    useNeutralPalette,
    usePastelPalette,
    useShadesPalette
  } = useColorPalette();

  useEffect(() => {
    console.log('hue', hue);
    console.log('lightnessRange', lightnessRange);
    console.log('saturationRange', saturationRange);
    console.log('count', count);
    const tone = EColorTone.Earth;

    const colors = useEarthPalette({ hue, count });

    const circlesProps = {
      title: "My Earth Tone Palette",
      circles: colors
        .map((color) => useColorParser().parseHsl(color))
        .map(([h, s, l]) => `hsl(${h}, ${s}%, ${l}%)`)
        .map((color) => ({ color, size: EAnkhUiSize.Md }))
    };

    setCircles({ ...circlesProps });
  }, [hue, lightnessRange, saturationRange, count])

  const handleRangeChange = (setter: React.Dispatch<React.SetStateAction<[number, number]>>, index: number, value: number) => {
    setter((prev) => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };

  return (
    <>
      <AnkhUiHeading level="h1" text="Custom Color Palette Generator" />
      <div data-ui='color-palette-generator'>
        <div>{circles?.circles && <AnkhUiCircles title={""} circles={circles.circles} />}</div>
        <section>
          <AnkhUiForm>

            <div data-ui='form-row'>
              <label>Title:
                <input style={{ border: '0', background: 'transparent' }} onChange={(e) => setTitle(e.target.value)} type='text' value={title} />
              </label>
              <label>Count:
                <input
                  type="number"
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  min={1}
                />
              </label>
            </div>
            <div data-ui='form-row'>
              <label>Hue:
                <input
                  type="number"
                  value={hue}
                  onChange={(e) => setHue(Number(e.target.value))}
                  min={0}
                  max={360}
                />
              </label>
            </div>
          </AnkhUiForm>
        </section>
      </div>
    </>
  );
};

enum EColorTone {
  Earth,
  Fluorescent,
  Jewel,
  Neutral,
  Pastel,
  Shades
}