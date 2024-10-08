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
    level: "h1",
    text: "Heading 1"
  }
};
export const H2: Story = {
  args: {
    level: "h2",
    text: "Heading 2"
  },
};
export const H3: Story = {
  args: {
    level: "h3",
    text: "Heading 3"
  },
};
export const H4: Story = {
  args: {
    level: "h4",
    text: "Heading 4"
  }
}