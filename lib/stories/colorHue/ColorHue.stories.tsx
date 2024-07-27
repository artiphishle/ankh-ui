import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiColorHue } from '@/uis/colorHue/AnkhUiColorHue';

const meta: Meta<typeof AnkhUiColorHue> = {
  component: AnkhUiColorHue,
};
export default meta;

type Story = StoryObj<typeof AnkhUiColorHue>;

export const Hex: Story = {
  args: {
    color: '#00397b',
  },
};

export const Hsl: Story = {
  args: {
    color: 'hsl(212.2, 100%, 24.12%)',
  },
};

export const Lab: Story = {
  args: {
    color: 'lab(20% -10 -50)',
  },
};

export const Rgb: Story = {
  args: {
    color: 'rgb(0, 57, 123)',
  },
};
