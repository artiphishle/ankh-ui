import type { Meta /* ,StoryObj */ } from '@storybook/react';
import { AnkhUiSliderTarget, EAnkhUiSliderFx } from '@/uis/slider/AnkhUiSliderTarget';
import { AnkhUiSliderToggle } from '@/uis/slider/AnkhUiSliderToggle';

const meta: Meta<typeof AnkhUiSliderTarget> = {
  title: 'AnkhUi/Slider',
  component: AnkhUiSliderTarget,
};
export default meta;

// type Story = StoryObj<typeof AnkhUiSliderTarget>;
// type StoryToggle = StoryObj<typeof AnkhUiSliderToggle>;

export const Slider = () =>
  <div>
    <AnkhUiSliderTarget fx={EAnkhUiSliderFx.SlideLeft} toggleBack={true} _ui={{ id: 'sb-slider-target-01' }} sliderId='slider'>Content</AnkhUiSliderTarget>
    <AnkhUiSliderToggle _ui={{ id: 'sb-slider-toggle-01' }} icon='menu' label='Menu' toggleId='slider' />
  </div>;