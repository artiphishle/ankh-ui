import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiEye } from '@/uis/animation/eye/AnkhUiEye';

const meta: Meta<typeof AnkhUiEye> = {
  title: 'AnkhUi/Animation',
  component: AnkhUiEye,
};

export default meta;
type Story = StoryObj<typeof AnkhUiEye>;

export const Eye: Story = {
  args: {},
};
