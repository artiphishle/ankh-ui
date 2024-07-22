import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
};
export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const ColorPickerHex000: Story = {
  args: {},
};