import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiColorPicker } from '@/uis/color/colorPicker/AnkhUiColorPicker';

const meta: Meta<typeof AnkhUiColorPicker> = {
  title: 'AnkhUi/Color/Picker',
  component: AnkhUiColorPicker,
};
export default meta;

type Story = StoryObj<typeof AnkhUiColorPicker>;

export const ColorPickerHex000: Story = {
  args: {},
};
