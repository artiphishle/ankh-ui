import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiIcon } from '@/uis/icon/AnkhUiIcon';

const meta: Meta<typeof AnkhUiIcon> = {
  component: AnkhUiIcon,
};
export default meta;

type Story = StoryObj<typeof AnkhUiIcon>;


export const HouseIcon: Story = {
  args: {
    name: "House"
  },
};
