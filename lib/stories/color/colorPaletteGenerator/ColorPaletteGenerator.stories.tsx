import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiColorPaletteGenerator } from '@/uis/color/colorPaletteGenerator/AnkhUiColorPaletteGenerator';

const meta: Meta<typeof AnkhUiColorPaletteGenerator> = {
  title: 'AnkhUi/Color/PaletteGenerator',
  component: AnkhUiColorPaletteGenerator,
};
export default meta;

type Story = StoryObj<typeof AnkhUiColorPaletteGenerator>;

export const ColorPaletteGenerator: Story = {
  args: {
  },
};