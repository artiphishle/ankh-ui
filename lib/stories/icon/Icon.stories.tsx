import { AnkhUiIcon } from '@/uis/icon/AnkhUiIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnkhUiIcon> = {
  title: 'AnkhUi/Icon',
  component: AnkhUiIcon,
};

export default meta;

export const HouseIcon: Story = {
  args: { name: "House" },
};

type Story = StoryObj<typeof AnkhUiIcon>;