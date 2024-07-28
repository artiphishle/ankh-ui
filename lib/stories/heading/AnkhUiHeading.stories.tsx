import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiHeading } from '@/uis/heading/AnkhUiHeading';

const meta: Meta<typeof AnkhUiHeading> = {
  title: 'AnkhUi/Heading',
  component: AnkhUiHeading,
};
export default meta;

type Story = StoryObj<typeof AnkhUiHeading>;

export const H1: Story = {
  args: {
    level: "h1"
  }
};
export const H2: Story = {
  args: {
    level: "h2"
  },
};
export const H3: Story = {
  args: {
    level: "h3"
  },
};
export const H4: Story = {
  args: {
    level: "H4"
  }
}