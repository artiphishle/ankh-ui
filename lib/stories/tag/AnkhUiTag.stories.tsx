import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiTag } from '@/uis/tag/AnkhUiTag';

const meta: Meta<typeof AnkhUiTag> = {
  title: 'AnkhUi/Tag',
  component: AnkhUiTag,
};
export default meta;

type Story = StoryObj<typeof AnkhUiTag>;

export const PurpleCircleXs: Story = {
  args: {
  },
};