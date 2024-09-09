import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiBatch } from '@/uis/batch/AnkhUiBatch';
import { EAnkhUiVariant } from 'ankh-types';

const meta: Meta<typeof AnkhUiBatch> = {
  title: 'AnkhUi/Batch',
  component: AnkhUiBatch,
};
export default meta;

type Story = StoryObj<typeof AnkhUiBatch>;

export const Primary: Story = {
  args: {
    initialValue: 4,
    variant: EAnkhUiVariant.Primary
  },
};

export const Secondary: Story = {
  args: {
    initialValue: 4,
    variant: EAnkhUiVariant.Secondary
  },
};

export const Accent: Story = {
  args: {
    initialValue: 4,
    variant: EAnkhUiVariant.Accent
  },
};