"use client";
import { Auth } from "@/auth/Auth";
import { EAnkhColorTone, EAnkhUiSize, IAnkhColorHsl } from "ankh-types";
import { AnkhUiForm, EAnkhUiFormInputType, IAnkhUiFormItem } from "@/uis/form/AnkhUiForm";
import { AnkhUiCircles } from "@/uis/shapes/circles/AnkhUiCircles";
import type { IAnkhUiCircle } from "@/uis/shapes/circle/AnkhUiCircle";
import { ChangeEvent, useState } from "react";
import { AnkhUiButton } from "@/uis/button/AnkhUiButton";
import { useColorPalette } from "ankh-hooks";

export function AnkhUiColorPalette({ name, colors }: IAnkhUiColorPalette) {
  const { getUsedColorTone } = useColorPalette();
  const [selectedTone, setSelectedTone] = useState<EAnkhColorTone | undefined | "">(getUsedColorTone(colors));
  const [isEditMode, setIsEditMode] = useState(false);
  const toneOptions = Object.keys(EAnkhColorTone).map((toneName: string) => ({ name: toneName, value: toneName }));
  const circles: IAnkhUiCircle[] = colors.map(({ h, s, l }, colorIndex) => ({ _ui: { id: `color-${colorIndex}` }, style: { backgroundColor: `hsl(${h},${s}%,${l}%)` }, size: EAnkhUiSize.Sm }));

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
        <div>
          <h4>{name}</h4>
          <AnkhUiCircles circles={circles} />
        </div>
        <Auth.WriteRole>
          {!isEditMode
            ? <AnkhUiButton icon="pencil" label='' onClick={() => setIsEditMode(true)} />
            :
            <>
              <AnkhUiForm items={formItems}></AnkhUiForm>
              <AnkhUiButton label="OK" onClick={() => setIsEditMode(false)} />
              <AnkhUiButton label="Cancel" onClick={() => setIsEditMode(false)} />
            </>
          }
        </Auth.WriteRole>
      </div>
    </Auth.ReadRole>
  );
}

export interface IAnkhUiColorPalette {
  name: string;
  colors: IAnkhColorHsl[];
  active?: boolean;
}