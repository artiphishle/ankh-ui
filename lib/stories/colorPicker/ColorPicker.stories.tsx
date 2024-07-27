import type {Meta, StoryObj} from '@storybook/react';
import {AnkhUiColorPicker} from '@/uis/colorPicker/AnkhUiColorPicker';

const meta: Meta<typeof AnkhUiColorPicker> = {
  component: AnkhUiColorPicker,
};
export default meta;

type Story = StoryObj<typeof AnkhUiColorPicker>;

export const ColorPickerHex000: Story = {
  args: {},
};
