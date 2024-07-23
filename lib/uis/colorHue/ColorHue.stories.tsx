import type { Meta, StoryObj } from '@storybook/react';
import { ColorHue } from './ColorHue';

const meta: Meta<typeof ColorHue> = {
  component: ColorHue,
};
export default meta;

type Story = StoryObj<typeof ColorHue>;

export const Hex: Story = {
  args: {
    color: "#00397b"
  },
};

export const Hsl: Story = {
  args: {
    color: "hsl(212.2, 100%, 24.12%)"
  },
};

export const Lab: Story = {
  args: {
    color: "lab(20% -10 -50)"
  },
};

export const Rgb: Story = {
  args: {
    color: "rgb(0, 57, 123)"
  },
};