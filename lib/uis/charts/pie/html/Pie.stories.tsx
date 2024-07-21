import type { Meta, StoryObj } from '@storybook/react';
import { Pie } from './Pie';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Pie> = {
  component: Pie,
};

export default meta;
type Story = StoryObj<typeof Pie>;

export const Pie8: Story = {
  args: {
    percentage: 8
  },
};

export const Pie25: Story = {
  args: {
    percentage: 25
  },
};

export const Pie50: Story = {
  args: {
    percentage: 50
  },
};

export const Pie65: Story = {
  args: {
    percentage: 65
  },
};
