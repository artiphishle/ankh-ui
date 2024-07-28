import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiIcon } from '@/uis/icon/AnkhUiIcon';

const meta: Meta<typeof AnkhUiIcon> = {
  title: 'AnkhUi/Icon',
  component: AnkhUiIcon,
};
export default meta;

type Story = StoryObj<typeof AnkhUiIcon>;


export const HouseIcon: Story = {
  args: {
    name: "House"
  },
};
