import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiLemniscate } from '@/uis/animation/lemniscate/AnkhUiLemniscate';

const meta: Meta<typeof AnkhUiLemniscate> = {
  title: 'AnkhUi/Animation',
  component: AnkhUiLemniscate,
};

export default meta;
type Story = StoryObj<typeof AnkhUiLemniscate>;

export const Infinity: Story = {
  args: {},
};
