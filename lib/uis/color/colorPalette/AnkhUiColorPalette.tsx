"use client";
import { Auth } from "@/auth/Auth";
import { EAnkhColorTone, EAnkhUiSize, IAnkhColorHsl } from "ankh-types";
import { /* AnkhUiForm, */ EAnkhUiFormInputType, IAnkhUiFormItem } from "@/uis/form/AnkhUiForm";
import { AnkhUiCircles } from "@/uis/shapes/circles/AnkhUiCircles";
import type { IAnkhUiCircle } from "@/uis/shapes/circle/AnkhUiCircle";
import { ChangeEvent, useState } from "react";
import { AnkhUiButton } from "@/uis/button/AnkhUiButton";

export function AnkhUiColorPalette({ colors }: IAnkhUiColorPalette) {
  const [selectedTone, setSelectedTone] = useState<EAnkhColorTone>(EAnkhColorTone.Earth);
  const toneOptions = Object.keys(EAnkhColorTone).map((name: string) => ({ name, value: name }));
  const circles: IAnkhUiCircle[] = colors.map(({ h, s, l }) => ({ color: `hsl(${h},${s}%,${l}%)`, size: EAnkhUiSize.Sm }));

  const $e = {
    change: {
      tone: (event: ChangeEvent<HTMLElement>) => setSelectedTone(EAnkhColorTone[(event.target as HTMLSelectElement).value as keyof typeof EAnkhColorTone])
    }
  };

  const formItems: IAnkhUiFormItem[] = [
    // { title: "Hue", type: EAnkhUiFormInputType.Range, min: 0, max: 360, value: 240 },
    {
      title: "Tone", type: EAnkhUiFormInputType.Select, options: toneOptions, value: selectedTone, onChange: $e.change.tone
    }
  ];

  return (
    <Auth.ReadRole>
      <div style={{ display: 'flex', alignItems: 'center', background: '#eee', padding: '1rem', marginBottom: '.4rem' }} data-ui='color-palette'>
        <AnkhUiCircles circles={circles} />
        <AnkhUiButton icon="pencil" label='' />
        {/*<Auth.WriteRole>
          <AnkhUiForm items={formItems} />
        </Auth.WriteRole>*/}
      </div>
    </Auth.ReadRole>
  );
}

interface IAnkhUiColorPalette {
  colors: IAnkhColorHsl[];
  active?: boolean;
}