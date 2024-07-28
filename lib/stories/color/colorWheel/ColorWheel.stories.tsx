import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiColorWheel } from '@/uis/color/colorWheel/AnkhUiColorWheel';
import { EAnkhUiSize } from 'ankh-types';

const meta: Meta<typeof AnkhUiColorWheel> = {
  title: 'AnkhUi/Color/Wheel',
  component: AnkhUiColorWheel,
};
export default meta;

type Story = StoryObj<typeof AnkhUiColorWheel>;

export const ColorWheel: Story = {
  args: { size: EAnkhUiSize.Xl },
};
