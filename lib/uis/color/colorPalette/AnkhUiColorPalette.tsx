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
  const [selectedTone, setSelectedTone] = useState<EAnkhColorTone>(getUsedColorTone(colors));
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState<number | null>(null);
  const toneOptions = Object.keys(EAnkhColorTone).map((toneName: string) => ({ name: toneName, value: toneName }));
  const circles: IAnkhUiCircle[] = colors.map(({ h, s, l }, colorIndex) => ({ _ui: { id: `color-${colorIndex}` }, style: { backgroundColor: `hsl(${h},${s}%,${l}%)` }, size: EAnkhUiSize.Sm }));

  const $e = {
    change: {
      tone: (event: ChangeEvent<HTMLElement>) => setSelectedTone(EAnkhColorTone[(event.target as HTMLSelectElement).value as keyof typeof EAnkhColorTone])
    },
    toggle: {
      circle: (circleIndex: number) => isEditMode && setCurrentColorIndex(circleIndex)
    }
  };

  const formItemsEdit: IAnkhUiFormItem[] = [
    {
      title: "Name",
      type: EAnkhUiFormInputType.Text,
      value: name
    },
    {
      title: "Tone",
      type: EAnkhUiFormInputType.Text,
      value: selectedTone,
      // disabled: true
    },
    {
      title: "Hue",
      type: EAnkhUiFormInputType.Range,
      value: colors[currentColorIndex as number]?.h || 0,
      label: "H",
      min: 0,
      max: 360
    },
    {
      title: "Saturation",
      type: EAnkhUiFormInputType.Range,
      value: colors[currentColorIndex as number]?.s || 0,
      label: "S",
      min: 0,
      max: 100
    },
    {
      title: "Lightness",
      type: EAnkhUiFormInputType.Range,
      value: colors[currentColorIndex as number]?.l || 0,
      label: "L",
      min: 0,
      max: 100,
    }
  ];

  const formItemsCreate: IAnkhUiFormItem[] = [
    // { title: "Hue", type: EAnkhUiFormInputType.Range, min: 0, max: 360, value: 240 },
    {
      title: "Tone",
      type: EAnkhUiFormInputType.Select,
      options: toneOptions,
      value: selectedTone,
      onChange: $e.change.tone
    }
  ];

  return (
    <Auth.ReadRole>
      <div className="flex items-start bg-[#eee] p-[1rem] mb-[.4rem]" data-ui='color-palette'>
        <div className="flex-1">
          <h4>{name}</h4>
          <AnkhUiCircles circles={circles} onCircleClick={$e.toggle.circle} />
        </div>
        <Auth.WriteRole>
          {isEditMode
            ?
            <>
              <AnkhUiForm items={formItemsEdit} />
              <AnkhUiButton label="OK" onClick={() => setIsEditMode(false)} />
              <AnkhUiButton label="Cancel" onClick={() => { setCurrentColorIndex(null); setIsEditMode(false) }} />
            </>
            :
            <AnkhUiButton icon="pencil" label='' onClick={() => setIsEditMode(true)} />
          }
        </Auth.WriteRole>
      </div>
    </Auth.ReadRole>
  );
}

export interface IAnkhUiColorPalette {
  readonly name: string;
  readonly colors: IAnkhColorHsl[];
  readonly active?: boolean;
}