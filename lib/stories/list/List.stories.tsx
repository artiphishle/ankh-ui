import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiList } from '@/uis/list/AnkhUiList';

const meta: Meta<typeof AnkhUiList> = {
  component: AnkhUiList,
};
export default meta;

type Story = StoryObj<typeof AnkhUiList>;

export const SwappableList: Story = {
  args: {
    items: [
      <div key="1">List Item 01</div>,
      <div key="2">List Item 02</div>,
      <div key="3">List Item 03</div>,
      <div key="4">List Item 04</div>,
      <div key="5">List Item 05</div>,
      <div key="6">List Item 06</div>,
    ],
  },
};
