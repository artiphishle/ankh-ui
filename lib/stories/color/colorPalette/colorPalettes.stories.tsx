import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiColorPalettes } from '@/uis/color/colorPalette/AnkhUiColorPalettes';

const meta: Meta<typeof AnkhUiColorPalettes> = {
  title: 'AnkhUi/Color/ColorPalettes',
  component: AnkhUiColorPalettes,
};
export default meta;

type Story = StoryObj<typeof AnkhUiColorPalettes>;

export const Palettes: Story = {
  args: {},
};