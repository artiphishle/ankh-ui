import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiColorPaletteGenerator } from '@/uis/colorPaletteGenerator/AnkhUiColorPaletteGenerator';

const meta: Meta<typeof AnkhUiColorPaletteGenerator> = {
  component: AnkhUiColorPaletteGenerator,
};
export default meta;

type Story = StoryObj<typeof AnkhUiColorPaletteGenerator>;

export const ColorPaletteGenerator: Story = {
  args: {
  },
};