import { type PropsWithChildren } from "react";
import type { IAnkhUiIntrinsicProps } from "ankh-types";
import { AnkhUiSliderToggle } from "./AnkhUiSliderToggle";
import "./slider.css";

export function AnkhUiSliderTarget({ _ui: { id }, fx = EAnkhUiSliderFx.SlideLeft, sliderId, toggleBack, children }: IAnkhUiSlider) {
  const $ = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '.4rem',
    height: '100%'
  };

  return (
    <section className={fx} data-ui='slider-target' style={{ ...$, flexDirection: 'column' }} id={sliderId}>
      {toggleBack && <AnkhUiSliderToggle _ui={{ id: 70661384 }} toggleId="" icon="x" />}
      {children}
    </section>
  );
}

export enum EAnkhUiSliderFx {
  SlideLeft = "slideLeft",
  SlideRight = "slideRight"
}

interface IAnkhUiSlider extends IAnkhUiIntrinsicProps, PropsWithChildren {
  readonly sliderId: string;
  readonly toggleBack?: boolean;
  readonly fx?: EAnkhUiSliderFx
}