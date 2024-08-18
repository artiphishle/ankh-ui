import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiColorHue } from '@/uis/color/colorHue/AnkhUiColorHue';

const meta: Meta<typeof AnkhUiColorHue> = {
  title: 'AnkhUi/Color/Hue',
  component: AnkhUiColorHue,
};
export default meta;

type Story = StoryObj<typeof AnkhUiColorHue>;

export const Hsl: Story = {
  args: {
    color: 'lab(100%, 50, 50)',
  },
};